"use client";

import { Github } from "lucide-react";

export function CTA() {
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

          <a
            href="https://github.com/edinsonjohender/venore"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 h-10 px-5 bg-foreground text-background text-sm font-medium rounded-md hover:bg-foreground/90 transition-colors w-fit mb-8"
          >
            <Github className="w-4 h-4" />
            View on GitHub
          </a>

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
