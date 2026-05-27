---
title: Basics
subtitle: Get started by understanding the editor and basic elements.
index: 120
---

Choicelab always starts with the _launcher_, which lets you create a new project or open an existing one.

[image: launcher]

Like a lot of creative software, working in Choicelab involves creating and editing a _project_. When you create a new project, Choicelab makes a folder for you that has the project file (`.clx`) and an Assets folder.

The project file contains all of your content, logic, and references to assets like video or audio files. As you add this media to your project, Choicelab automatically adds these files to the Assets folder and keeps it organized.

## Flowchart

Choicelab's editor is built around an interactive **flowchart** that details what happens in your project. It's not a mockup, but a real representation of how your project builds and where a player can go.

[image: flowchart]

Think of the flowchart as a tree. We start from the top of the tree, traversing downward _one node at a time_. When we reach a branch, Choicelab determines which stem to follow, based on the logic you create (more on that later). When there are no more nodes or branches to traverse, the project ends.

There are two kinds of nodes you can add to a Choicelab flowchart:

- **Cells** do things on screen, and play media. You use a cell when you want to, say, play a video, show a line of text, or provide the player with some button choices.
- **Branches** change where the player goes in your project. You use a branch when you want to create paths the player may traverse based on their choices.

[side by side image: cell, branch]

These are the basic building blocks of a Choicelab project. While a small set, they can create surprisingly rich and engaging multimedia narratives.

## Inspector

The inspector (the right-hand sidebar in the editor) is how you add content and logic to a flowchart. It's made up of two panes:

- **Node Editor**: Where you edit cells and branches
- **Variables**: Where you create and manage variables

If you don't know what a variable is—or maybe kind of understand it, but find the concept a little intimidating—don't worry. We'll come back to it in the next chapter, so just bookmark the word for now.

## Cells and branches

A **cell** (always a solid rounded rectangle in the flowchart) does things by performing one or more _actions_ that you add to it. There are actions for showing onscreen text and input choices, as well as playing (and stopping) media.

[image: actions view]

A cell will play all actions inserted into it, and move on to the next node when all actions have played. We'll talk more about how these work in just a bit.

---

A **branch** (always a solid diamond in the flowchart) routes where the player goes in your project. Each branch is made of one or more _stems_ that connect to other nodes.

[image: branch with stems]

When evaluating which branch stem to follow, Choicelab reads branches from left to right: if the leftmost stem's rules don't match, it will go to the next one to the right, and so on. The very last stem is a "no match" stem, a permanent part of the branch that always validates, and serves as a fallback if no other stems match.

---

These are the two kinds of nodes in Choicelab. Let's take a look at both in more detail, starting with **cells**.
