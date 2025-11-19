const {
  loadState,
  saveState,
  ensurePlayer,
  processCommand
} = require('./engine.js');

/**
 * Main turn handler
 * Reads environment variables, processes the command, and outputs JSON
 */
async function main() {
  try {
    // Read environment variables set by the GitHub Action
    const sessionId = process.env.SESSION_ID;
    const issueNumber = process.env.ISSUE_NUMBER;
    const commenter = process.env.COMMENTER;
    const command = process.env.COMMAND;
    
    if (!sessionId || !commenter || !command) {
      throw new Error('Missing required environment variables: SESSION_ID, COMMENTER, COMMAND');
    }
    
    // Load the current state
    const state = await loadState(sessionId);
    
    // Ensure the player exists (auto-join if new)
    ensurePlayer(state, commenter);
    
    // Process the command
    const result = processCommand(state, commenter, command);
    
    // Save the updated state
    await saveState(sessionId, result.state);
    
    // Output JSON to stdout for the workflow to parse
    console.log(JSON.stringify({
      narrative: result.narrative,
      asciiMap: result.asciiMap
    }));
    
  } catch (error) {
    // Output error as JSON
    console.error(JSON.stringify({
      narrative: `Error: ${error.message}`,
      asciiMap: ''
    }));
    process.exit(1);
  }
}

// Run the main function
main();
