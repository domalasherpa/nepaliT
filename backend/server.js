import { createServer } from 'node:http';
import fs from 'node:fs';

const hostname = '127.0.0.1';
const port = 3000;
const batchSize = 30; // Number of words to pre-generate

// Read the JSON file synchronously for simplicity
const wordsData = JSON.parse(fs.readFileSync('nepaliWords.json', 'utf8'));
const words = wordsData.words;

// Function to generate a batch of random words
function generateRandomWords(batchSize) {
  const randomWords = [];
  for (let i = 0; i < batchSize; i++) {
    const randomIndex = Math.floor(Math.random() * words.length);
    randomWords.push(words[randomIndex]);
  }
  return randomWords;
}

const server = createServer((req, res) => {
  // Check if the request is for the API endpoint

  if (req.url === '/api/random-words') {
    // Set response headers
    let cachedWords = generateRandomWords(batchSize);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ word: cachedWords }));
  } 
  else if(req.url === "/"){
    const file = fs.readFileSync('./ref/test.html', 'utf8');
    res.end(file); 
  }else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
