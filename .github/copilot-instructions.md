# GitHub Copilot Instructions for D&D Text Adventure

This repository contains a GitHub-native D&D text adventure game that runs entirely through GitHub Issues and GitHub Actions.

## Starting a New Game Session

There are two ways to start a new D&D session:

### Method 1: Create an Issue with Label (Recommended)

When a user asks to "start a new D&D session" or "create a new game session":

1. Create a new GitHub issue with:
   - Title: The session name provided by the user
   - Label: `dnd-new-session`
   - Body: Can be empty or contain session details

2. The `start-session.yml` workflow will automatically trigger and:
   - Initialize the game state file
   - Change the label from `dnd-new-session` to `dnd-session`
   - Post a welcome comment with game instructions

### Method 2: Trigger Workflow Directly

Alternatively, trigger the `start-session.yml` workflow via workflow_dispatch:
- Repository: DomainSoftware/DnD
- Workflow: start-session.yml
- Ref: main
- Inputs: { "session_name": "<the name the user provided>" }

This method will create the issue and initialize it in one step.

### Example User Requests:
- "Start a new D&D session called 'Friday Night Adventure'"
- "Create a game session named 'Test Game'"
- "Begin a new D&D campaign called 'Dragon Quest'"

### How to Respond:

**Preferred approach (Method 1):**
```
Create a GitHub issue with:
- Title: "<session name from user>"
- Label: "dnd-new-session"
- Body: "New D&D text adventure session"
```

The workflow will automatically initialize it.

## Listing Active Sessions

When a user asks to "list game sessions" or "show active D&D sessions":

1. Search for issues with the label `dnd-session`
2. Use `mcp_github_list_issues` or `mcp_github_search_issues` with label filter

### Example User Requests:
- "Show me all active D&D sessions"
- "List current games"
- "What sessions are running?"

## Checking Session Status

When a user asks about a specific session:

1. Find the issue by searching for the session name in issues with label `dnd-session`
2. Read the latest comments to see the current game state
3. Check if there's a corresponding state file in `state/session-<issue-number>.json`

## Key Repository Structure:

- **Workflows**: `.github/workflows/start-session.yml` - Creates new sessions
- **Workflows**: `.github/workflows/turn-engine.yml` - Processes player commands
- **Game Engine**: `src/engine.js` - Core game logic
- **State Files**: `state/session-<number>.json` - Game state for each session
- **Session Issues**: GitHub Issues with label `dnd-session`

## How the Game Works:

1. Each game session is a GitHub Issue labeled `dnd-session`
2. Players issue commands by commenting on the issue (e.g., `/look`, `/move north`)
3. GitHub Actions workflow processes commands and updates state
4. State is stored in JSON files in the `state/` directory
5. The bot responds with narrative + ASCII map showing player positions

## Important Notes:

- Session ID = Issue Number
- Players are auto-added when they post their first command
- Current player shown as `@`, other players as `*` on the map
- Only two commands: `/look` and `/move <direction>` where direction is north/south/east/west
