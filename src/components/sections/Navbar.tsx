"use client";

import { Button } from "../ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
      <nav className="container mx-auto px-6 h-14 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img src="/logo.svg" alt="VENORE" className="h-6" width={97} height={24} fetchPriority="high" />
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          <a href="#features" className="text-sm text-foreground-muted hover:text-foreground transition-colors">
            Features
          </a>
          <a href="#how-it-works" className="text-sm text-foreground-muted hover:text-foreground transition-colors">
            How it works
          </a>
          <a href="#download" className="text-sm text-foreground-muted hover:text-foreground transition-colors">
            Download
          </a>
          <a href="/blog" className="text-sm text-foreground-muted hover:text-foreground transition-colors">
            Blog
          </a>
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Button size="sm" disabled>Coming Soon</Button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-foreground-muted hover:text-foreground"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div
          className="md:hidden border-t border-border bg-background animate-menu-open"
        >
          <div className="container mx-auto px-6 py-4 flex flex-col gap-3">
            <a
              href="#features"
              className="text-sm text-foreground-muted hover:text-foreground transition-colors py-1"
              onClick={() => setIsOpen(false)}
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-sm text-foreground-muted hover:text-foreground transition-colors py-1"
              onClick={() => setIsOpen(false)}
            >
              How it works
            </a>
            <a
              href="#download"
              className="text-sm text-foreground-muted hover:text-foreground transition-colors py-1"
              onClick={() => setIsOpen(false)}
            >
              Download
            </a>
            <a
              href="/blog"
              className="text-sm text-foreground-muted hover:text-foreground transition-colors py-1"
              onClick={() => setIsOpen(false)}
            >
              Blog
            </a>
            <Button size="sm" className="w-full mt-2" disabled>
              Coming Soon
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
