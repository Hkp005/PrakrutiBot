// const chatInput =  document.querySelector(".chat-input textarea");
// const sendChatBtn =  document.querySelector(".chat-input span");
// const chatbox =  document.querySelector(".chatbox");

// let userMessage;

// const createChatLi = (message, className) => {
//     // create a chat <li> element passed messsage and className
//     const chatLi = document.createElement("li");
//     chatLi.classList.add("chat" ,className);
//     let chatContent = className === "outgoing" ?  `<p>${message}</p>`: `<p><span class="material-symbols-outlined">smart_toy</span>${message}</p>`
//     chatLi.innerHTML = chatContent;
//     return chatLi;
// }

// const handleChat = () => {
//       userMessage = chatInput.value.trim();
//       if(!userMessage) return;
//      // append the user message to the chatbox 
//       chatbox.appendChild(createChatLi(userMessage, "outgoing"));
//     // Display thinking message while waiting for response
//       setTimeout(() => {
//         chatbox.appendChild(createChatLi("Thinking", "incoming"));
//       },600)
// }

// sendChatBtn.addEventListener("click", handleChat);







// const chatInput = document.querySelector(".chat-input textarea");
// const sendChatBtn = document.querySelector(".chat-input span");
// const chatbox = document.querySelector(".chatbox");

// let userMessage;

// // Define questions and options
// const questions = [
//     {
//         question: "Hi How can I help you?",
//         options: ["Know your prakruti"],
//       },
//   {
//     question: "What is your body frame like?",
//     options: ["Slim", "Medium", "Heavy"],
//   },
//   {
//     question: "What is your skin type?",
//     options: ["Dry" , "Oily" , "Combination"],
//   },
//   {
//     question: "How is your hair type?",
//     options: ["Straight", "Wavy", "Curly"],
//   },
//   {
//     question: "Do you feel cold or hot more often?",
//     options: [ "Cold" , "Hot"],
//   },
//   {
//     question: "How do you respond to changes in weather or climate?",
//     options: ["Easily affected", "Moderate effect", "Less affected"],
//   },
//   {
//     question: "How do you typically react to stress or challenges?",
//     options: ["Anxious or worried", "Confident and determined", "Calm and composed"],
//   },
//   // Add more questions and options as needed
// ];

// let currentQuestion = 0;

// // Create a chat message with options
// const createQuestionMessage = (question) => {
//   const questionMessage = createChatLi(question.question, "incoming");
//   question.options.forEach((option) => {
//     const optionButton = document.createElement("button");
//     optionButton.textContent = option;
//     optionButton.classList.add("option-button");
//     optionButton.addEventListener("click", () => handleUserChoice(option));
//     questionMessage.appendChild(optionButton);
//   });
//   chatbox.appendChild(questionMessage);
// };

// const createChatLi = (message, className) => {
//   const chatLi = document.createElement("li");
//   chatLi.classList.add("chat", className);
//   let chatContent =
//     className === "outgoing"
//       ? `<p>${message}</p>`
//       : `<p><span class="material-symbols-outlined">smart_toy</span>${message}</p>`;
//   chatLi.innerHTML = chatContent;
//   return chatLi;
// };

// const handleUserChoice = (choice) => {
//   chatbox.querySelectorAll(".option-button").forEach((button) => {
//     button.style.display = "none"; // Hide option buttons
//   });
//   const userChoiceMessage = createChatLi(`User selected: ${choice}`, "outgoing");
//   chatbox.appendChild(userChoiceMessage);
//   sendBotResponse(choice); // Send the user's choice to the bot
// };

// const sendBotResponse = (userChoice) => {
//   // Simulate a bot response based on user choice (replace with your logic)
//   setTimeout(() => {
//     const botResponse = `You selected ${userChoice}`;
//     chatbox.appendChild(createChatLi(botResponse, "incoming"));
//     if (currentQuestion < questions.length - 1) {
//       currentQuestion++; // Move to the next question
//       createQuestionMessage(questions[currentQuestion]);
//     } else {
//       // Chatbot reached the end of questions
//       chatInput.disabled = true; // Disable input after finishing questions
//     }
//   }, 1000); // Simulate a 1-second delay
// };

// const handleChat = () => {
//   userMessage = chatInput.value.trim();
//   if (!userMessage) return;

//   chatbox.appendChild(createChatLi(userMessage, "outgoing"));

