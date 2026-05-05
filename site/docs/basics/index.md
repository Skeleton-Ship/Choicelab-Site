---
title: Basics
subtitle: Learn how Choicelab works, including the basic functions of the editor.
index: 120
---

Choicelab always starts with the _launcher_, which gives you the simple choice of creating a new project, or opening an existing one.

[image: launcher]

Like a lot of creative software, working in Choicelab involves creating and editing a _project_. When you create a new project, Choicelab makes a folder for you that has the project file (`.clx`) and an Assets folder.

The project file contains all of your story's content, logic, and references to assets like video or audio files. As you add this media to your project, Choicelab automatically adds these files to the Assets folder and keeps it organized.

## Flowchart

Choicelab's editor is built around an interactive **flowchart** that details what happens in your project. It's not a mockup, but a real representation of how your project builds and where a player can go.

[image: flowchart]

Think of the flowchart as a tree. We start from the top of the tree, traversing downward _one node at a time_. When we reach a branch, Choicelab determines which stem to follow, from left to right, based on the _branching logic_ you create. When there are no more nodes or branches to traverse, the project ends.

There are two kinds of nodes you can add to a Choicelab flowchart:

- **Cells** do things on screen, and play media. You use a cell when you want to, say, show a line of text, provide the player with some button choices, or play a video (among other things).
- **Branches** change where the player goes in your project. You use a branch when you want to create paths the player may traverse based on their choices.

[side by side image: cell, branch]

These are the basic building blocks of a Choicelab project. While that's a small set, they can create surprisingly versatile and engaging multimedia stories.

## Inspector

The inspector (the right-hand sidebar in the editor) is how you add content and logic to a flowchart. It's made up of two panes:

- **Node Editor**: Where you edit cells and branches
- **Variables**: Where you create and manage variables

If you don't know what a variable is—or maybe kind of understand it, but find the concept a little intimidating—don't worry. We'll come back to it in the next chapter, so just bookmark the word for now.

## Cells and branches

A **cell** (always a solid rounded rectangle in the flowchart) does things by performing one or more _actions_ that you add to it. There are actions for showing onscreen text and input choices, as well as playing (and stopping) media.

<aside>
<p>Read more about [available actions](/docs/basics/actions.html) and how to use them.</p>
</aside>

A cell will play all actions inserted into it, and move on to the next node when all actions have _ended_. Some actions, like text, "end" as soon as they show up on screen. Others, like audio and video, are _timed_, and will end when they have finished playing through. Inputs — _interactive_ actions — will only end when the player has interacted with them in some way.

[image: actions view]

Note that an action "ending" doesn't necessarily mean it's removed from screen. Choicelab gives you control over when the screen clears. "Ending" just means it sends a signal to the cell that it's completed everything it needs to do.

As an author, you generally want to write cells that have _at least one timed or interactive action_, something that doesn't end immediately. This is important: if there are no timed or interactive actions in a cell, it'll end as soon as it starts.

---

A **branch** (always a solid diamond in the flowchart) routes where the player goes in your project. Each branch is made of one or more _stems_ that connect to other nodes.

[image: branch with stems]

When evaluating which branch stem to follow, Choicelab reads branches from left to right: if the leftmost stem's rules don't match, it will go to the next one to the right, and so on. The very last stem is a "no match" stem, a permanent part of the branch that always validates, and serves as a fallback if no other stems match.

---

By this point, you may be wondering: what exactly makes branch stems function? How do you write the paths in a story so Choicelab will follow them? That's where _conditional logic_ comes into the picture.
