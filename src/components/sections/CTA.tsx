"use client";

import { Download, Github } from "lucide-react";
import { WINDOWS_DOWNLOAD_URL, REPO_URL, VERSION } from "../../lib/release";

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

          <div className="flex flex-wrap items-center gap-3 mb-4">
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

          <p className="text-xs text-foreground-subtle mb-8">
            v{VERSION} · unsigned installer, so Windows SmartScreen may warn you: click <span className="text-foreground-muted">More info → Run anyway</span>.
          </p>

          <div className="flex items-center gap-4 text-sm text-foreground-subtle">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-status-stable" />
              <span>Windows</span>
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
