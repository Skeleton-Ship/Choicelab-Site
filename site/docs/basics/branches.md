---
title: Branches & conditional logic
subtitle: Learn how to string together variables, branch stems, and rules to make your project interactive.
index: 150
---

If you've ever read an interactive fiction book, you might be familiar with how it works. At the end of the page, you're faced with a choice like:

```
"Now where do we go?", Evan asked.
"Pfft, you tell me," Naomi replied.

WHERE DO EVAN AND NAOMI GO?
Straight, into the clearing: turn to page 86
Left, toward the river: turn to page 110
```

Many wonderful stories have been told with simple pathing like this. But there's an important limitation to this approach: once you turn to a specific page, the book isn't—cannot be—aware of _where you jumped from_. It has no memory of the reader's choice.

That sounds trivial, but think about it: what if you could remember a choice at the beginning of the narrative, and use it to inform the ending? What if you could determine the direction of a plot arc not off of a single decision, but many of them at once?

**Variables** allow us to do that. A variable is nothing more than a little piece of memory that your project holds on to. You might have a variable that stores whether Evan and Naomi chose `straightOrLeft`, if they started their adventure `inTheMorning`, or whether they decided to ford the river or swim when they made their decision on that `riverCrossing`.

All of the pathing in Choicelab is built off of variables, and writing opportunities for players to make choices that set variables to create _conditional logic_.

## Creating and managing variables

Use the **Variables** pane to create and manage variables.

[image: variables pane]

There are three kinds:

- String: A piece of text, typically a word or short sentence.
- Boolean: A "binary" value that must always be either `true` or `false`.
- Number: A fixed number.

This list may expand over time—there are many more from the world of coding that may enable more intricate, complex logic—but you'll be surprised by what's possible with these three types alone.

## Writing conditional logic in branches

As covered in the [previous chapter](/docs/basics), you can add a _branch_ to your project flowchart to create paths, which are attached to one or more branch _stems_.

[image: branch stems]

Each stem contains at least one _rule_. A rule looks at the value of a variable that's stored in the project playback's memory—set by the player's choices while going through your project—and compares it against _what you want the value to be_.

[image: rule]

<aside>
	<p>If you've ever used filters in your email app, or smart playlists in your music app, that's the same basic idea as rules.</p>
</aside>

A single rule can only evaluate one variable: _1 rule, 1 variable_. That said, a stem can specify more than one rule, and be set to validate if the player's variables match _all_ of the stem's rules, or just _any one_ of them.

This set of tools—branch stems that contain one or more rules, each of which checks a single variable—lets you create relatively complex conditional logic. But, you may be wondering: how do you make an input button _set_ a variable?

## Setting variables: bringing it all together

When a player presses an input button, you can set it up so that the button press sets a variable with a specific value.

[image: a single input button]

So, you could have multiple input buttons that set different values for the same variable...

[image: multiple input buttons in a grid]

...and then create a branch with stems that check all of those different values to create paths:

[image: branch with matching values]

## Autofill variables and branch stems

By this point, you might be saying to yourself: "Gee, that's a lot of fields I have to fill out." And Choicelab has a way of speeding things up for you: **Autofill**.

If you've added input buttons to a cell but no variables set, and that cell is connected to a branch, Choicelab will offer to automatically create the variable names, values, and branch stems for you:

[image: autofill menu item, autofill in cell settings]

[image: before and after of cell + branch]

<aside>
	<p>Variable names and values are based on what you've written for the button labels. But if Choicelab gets it wrong, don't fret: you can update the names of the variables in the Variables pane, and your branches will update automatically.</p>
</aside>
