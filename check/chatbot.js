import db from './firebase-setup';

document.getElementById('send-btn').addEventListener('click', function() {
  const userInput = document.getElementById('user-input').value;
  const messages = document.getElementById('messages');

  const userMessage = document.createElement('div');
  userMessage.classList.add('message', 'user-message');
  userMessage.innerText = userInput;
  messages.appendChild(userMessage);

  document.getElementById('user-input').value = '';

  // Fetch response from Firestore
  db.collection('chatbot-responses').where('question', '==', userInput.toLowerCase())
    .get()
    .then((querySnapshot) => {
      let botResponse = 'I’m not sure how to respond to that, but I’m learning!';
      querySnapshot.forEach((doc) => {
        botResponse = doc.data().answer;
      });

      const botMessage = document.createElement('div');
      botMessage.classList.add('message', 'bot-message');
      botMessage.innerText = botResponse;
      messages.appendChild(botMessage);
    })
    .catch((error) => {
      console.error('Error fetching chatbot response:', error);
    });
});
