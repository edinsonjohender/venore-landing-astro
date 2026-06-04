"use client";

import { Download, Github } from "lucide-react";
import { IsometricGrid } from "../svg/IsometricGrid";
import { WINDOWS_DOWNLOAD_URL, REPO_URL } from "../../lib/release";

export function Hero() {
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
              Open source
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

            {/* CTA */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={WINDOWS_DOWNLOAD_URL}
                className="inline-flex items-center justify-center gap-2 h-10 px-5 bg-foreground text-background text-sm font-medium rounded-md hover:bg-foreground/90 transition-colors w-fit"
              >
                <Download className="w-4 h-4" />
                Download for Windows
              </a>
              <a
                href={REPO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 h-10 px-5 border border-border text-foreground text-sm font-medium rounded-md hover:bg-background-tertiary transition-colors w-fit"
              >
                <Github className="w-4 h-4" />
                View on GitHub
              </a>
            </div>
          </div>

          {/* Bottom info - 2 columns */}
          <div
            className="border-t border-border grid grid-cols-2 divide-x divide-border animate-hero-up-delayed"
          >
            {/* Format */}
            <div className="p-6 lg:p-8">
              <p className="text-xs text-foreground-subtle uppercase tracking-wider mb-3">Format</p>
              <p className="text-sm font-mono text-foreground mb-3">project-memory.json</p>
              <pre className="text-xs text-foreground-subtle font-mono leading-relaxed">{`{
  "name": "Venore",
  "state": "in development",
  "goals": [ ... ],
  "conventions": [ ... ]
}`}</pre>
            </div>

            {/* Performance */}
            <div className="p-6 lg:p-8">
              <p className="text-xs text-foreground-subtle uppercase tracking-wider mb-3">Engine</p>
              <div className="space-y-4">
                <div>
                  <p className="text-2xl font-mono">12</p>
                  <p className="text-xs text-foreground-subtle">Languages parsed via AST</p>
                </div>
                <div>
                  <p className="text-2xl font-mono">Rust</p>
                  <p className="text-xs text-foreground-subtle">Local-first core, your own keys</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
