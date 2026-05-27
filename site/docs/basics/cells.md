---
title: Cells & actions
subtitle: How to use Timeline, Interact, and Event actions in cells to create immersive moments in your project.
index: 140
---

As your project plays, it will traverse through cells that contain one or more actions. There are three kinds of actions in Choicelab:

- **Timeline** actions take place over a period of time, adding duration to your project. A cell only plays a single timeline action at a time. The two available timeline actions are Play Video and Play Audio.
- **Interact** actions give the player something they have to interact with before the project will keep progressing.
- **Event** actions are points that occur _on_ the timeline. They don't add time themselves to a cell, but can be set up to fire at specific points in your media.

<aside>
<p>See the <a href="/docs/action-reference">action reference</a> for details on all of the available actions in Choicelab.</p>
</aside>

If you're working with audio and video extensively—as Choicelab is designed for—you'll likely build much of your experience around timeline actions, and **slotting video and audio** into them.

## Working with media

The **Play Audio** and **Play Video** actions let you insert your own media into your project. Play Audio accepts MP3 files, while Play Video accepts MP4 (H.264) files.

[image: play audio and play video actions]

<aside>
<p>Note that at this time, Choicelab doesn't have many media production capabilities of its own. See the [Setup](/docs/setup) guide for apps that can help you assemble video and audio.</p>
</aside>

Once you've added video and audio to your timeline, you can add Interact and Event actions and time them out to appear at specific points in the audio and video:

[image: timed actions]

Once your project plays that specific point in the media, it will show those actions on screen.

---

Now that you've been introduced to cells, you may be wondering: how do you string together cells into paths and create a truly interactive story? That's where _branches_ come into the picture.
