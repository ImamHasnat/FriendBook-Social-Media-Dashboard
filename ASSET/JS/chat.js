const chatBody = document.getElementById('chat-body');
const messageInput = document.getElementById('message-input');
const sendBtn = document.getElementById('send-btn');
const mediaBtn = document.getElementById('media-btn');
const mediaInput = document.getElementById('media-input');
const chatList = document.querySelectorAll('.chat');
const chatTitle = document.getElementById('chat-title');

// Default messages for each chat
const defaultMessages = {
  'webtech-group': "Welcome, Let's discuss Webtech topics.",
  'spider-man': "Hello Spider-Man! Ready to fly.",
  'alamin-sir': "Hello sir, Can I get a 5 mark bonus?",
  'groupmate': "Bhai project er kaaj ta koro kindly!!"
};

// Function to append a message (text or media)
function appendMessage(content, isMedia = false, mediaType = '') {
  const msg = document.createElement('div');
  msg.className = 'message sent';

  if (isMedia && mediaType === 'image') {
    msg.innerHTML = `<img src="${content}" style="max-width: 100%; border-radius: 5px;" />`;
  } else if (isMedia && mediaType === 'audio') {
    msg.innerHTML = `<audio controls><source src="${content}" type="audio/mpeg">Your browser does not support the audio tag.</audio>`;
  } else {
    msg.textContent = content;
  }

  chatBody.appendChild(msg);
  chatBody.scrollTop = chatBody.scrollHeight;
}

// Function to update the chat body with the default message
function updateChatBody(chatId) {
  // Clear current chat messages
  chatBody.innerHTML = ''; 

  // Add default message for the selected chat
  const defaultMessage = defaultMessages[chatId] || "No default message.";
  const messageElement = document.createElement('p');
  messageElement.className = 'default-text'; // Optional: Add custom style for default text
  messageElement.textContent = defaultMessage;
  chatBody.appendChild(messageElement);
}

// Event listener for clicking on a chat
chatList.forEach(chat => {
  chat.addEventListener('click', function () {
    // Remove active class from all chats
    chatList.forEach(c => c.classList.remove('active'));
    
    // Add active class to the clicked chat
    this.classList.add('active');

    // Get the chat identifier
    const chatId = this.getAttribute('data-chat');

    // Update the chat title and body with the default message
    chatTitle.textContent = this.textContent; // Set chat title
    updateChatBody(chatId); // Set default chat message in the body
  });
});

// Send button event listener (for sending text messages)
sendBtn.addEventListener('click', () => {
  const text = messageInput.value.trim();
  if (text) {
    appendMessage(text); // Append the text message to the chat
    messageInput.value = ''; // Clear the input field
  }
});

// Media button click to open file input
mediaBtn.addEventListener('click', () => {
  mediaInput.click(); // Trigger the file input when media button is clicked
});

// Event listener for file input change (for uploading media)
mediaInput.addEventListener('change', () => {
  const file = mediaInput.files[0];
  if (file) {
    const url = URL.createObjectURL(file); // Create a URL for the file

    if (file.type.startsWith('image/')) {
      appendMessage(url, true, 'image'); // Display the image
    } else if (file.type.startsWith('audio/')) {
      appendMessage(url, true, 'audio'); // Display the audio file
    }
  }
});
