"use client";

import { Mail, Check, Loader2 } from "lucide-react";
import { useWaitlist } from "../../hooks/useWaitlist";
import { IsometricGrid } from "../svg/IsometricGrid";

export function Hero() {
  const { email, setEmail, status, message, handleSubmit } = useWaitlist();

  return (
    <section className="relative border-b border-border">
      {/* Navbar space */}
      <div className="h-14" />

      {/* Main 2-column layout */}
      <div className="h-[calc(100vh-3.5rem)] max-h-[800px] grid grid-cols-1 lg:grid-cols-2">

        {/* Left column - Isometric visualization */}
        <div
          className="border-r border-border relative overflow-hidden animate-hero-fade"
        >
          <IsometricGrid />
        </div>

        {/* Right column - Content + Info */}
        <div className="flex flex-col">

          {/* Main content */}
          <div
            className="flex-1 flex flex-col justify-center px-8 lg:px-12 animate-hero-up"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 border border-border px-3 py-1 text-xs text-foreground-muted mb-6 w-fit">
              <span className="h-1.5 w-1.5 rounded-full bg-status-stable" />
              Waitlist Access Only
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              The Context Layer
              <br />
              <span className="text-foreground-muted">for Autonomous Engineering</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-foreground-muted mb-8 max-w-md">
              Visual mastery for you. Structural truth for your AI. Finally, a shared reality for the entire engineering team—biological or synthetic.
            </p>

            {/* Waitlist Form */}
            {status === "success" ? (
              <div
                className="flex items-center gap-3 px-4 py-3 bg-green-500/10 border border-green-500/20 rounded-lg animate-success-pop"
              >
                <Check className="w-5 h-5 text-green-500" />
                <span className="text-green-500">You're on the list!</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 max-w-md">
                <div className="relative flex-1">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground-subtle" />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full h-10 pl-10 pr-4 bg-background border border-border rounded-md text-sm placeholder:text-foreground-subtle focus:outline-none focus:border-foreground/30 transition-colors"
                    disabled={status === "loading"}
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="h-10 px-5 bg-foreground text-background text-sm font-medium rounded-md hover:bg-foreground/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
                >
                  {status === "loading" ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    "Request Protocol Access"
                  )}
                </button>
              </form>
            )}
            {status === "error" && (
              <p className="text-red-400 text-sm mt-2">{message}</p>
            )}
          </div>

          {/* Bottom info - 2 columns */}
          <div
            className="border-t border-border grid grid-cols-2 divide-x divide-border animate-hero-up-delayed"
          >
            {/* Format */}
            <div className="p-6 lg:p-8">
              <p className="text-xs text-foreground-subtle uppercase tracking-wider mb-3">Format</p>
              <p className="text-sm font-mono text-foreground mb-3">.context.md</p>
              <pre className="text-xs text-foreground-subtle font-mono leading-relaxed">{`status: stable
layers:
  - context
  - tests: 85%`}</pre>
            </div>

            {/* Performance */}
            <div className="p-6 lg:p-8">
              <p className="text-xs text-foreground-subtle uppercase tracking-wider mb-3">Performance</p>
              <div className="space-y-4">
                <div>
                  <p className="text-2xl font-mono">&lt;100ms</p>
                  <p className="text-xs text-foreground-subtle">File sync</p>
                </div>
                <div>
                  <p className="text-2xl font-mono">60fps</p>
                  <p className="text-xs text-foreground-subtle">Rendering</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
