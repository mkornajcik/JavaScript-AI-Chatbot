# AI Chatbot  

Interactive terminal-based chatbot powered by OpenAI's GPT-3.5-turbo model. This chatbot assumes the persona of a time traveler from the year 3021.

## Features  
- **Conversational AI:** Engages in entertaining and dynamic conversations with the user.  
- **Persistent Chat Context:** Maintains the flow of the conversation by storing and utilizing chat history.  
- **Customizable Persona:** Designed with a time traveler persona, but easily adjustable for other roles.  

---

## How It Works

The chatbot initializes with a predefined context and uses OpenAI's GPT API to handle user input.  
1. **Initialization:** Sets up OpenAI API, retrieves API keys from `.env`, and starts the chatbot.  
2. **Context Management:** Maintains chat history to create coherent and context-aware responses.  
3. **Conversation Loop:** Continuously prompts the user for input and responds until the session is ended.

---

## Prerequisites  

Before running this project, ensure you have the following:  
1. Node.js installed on your system.  
2. An OpenAI API key.  
3. Access to a terminal/command-line interface.  
