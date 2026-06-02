"use client";

import { Mail, Check, Loader2 } from "lucide-react";
import { useWaitlist } from "../../hooks/useWaitlist";

export function CTA() {
  const { email, setEmail, status, message, handleSubmit } = useWaitlist();

  return (
    <section id="download" className="py-24 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold mb-4">
            Ready to see the big picture?
          </h2>

          <p className="text-foreground-muted mb-8">
            Transform how you understand your projects with VENORE AI.
          </p>

          {/* Waitlist Form */}
          {status === "success" ? (
            <div className="flex items-center gap-3 px-4 py-3 bg-green-500/10 border border-green-500/20 rounded-lg animate-success-pop max-w-md">
              <Check className="w-5 h-5 text-green-500" />
              <span className="text-green-500">You're on the list!</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 max-w-md mb-8">
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
            <p className="text-red-400 text-sm mt-2 mb-8">{message}</p>
          )}

          <div className="flex items-center gap-4 text-sm text-foreground-subtle">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-status-in-progress" />
              <span>Windows (soon)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-status-in-progress" />
              <span>macOS (soon)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-status-in-progress" />
              <span>Linux (soon)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
