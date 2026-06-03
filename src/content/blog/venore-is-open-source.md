---
title: "VENORE Is Open Source"
description: "Opening the code was always the plan. This is what I'm building, where it's going, and how you can build it with me."
date: 2026-06-03
category: "Open Source"
image: "/images/venore-is-open-source.webp"
---

When I posted VENORE on Reddit, I already said it in the comments: if it ever became something stable, I would open it so others could build on top.

It wasn't a line to look good. It was the plan from the start.

Today the code is public.

## The vision

Every project has a map that only exists in the head of whoever built it. The connections, the decisions, the why behind each thing. That map is never written down anywhere, and it fades over time.

VENORE pulls that map out. It makes it visible, alive, something you can walk through.

And it does one more thing: it gives that same map to the AI. I don't want an AI that writes code blindly. I want one that understands the system as well as I do, or better, because it shares the same context I see.

That's the whole idea. A shared reality between you and the AI, over the same project. Not an assistant that guesses, but one that understands.

## What it is today

VENORE is a desktop app. Rust on the inside, and an interface built on top.

It has two modes. In Codebase mode you open a project and the agent works on it with real tools: it reads and edits files, runs the terminal, searches the code, browses the web. In Knowledge mode you organize ideas, research and decisions as islands on a canvas, each one with its nodes and its connections.

You don't write the context by hand. The AI generates it by reading your code, and you validate it. Everything runs locally, and you use your own API keys. What you put in is yours.

## What already works

- An agentic chat that edits files, runs commands, searches and browses, looping until the task is done
- Multi-provider support: Anthropic, OpenAI, Gemini and Ollama running locally
- Code understanding across 12 languages, with AST analysis and semantic search
- Project Memory: the project's context, generated and validated
- Agents and teams for structured tasks, like reviewing a PR
- A permissions engine to control what the agent can do
- GitHub integration
- The Ocean Canvas, the visual map of the project
- Mesh, so agents from different projects can talk to each other

And on the way: research mode with parallel agents, slash commands, real-time collaboration, and live feature flows.

One thing to be clear about: this is in development. It has rough edges, and for now the only user is me. Don't come expecting a polished product. Come to see something that's growing.

## Build this with me

I can't do it alone, and I don't want to.

The vision is bigger than what one person can reach, and the best ideas always came from people actually using the tool. That's why I'm opening it.

There are three ways to join. Try it and tell me what breaks. Suggest ideas for what it should be. Or get your hands into the code.

If you want to contribute something concrete, language adapters are the clearest place to start. People were already asking for them in that Reddit thread, and they're exactly what VENORE needs to understand more projects.

## Closing

This is the version I always wanted: open, built calmly, and real.

If the vision resonates, the repo is waiting for you: [github.com/edinsonjohender/venore](https://github.com/edinsonjohender/venore).

*Edinson*
