---
title: "Why I Rewrote VENORE From Scratch"
description: "Six months ago I posted a prototype to Reddit and it blew up. Then came the silence. This is what happened, and why I changed the entire stack."
date: 2026-06-02
category: "Vision"
image: "/images/why-i-rewrote-venore.webp"
---

Six months ago I posted VENORE on Reddit. I wasn't expecting anything.

It was a three-day prototype: an architecture visualizer that read a few context files and painted them as a map. I posted it more out of curiosity than anything else.

And it blew up. Hundreds of upvotes, tens of thousands of views, people asking to try it, to sign up, to join the beta.

And then... silence. I disappeared.

## I didn't leave it for dead

This is the part I want to clear up first, because it's easy to misread.

I didn't abandon VENORE. But it isn't my main project either. I have to work, I have other responsibilities, and a viral weekend prototype doesn't pay the bills.

What happened was slower and less dramatic: I kept using it. Little by little, in my own projects, to understand them better. Not to show it to anyone, but so it would actually be useful to me.

That quiet use is what ended up changing everything.

## The wall

While I used it, I ran into its limits.

The first attempt hit a ceiling. The structure didn't perform: it was built with Electron and the code analysis leaned on regex. The context was generated from the code itself. That was always the idea, not writing it by hand. But that regex-based generation fell short as soon as a project grew or strayed from the most common patterns. Exactly the limit several people pointed out in that Reddit thread, and they were right.

At the same time, I was learning Rust. And the frontend I had pulled off with vibe coding: I know some frontend, but not much.

Look at it from the outside: a base that didn't scale, a language I barely commanded, and an improvised interface.

It sounded like a dead end.

## The turn

But something funny happened when I looked at it calmly.

Since I know little frontend and had improvised it, I had nothing to protect. There was no precious code that would hurt to throw away. No sacred architecture. There was only a sketch.

And a sketch can be redrawn.

That's when I understood what mattered: **changing the stack wasn't a limitation, it was an opportunity.** Several people had suggested Tauri. I gave it a real chance, built the brain of the project in Rust, and suddenly the constraint became freedom.

I wasn't giving anything up. I was starting right.

## This time, slowly

The first time I was in a hurry. I posted a three-day prototype, it went viral, and for a moment I felt I had to run to catch up with that attention.

This time I decided the opposite.

I have a long list of good ideas written down. Many. But instead of building them all at once to impress, I chose to go feature by feature. To understand each one. To build only what I actually need in my work. And to use it myself, for real, before handing it to anyone.

Dogfooding, without the buzzword: putting it into my real projects and tuning it based on what hurt each day.

It's slower. But for the first time the project is growing on something solid, not on haste.

## I'm back

So here I am again.

VENORE isn't the prototype you saw on Reddit. It's something else, built from scratch, calmly, on a base that holds. And this time I'm doing it in the open, but that's a story for another time.

If you were here from the start, thank you for your patience. The silence wasn't abandonment. It was work.

*Edinson*
