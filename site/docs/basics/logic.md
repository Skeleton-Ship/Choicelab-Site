---
title: Writing conditional logic
subtitle: Learn how to string together variables, branch stems, and rules to make your project interactive.
index: 140
---

If you've ever read an interactive fiction book, you might be familiar with how it works: at the end of the page, you're faced with a choice, like:

```
"Where do we go?", Evan asked.
"Pfft, you tell me," Naomi scoffed.

WHERE DO EVAN AND NAOMI GO?
The woods: turn to page 86
The beach: turn to page 110
```

Many wonderful stories have been told with simple pathing like this. But there's an important limitation to this approach: once you turn to a specific page, the book isn't—cannot be—aware of where you jumped from. It has no memory of the reader's choice.

That sounds trivial, but think about it: what if you could remember a choice at the beginning of the story, and use it to inform the ending? What if you could determine the direction of a plot arc not off of a single decision, but many of them at once?

**Variables** allow us to do that. A variable is nothing more than a little piece of memory that your project holds on to. You might have a variable that stores whether Evan and Naomi chose `woodsOrBeach`, if they started their adventure `inTheMorning`, or whether they decided to ford the river or swim when they made their decision on that `riverCrossing`.

All of the pathing in Choicelab is built off of variables, and providing opportunities for players to make choices that set variables to create _conditional logic_.

## Kinds of variables

Choicelab supports three kinds of variables:

- String: A piece of text, typically a word or short sentence.
- Boolean: A "binary" value that must always be either `true` or `false`.
- Number: A fixed number.

This list may expand over time—there are many more from the world of coding that may enable more intricate, complex logic—but you'll be surprised by what's possible with these three types alone.

## Writing conditional logic in branches

As covered in the previous chapter, a branch is the node in the flowchart used for creating paths. When you write a branch, you typically add one or more _stems_ to it.

[image: branch stems]

Each stem contains at least one _rule_, which looks at a single variable in your project and compares it against the player's variables—which are set gradually as they make choices—to see if they _match_.

[image: rule]

A single rule can only evaluate one variable: _1 rule, 1 variable_. That said, a stem can specify more than one rule, and be set to validate if the player's variables match _all_ of the rules, or just _any one_ of them.

This set of tools—branch stems that contain one or more rules, each of which checks a single variable—lets you create relatively complex conditional logic.

But how do you tie what a player does to _set_ variables?

## Setting variables
