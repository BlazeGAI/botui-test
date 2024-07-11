async function sendMessage() {
    const userInput = document.getElementById('user-input');
    const message = userInput.value;
    if (message.trim() === '') return;

    const chatBox = document.getElementById('chat-box');

    // User message
    const userMessageDiv = document.createElement('div');
    userMessageDiv.className = 'message user-message';
    userMessageDiv.textContent = message;
    chatBox.appendChild(userMessageDiv);

    // Scroll to the bottom of the chat box
    chatBox.scrollTop = chatBox.scrollHeight;

    // Clear the input field
    userInput.value = '';

    try {
        // Server API call
        const response = await axios.post('/api/chat', { message });

        const botMessage = response.data.message;

        // Bot response
        const botMessageDiv = document.createElement('div');
        botMessageDiv.className = 'message bot-message';
        botMessageDiv.textContent = botMessage;
        chatBox.appendChild(botMessageDiv);

        // Scroll to the bottom of the chat box
        chatBox.scrollTop = chatBox.scrollHeight;
    } catch (error) {
        console.error('Error:', error);
        const botMessageDiv = document.createElement('div');
        botMessageDiv.className = 'message bot-message';
        botMessageDiv.textContent = 'Sorry, there was an error processing your request.';
        chatBox.appendChild(botMessageDiv);

        // Scroll to the bottom of the chat box
        chatBox.scrollTop = chatBox.scrollHeight;
    }
}
