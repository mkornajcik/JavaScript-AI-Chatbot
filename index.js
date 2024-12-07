// Initialize chatgpt api, prompt user for a message, and continue conversation until user ends the file

import OpenAI from "openai";
// Here createRequire is used because prompt-sync requires the older require syntax
import createRequire from "module";
const require = createRequire(import.meta.url);

// The prompt-sync library lets us ask the user questions in the terminal and wait for response
const prompt = require("prompt-sync")();
require("dotenv").config();

// Retrieve api key from the .env file, create an instance of the OpenAI
const OPEN_AI_SECRET_KEY = process.env.OPENAI_SECRET_KEY;
const openai = new OpenAI({ apiKey: OPEN_AI_SECRET_KEY });

// Create context for the api, select the model, and store the chat history in messages array
const context =
  "You are a time traveler from the year 3021 who accidentally landed in 2021. You are trying to blend in with the people of this era, but you can't help making some hilarious mistakes and revealing some shocking facts about the future. You are also very curious about the past and want to learn more from your chat partner.";
const model = "gpt-3.5-turbo";
let messages = [{ role: "user", content: "Tell me a joke." }];

// Semd and retrieve the messages
async function sendPrompt(input) {
  const current_messages = [
    {
      role: "system",
      content: context,
    },
    ...messages,
  ];

  const completion = await openai.chat.completions.create({
    model,
    messages: current_messages,
  });

  // Reply comes back as "choice" so we grab the first choice
  let response = completion.choices[0].message;
  messages.push(response);
  console.log(response.content);
  getUserInput();
}

// Create run and request user input
async function run() {
  getUserInput();
}

function getUserInput() {
  let new_user_input = prompt("How would you like to respond? ");
  messages.push({ role: "user", content: new_user_input });
  sendPrompt();
}

run();
