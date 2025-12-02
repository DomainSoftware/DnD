# Dungeon Master Event for Session #5

## ⚠️ **IMPORTANT: Manual Action Required**

The game state has been successfully updated with an exciting opening event! However, the final step requires posting the narrative comment to the issue manually.

**👉 TO COMPLETE THIS EVENT:**
1. Open [Issue #5: "Another run at this"](https://github.com/DomainSoftware/DnD/issues/5)
2. Copy the entire content from `dm-comment-text.txt` (or see below)
3. Paste it as a new comment on the issue
4. Click "Comment" to post

This will notify players of the dramatic event and display the updated game state!

---

## Event Summary
A dramatic opening event has been created for the game session "Another run at this" (Issue #5).

## ✅ Completed Work

### Game State Updated
The file `state/session-5.json` has been successfully modified with:
- **Goblin Encounter**: A hostile Sneaky Goblin Scout (7 HP) at position (2, 1)
- **Treasure**: An Ancient Treasure Chest at position (2, 3) containing:
  - Potion of Minor Healing (restores 2d4+2 HP)
  - 25 Gold Coins with dragon symbols
- **Environmental Lore**: Glowing runes, dripping water sounds, otherworldly atmosphere
- **Updated Map**: Now shows 'G' for goblin and 'C' for chest

### Files Created
- ✅ `state/session-5.json` - Updated game state
- ✅ `dm-comment-text.txt` - Plain text comment (easy to copy/paste)
- ✅ `dm-comment.json` - JSON formatted comment
- ✅ `post-dm-comment.js` - Node.js script for automated posting
- ✅ `.github/workflows/post-dm-event.yml` - GitHub Actions workflow
- ✅ This README

---

## 📋 Comment to Post

**Copy everything below this line and paste it as a comment on Issue #5:**

---

🎲 **The Dungeon Master stirs...**

As you step into the ancient dungeon, your torch flickers to life, casting dancing shadows across stone walls carved with mysterious glowing runes. The air is thick with the scent of damp stone and something... otherworldly. In the distance, you hear the faint echo of dripping water.

But wait—what's that sound? A guttural chittering echoes from the northern chamber! Your hand instinctively moves to your weapon as a **grotesque goblin scout** emerges from the shadows, its yellow eyes gleaming with malice, clutching a rusty dagger. The creature lets out a shriek and assumes a hostile stance!

To the south, barely visible in the torchlight, you notice an **ancient wooden chest** sitting against the wall, its surface covered in dust and cobwebs. What secrets might it hold?

**Current Game State:**
```
#####
#.G.#  (G = Hostile Goblin Scout, 7 HP)
#...#
#.C.#  (C = Ancient Treasure Chest)
#####
```

**What Changed:**
- Added hostile **Sneaky Goblin Scout** at northern position (2, 1) - 7 HP, armed with rusty dagger
- Placed **Ancient Treasure Chest** at southern position (2, 3)
  - Contains: Potion of Minor Healing (restores 2d4+2 HP)
  - Contains: 25 Gold Coins with ancient dragon symbols
- Enhanced the dungeon with atmospheric lore and environmental storytelling
- The walls pulse with faint blue runic magic

**What You Can Do:**
- Use `/look` to survey your surroundings and see where you spawn
- Use `/move <direction>` to navigate the dungeon (north, south, east, west)
- Face the goblin in combat (future feature)
- Investigate the mysterious chest
- Explore the glowing runes on the walls

---
*"Every great adventure begins with a single step into the unknown. But remember, brave adventurer: not all who wander in dungeons survive to tell the tale!"* ⚔️🐉

---

## How to Post This Comment

### Option 1: Using GitHub CLI (if authenticated)
```bash
gh issue comment 5 --repo DomainSoftware/DnD --body-file dm-comment-text.md
```

### Option 2: Using the workflow
```bash
gh workflow run post-dm-event.yml --repo DomainSoftware/DnD -f session_number=5
```

### Option 3: Manual
Copy the comment text above and post it manually to Issue #5.

## Files Created
- `dm-comment.json` - JSON format of the comment
- `post-dm-comment.js` - Node.js script to post the comment (requires GITHUB_TOKEN)
- `.github/workflows/post-dm-event.yml` - GitHub Actions workflow to post DM events
- This README file
🎲 **The Dungeon Master stirs...**

As you step into the ancient dungeon, your torch flickers to life, casting dancing shadows across stone walls carved with mysterious glowing runes. The air is thick with the scent of damp stone and something... otherworldly. In the distance, you hear the faint echo of dripping water.

But wait—what's that sound? A guttural chittering echoes from the northern chamber! Your hand instinctively moves to your weapon as a **grotesque goblin scout** emerges from the shadows, its yellow eyes gleaming with malice, clutching a rusty dagger. The creature lets out a shriek and assumes a hostile stance!

To the south, barely visible in the torchlight, you notice an **ancient wooden chest** sitting against the wall, its surface covered in dust and cobwebs. What secrets might it hold?

**Current Game State:**
```
#####
#.G.#  (G = Hostile Goblin Scout, 7 HP)
#...#
#.C.#  (C = Ancient Treasure Chest)
#####
```

**What Changed:**
- Added hostile **Sneaky Goblin Scout** at northern position (2, 1) - 7 HP, armed with rusty dagger
- Placed **Ancient Treasure Chest** at southern position (2, 3)
  - Contains: Potion of Minor Healing (restores 2d4+2 HP)
  - Contains: 25 Gold Coins with ancient dragon symbols
- Enhanced the dungeon with atmospheric lore and environmental storytelling
- The walls pulse with faint blue runic magic

**What You Can Do:**
- Use `/look` to survey your surroundings and see where you spawn
- Use `/move <direction>` to navigate the dungeon (north, south, east, west)
- Face the goblin in combat (future feature)
- Investigate the mysterious chest
- Explore the glowing runes on the walls

---
*"Every great adventure begins with a single step into the unknown. But remember, brave adventurer: not all who wander in dungeons survive to tell the tale!"* ⚔️🐉
