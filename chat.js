document.addEventListener('Chat', () => {
    const chatContainer = document.createElement('div');
    chatContainer.style.width = '100%';
    chatContainer.style.maxWidth = '600px';
    chatContainer.style.margin = '0 auto';
    chatContainer.style.padding = '20px';
    chatContainer.style.boxSizing = 'border-box';
    document.body.appendChild(chatContainer);
  
    const messageList = document.createElement('ul');
    messageList.style.listStyleType = 'none';
    messageList.style.padding = '0';
    messageList.style.margin = '0';
    messageList.style.overflowY = 'scroll';
    messageList.style.maxHeight = '300px';
    chatContainer.appendChild(messageList);
  
    const messageInput = document.createElement('input');
    messageInput.type = 'text';
    messageInput.style.width = 'calc(100% - 20px)';
    messageInput.style.padding = '10px';
    messageInput.style.boxSizing = 'border-box';
    messageInput.style.border = '1px solid #ccc';
    messageInput.style.borderRadius = '5px';
    messageInput.style.marginTop = '10px';
    chatContainer.appendChild(messageInput);
  
    messageInput.addEventListener('keypress', async (event) => {
      if (event.key === 'Enter') {
        await sendMessage();
      }
    });
  
    async function sendMessage() {
      let mensaje = mensajeInput.value.trim();
      if (mensaje === '') return;
      mensaje = mensaje.slice(0, 140);
      addMessage(mensaje);
      mensajeInput.value = '';
    }
  
    function addMessage(mensaje) {
      const listItem = document.createElement('li');
      listItem.textContent = mensaje;
      mesajegeList.appendChild(listItem);
  
      mensajeList.scrollTop = mesajeList.scrollHeight;
     };
  
    document.addEventListener('keypress', (event) => {
      if (event.key === 't') {
        toggleDarkMode();
      }
    });
  
    function toggleDarkMode() {
      const currentMode = localStorage.getItem('darkMode');
      const newMode = currentMode !== 'true';
      localStorage.setItem('darkMode', newMode);
  
      if (newMode) {
        document.body.style.backgroundColor = '#333';
        document.body.style.color = '#fff';
      } else {
        document.body.style.backgroundColor = '#fff';
        document.body.style.color = '#333';
      }
    }
});
  