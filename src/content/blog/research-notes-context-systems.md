---
title: "Research Notes: What I Learned Studying Context Systems for AI"
description: "A few days into building VENORE, I researched existing approaches to code documentation and context for AI. These are my findings."
date: 2025-12-05
category: "Research"
image: "/images/research-notes.webp"
---

I'm only a few days into building VENORE. This is not a polished announcement. These are personal research notes — the things I've been learning while exploring how others have tried to give AI meaningful context about real codebases.

These findings are influencing the early decisions behind VENORE. They will probably change again as I learn more and get real user feedback.

## The Problem I'm Trying to Solve

Large language models can read code, but they struggle with intent. They see functions and classes, but not the reasoning behind architectural decisions. They follow imports, but miss the relationships that actually matter.

Documentation should solve this gap. In reality, documentation usually follows the same death cycle:

```
Humans write docs.
Code changes.
Docs become stale.
Trust disappears.
No one maintains them.
Documentation dies.
```

Stack Overflow's 2024 developer survey confirms it: documentation is still one of the most disliked tasks among developers. Any system that depends on constant human writing eventually collapses.

So my question was simple: has anyone already solved this? What approaches exist? What worked and what clearly failed?

## What I Researched

Over the last few days, I explored different standards, tools, and ideas. This is a summary of what I found — informal notes, not a scientific study.

### Codebase Context Specification (CCS)

This is the closest idea to what I want. It proposes `.context.md` files distributed across the project. Good structure, readable markdown, and a clear intention.

But the project was archived. It had low adoption, relied too much on manual writing, and lacked tooling to provide instant value.

The main lesson: a good format is not enough. Without automated generation, it won't survive.

### C4 Model

C4 is an excellent model for humans to communicate architecture. Mature, well documented, widely taught.

Limitation for my case: manual creation and static diagrams. Great for human-to-human communication, not for machine understanding.

### LikeC4

LikeC4 extends C4 with architecture-as-code. You write a DSL, diagrams update automatically, version-controlled, CI-friendly.

But it still depends on humans writing and maintaining the DSL. That reintroduces the same maintenance burden.

### llms.txt

A lightweight markdown spec meant to help LLMs understand a website or project. Simple, structured, easy to maintain. Adoption was small at first, but when Mintlify integrated it, many documentation sites adopted it immediately.

Key insight: small, structured context files work better than large blobs of text.

### CLAUDE.md

Claude Code uses a persistent context file to guide the model. Their guidelines are extremely practical: keep it short, reference code instead of duplicating it, use file:line pointers, and rely on deterministic tools for formatting.

Their `/init` command that auto-generates a CLAUDE.md is similar to what I want VENORE to do.

### Cursor Rules

Cursor uses distributed rule files that give the editor context about the project. They recommend small files, organized by feature, not one giant rules file.

Again, the same pattern appears: distributed context, short files, structured metadata.

### RAG Best Practices (OpenAI and Google)

Both OpenAI and Google recommend similar approaches: semantic chunking, hybrid indexing, retrieval of specific context instead of loading everything, and enforcing that the model must base its output strictly on retrieved context.

## Patterns That Keep Appearing

Across all these approaches, the same ideas show up repeatedly:

- Short files work better than long ones.
- Pointing to the code is better than copying it.
- Automatic generation beats manual writing.
- Distributed context works better than global files.
- Markdown with structured metadata hits the sweet spot between human and machine readability.

The industry seems to be converging toward one idea: **small, distributed, automatically generated context files**.

## My Hypothesis for VENORE

After researching all of this, these are the core assumptions shaping VENORE:

**Context should be distributed.** Each important folder gets its own `.context.md` placed next to the code it describes.

**AI should generate, humans should validate.** CCS showed that relying on humans to write and maintain context is not sustainable. VENORE inverts that: AI analyzes and generates, humans refine.

**Layers should represent knowledge, not just status.** Instead of basic checkboxes, layers should contain actionable insights and metadata.

**RAG should enable selective retrieval.** Chunks, embeddings, snapshots — the idea is to retrieve only what matters, not dump the entire project into the model.

## What I'm Testing Right Now

These are open questions, not conclusions:

- Is YAML frontmatter the right format for metadata?
- What's the ideal length for a context file?
- How much autonomy should the AI have before requiring review?
- Which layers are essential and which should be customizable?
- Are code-hash-based invalidations enough to detect when context becomes outdated?

## Questions That Are Still Unresolved

- How do we measure whether VENORE actually makes a project easier to understand?
- Should VENORE export to C4 or LikeC4 formats?
- How will this system scale to very large codebases?
- What are the security implications of exposing architectural intent?
- What makes a context system adoptable instead of abandoned like CCS?

## Current State

VENORE is only a few days old. It's small, experimental, and absolutely not ready to claim anything big.

**What exists today:**
- Basic `.context.md` generation
- A layer structure with metadata
- A simple RAG system with chunks and embeddings
- Basic dependency detection

**What doesn't exist yet:**
- Real-time updates
- Custom layer definitions
- Multi-project support
- Testing on large production-scale repositories

## Why I'm Sharing This So Early

Because developers understand this problem better than I do.

Because I'd rather adjust early than spend months building the wrong thing.

Because if the goal is to help understand code, it makes sense for my own process to be transparent.

## Closing Thoughts

This small research sprint changed my priorities. I originally thought visualization was the core value. Now I think the foundation is simpler: reliable, distributed, auto-generated context that AI can actually use.

The industry is already moving in that direction. The missing piece is automated maintenance. That is where I want VENORE to focus.

If you have experience with documentation, context systems, or AI-assisted development, I'd love to hear your perspective. What did I miss? What should I rethink? What matters more than I realize?

These are notes from day three. Day thirty will probably look very different.

*Edinson*