//   setTimeout(() => {
//     chatbox.appendChild(createChatLi("Thinking", "incoming"));
//     sendBotResponse(userMessage); // Send the user's message to the bot
//   }, 600);

//   chatInput.value = ""; // Clear the input field
// };

// sendChatBtn.addEventListener("click", handleChat);

// // Listen for the Enter key (key code 13)
// chatInput.addEventListener("keydown", (e) => {
//   if (e.key === "Enter") {
//     e.preventDefault(); // Prevent the default behavior of Enter (new line)
//     handleChat(); // Trigger the chat handling function
//   }
// });

// // Start the chat by displaying the first question
// createQuestionMessage(questions[currentQuestion]);
const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");
const chatbox = document.querySelector(".chatbox");

let userMessage;

// Define questions and options
const questions = [
  {
    question: "Hi How can I help you?",
    options: ["Know your prakruti"],
  },
  {
    question: "What is your body frame like?",
    options: ["Slim", "Medium", "Heavy"],
  },
  {
    question: "What is your skin type?",
    options: ["Dry", "Oily", "Combination"],
  },
  {
    question: "How is your hair type?",
    options: ["Straight", "Wavy", "Curly"],
  },
  {
    question: "Do you feel cold or hot more often?",
    options: ["Cold", "Hot"],
  },
  {
    question: "How do you respond to changes in weather or climate?",
    options: ["Easily affected", "Moderate effect", "Less affected"],
  },
  {
    question: "How do you typically react to stress or challenges?",
    options: ["Anxious or worried", "Confident and determined", "Calm and composed"],
  },
  // Add more questions and options as needed
];

let currentQuestion = 0;

// Create a chat message with options
const createQuestionMessage = (question) => {
  const questionMessage = createChatLi(question.question, "incoming");
  chatbox.appendChild(questionMessage); // Append the question message

  const optionContainer = document.createElement("div"); // Create a container for options
  optionContainer.classList.add("options-container");
  question.options.forEach((option) => {
    const optionButton = document.createElement("button");
    optionButton.textContent = option;
    optionButton.classList.add("option"); // Use the correct class name here
    optionButton.addEventListener("click", () => handleUserChoice(option));
    optionContainer.appendChild(optionButton);
  });

  chatbox.appendChild(optionContainer); // Append the options container
  chatbox.scrollTop = chatbox.scrollHeight; // Scroll to the bottom
};

const createChatLi = (message, className) => {
  const chatLi = document.createElement("li");
  chatLi.classList.add("chat", className);
  let chatContent =
    className === "outgoing"
      ? `<p>${message}</p>`
      : `<p><span class="material-symbols-outlined">smart_toy</span>${message}</p>`;
  chatLi.innerHTML = chatContent;
  return chatLi;
};

const handleUserChoice = (choice) => {
  chatbox.querySelectorAll(".options-container").forEach((container) => {
    container.style.display = "none"; // Hide options containers
  });
  const userChoiceMessage = createChatLi(`User Selected:${choice}`, "outgoing");
  chatbox.appendChild(userChoiceMessage);
  sendBotResponse(choice); // Send the user's choice to the bot
};

const sendBotResponse = (userChoice) => {
  // Simulate a bot response based on user choice (replace with your logic)
  setTimeout(() => {
    const botResponse = `You selected ${userChoice}`;
    chatbox.appendChild(createChatLi(botResponse, "incoming"));
    if (currentQuestion < questions.length - 1) {
      currentQuestion++; // Move to the next question
      createQuestionMessage(questions[currentQuestion]);
    } else {
      // Chatbot reached the end of questions
      chatInput.disabled = true; // Disable input after finishing questions
    }
  }, 1000); // Simulate a 1-second delay
};

const handleChat = () => {
  userMessage = chatInput.value.trim();
  if (!userMessage) return;

  chatbox.appendChild(createChatLi(userMessage, "outgoing"));

  setTimeout(() => {
    chatbox.appendChild(createChatLi("Thinking", "incoming"));
    sendBotResponse(userMessage); // Send the user's message to the bot
  }, 600);

  chatInput.value = ""; // Clear the input field
};

sendChatBtn.addEventListener("click", handleChat);

// Listen for the Enter key (key code 13)
chatInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault(); // Prevent the default behavior of Enter (new line)
    handleChat(); // Trigger the chat handling function
  }
});

// Start the chat by displaying the first question
createQuestionMessage(questions[currentQuestion]);
