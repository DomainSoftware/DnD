#!/usr/bin/env node
/**
 * Post Dungeon Master comment to GitHub issue
 * This script posts the DM narrative event to the game session issue
 */

const fs = require('fs');
const https = require('https');

async function postComment() {
  // Read the comment data
  const commentData = JSON.parse(fs.readFileSync('dm-comment.json', 'utf8'));
  
  // GitHub API configuration
  const token = process.env.GITHUB_TOKEN;
  if (!token) {
    console.error('Error: GITHUB_TOKEN environment variable not set');
    process.exit(1);
  }

  const [owner, repo] = commentData.repository.split('/');
  const issueNumber = commentData.issue_number;
  
  const data = JSON.stringify({
    body: commentData.comment_body
  });

  const options = {
    hostname: 'api.github.com',
    path: `/repos/${owner}/${repo}/issues/${issueNumber}/comments`,
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/vnd.github+json',
      'Content-Type': 'application/json',
      'Content-Length': data.length,
      'User-Agent': 'DnD-Dungeon-Master-Bot',
      'X-GitHub-Api-Version': '2022-11-28'
    }
  };

  return new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      let responseData = '';

      res.on('data', (chunk) => {
        responseData += chunk;
      });

      res.on('end', () => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          console.log('✅ DM comment posted successfully!');
          try {
            const parsed = JSON.parse(responseData);
            if (parsed.html_url) {
              console.log(`Comment URL: ${parsed.html_url}`);
            }
          } catch (e) {
            // Response might not be JSON or might not have html_url
            console.log('Response:', responseData);
          }
          resolve(responseData);
        } else {
          console.error(`❌ Failed to post comment. Status: ${res.statusCode}`);
          console.error('Response:', responseData);
          reject(new Error(`HTTP ${res.statusCode}`));
        }
      });
    });

    req.on('error', (error) => {
      console.error('❌ Error posting comment:', error.message);
      reject(error);
    });

    req.write(data);
    req.end();
  });
}

// Run the script
postComment().catch(err => {
  console.error('Failed to post DM comment:', err);
  process.exit(1);
});
