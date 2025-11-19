# Setup Guide

## Quick Start

You now have a fully functional GitHub-native D&D text adventure! Here's what to do next:

### 1. Commit and Push to GitHub

```bash
git add .
git commit -m "Initial implementation of GitHub D&D text adventure"
git push origin main
```

### 2. Enable GitHub Actions

1. Go to your repository on GitHub
2. Click **Settings** → **Actions** → **General**
3. Under "Actions permissions", select **Allow all actions and reusable workflows**
4. Click **Save**

### 3. Configure Workflow Permissions

1. Still in **Settings** → **Actions** → **General**
2. Scroll down to "Workflow permissions"
3. Select **Read and write permissions**
4. Check ✅ **Allow GitHub Actions to create and approve pull requests**
5. Click **Save**

### 4. Start Your First Game Session

1. Go to the **Actions** tab
2. Click **Start New D&D Session** in the left sidebar
3. Click **Run workflow** (green button on the right)
4. Enter a session name (e.g., "Test Game")
5. Click **Run workflow**

Wait about 30 seconds, then:

6. Go to the **Issues** tab
7. You should see a new issue with your session name
8. Click on it to start playing!

### 5. Play the Game

In the issue, try these commands:

```
/look
```

```
/move north
```

```
/move east
```

The game bot will respond to each command with a map showing your position!

### 6. Invite Friends

Share the issue link with friends. When they comment with commands, they'll automatically join your session and appear on the map as `*`.

## Troubleshooting

### Actions aren't running?
- Make sure you enabled "Read and write permissions" in Settings → Actions → General
- Check that Actions are allowed in your repository settings

### Bot isn't responding?
- Check the Actions tab for any failed workflows
- Click on a failed workflow to see error logs
- Make sure you committed and pushed all files

### Can't see the map?
- The state file needs to exist first. Make sure the "Start New D&D Session" workflow completed successfully
- Check the `state/` folder for a `session-<number>.json` file

## Testing Locally (Optional)

You can test the game engine locally before pushing to GitHub:

```bash
# Create a test state file
mkdir -p state
echo '{"sessionId":1,"turn":1,"map":["#####","#...#","#...#","#...#","#####"],"players":{}}' > state/session-1.json

# Test the look command
SESSION_ID=1 COMMENTER=testuser COMMAND="/look" node src/turn-handler.js

# Test a move command
SESSION_ID=1 COMMENTER=testuser COMMAND="/move north" node src/turn-handler.js
```

## What's Next?

Now that your game is running, you can:

1. **Customize the map** - Edit the map in `.github/workflows/start-session.yml`
2. **Add features** - Extend `src/engine.js` with new commands
3. **Create multiple sessions** - Run the workflow multiple times for different groups
4. **Share with the community** - Show off your GitHub-native game!

---

**Have fun adventuring! 🗡️🛡️🎲**
