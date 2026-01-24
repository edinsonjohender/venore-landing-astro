import type { APIRoute } from 'astro';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email || !email.includes('@')) {
      return new Response(
        JSON.stringify({ error: 'Invalid email' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const BREVO_API_KEY = import.meta.env.BREVO_API_KEY;
    const BREVO_LIST_ID = import.meta.env.BREVO_LIST_ID || '2';

    if (!BREVO_API_KEY) {
      console.error('BREVO_API_KEY not configured');
      return new Response(
        JSON.stringify({ error: 'Server configuration error' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const response = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'content-type': 'application/json',
        'api-key': BREVO_API_KEY,
      },
      body: JSON.stringify({
        email,
        listIds: [parseInt(BREVO_LIST_ID)],
        updateEnabled: true,
      }),
    });

    if (response.ok) {
      return new Response(
        JSON.stringify({ success: true, message: "You're on the list!" }),
        { status: 200, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const errorData = await response.json();

    // If contact already exists, treat as success
    if (errorData.code === 'duplicate_parameter') {
      return new Response(
        JSON.stringify({ success: true, message: "You're already on the list!" }),
        { status: 200, headers: { 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({ error: errorData.message || 'Registration failed' }),
      { status: response.status, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Waitlist error:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
