import { useEffect, useState } from "react";

const ALLOWED_REDIRECT_PATTERNS = [
  /^http:\/\/localhost:\d+\/callback$/,
  /^http:\/\/127\.0\.0\.1:\d+\/callback$/,
];

function isValidRedirectUri(uri: string): boolean {
  return ALLOWED_REDIRECT_PATTERNS.some((pattern) => pattern.test(uri));
}

type Status = "processing" | "success" | "error";

export function AuthCallback() {
  const [status, setStatus] = useState<Status>("processing");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    handleCallback();
  }, []);

  async function handleCallback() {
    try {
      // Implicit flow: tokens come in the URL hash fragment
      // e.g. #access_token=xxx&refresh_token=yyy&token_type=bearer&...
      const hash = window.location.hash.substring(1); // remove leading #
      const params = new URLSearchParams(hash);

      const accessToken = params.get("access_token");
      const refreshToken = params.get("refresh_token");

      // redirect_uri comes from query params (set before OAuth redirect)
      const queryParams = new URLSearchParams(window.location.search);
      const redirectUri = queryParams.get("redirect_uri");

      if (!accessToken) {
        setStatus("error");
        setError("No access token received. Please try again.");
        return;
      }

      // If redirect_uri exists (desktop app flow), redirect with tokens
      if (redirectUri) {
        if (!isValidRedirectUri(redirectUri)) {
          setStatus("error");
          setError("Invalid redirect URI.");
          return;
        }

        const target = new URL(redirectUri);
        target.searchParams.set("access_token", accessToken);
        if (refreshToken) {
          target.searchParams.set("refresh_token", refreshToken);
        }

        setStatus("success");

        // Small delay so user sees the success state
        setTimeout(() => {
          window.location.href = target.toString();
        }, 500);
        return;
      }

      // No redirect_uri — web-only login (future use)
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setError("An unexpected error occurred.");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="w-full max-w-sm text-center">
        <div className="flex justify-center mb-8">
          <a href="/">
            <img src="/logo.svg" alt="VENORE" className="h-7" width={113} height={28} />
          </a>
        </div>

        <div className="border border-border rounded-lg p-6 bg-background-secondary">
          {status === "processing" && (
            <>
              <div className="flex justify-center mb-4">
                <svg className="w-8 h-8 animate-spin text-foreground-muted" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
              </div>
              <p className="text-sm text-foreground-muted">
                Completing sign in...
              </p>
            </>
          )}

          {status === "success" && (
            <>
              <div className="flex justify-center mb-4">
                <svg className="w-8 h-8 text-status-stable" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-sm text-foreground">
                Signed in successfully!
              </p>
              <p className="text-xs text-foreground-muted mt-2">
                Redirecting to Venore...
              </p>
            </>
          )}

          {status === "error" && (
            <>
              <div className="flex justify-center mb-4">
                <svg className="w-8 h-8 text-status-critical" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <p className="text-sm text-foreground mb-1">
                Authentication failed
              </p>
              <p className="text-xs text-foreground-muted">
                {error}
              </p>
              <a
                href="/auth"
                className="inline-block mt-4 text-sm text-foreground hover:underline"
              >
                Try again
              </a>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
