document.addEventListener('DOMContentLoaded', function () {

  async function obtenerMensajes() {
      try {
          const respuesta = await fetch("https://chat.arpanetos.lol/messages");
          const datos = await respuesta.json();
          
          return datos.map(info => ({
              id: info.id,
              user: info.username,
              mensaje: info.message,
              hora: info.created_at,
          }));
      } catch (error) {
          console.error("Error al obtener mensajes:", error);
          throw error;
      }
  }

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
  messageInput.placeholder = 'Escribe tu mensaje aquí...';
  chatContainer.appendChild(messageInput);

  const sendButton = document.createElement('button');
  sendButton.textContent = 'Enviar';
  chatContainer.appendChild(sendButton);
  

  messageInput.addEventListener('keypress', function (event) {
      if (event.key === 'Enter') {
          sendMessage(messageInput.value);
          inputMensaje.value = '';
      }
  });

  sendButton.addEventListener('click',  function () {
      sendMessage(messageInput.value);
      inputMensaje.value = '';
  });

  function verMensaje (mensaje){
      const info = document.createElement("div");
      info.style.backgroundColor = "purple";
      info.style.borderRadius = "10%";
  
      const p = document.createElement("p");
      p.style.color = "white";
      p.innerHTML = mensaje;
      info.appendChild(p);
  
  
      document.body.appendChild(info);
  }

  

  async function sendMessage(inputMensaje) {
          let hora = new Date();
          let h = hora.toLocaleTimeString();
  
          if (inputMensaje.length > 140) {
              throw new Error("El mensaje es muy grande.");
          }
  
          let json = {
              username: "mir22293",
              message: inputMensaje,
              created_at: h
          };
  
          const response = await fetch('https://chat.arpanetos.lol/messages', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify(json)
          });
  
          if (response.ok) {
              console.log('Mensaje enviado con éxito');
          } else {
              throw new Error('Error al enviar el mensaje');
          }
  
          
  }

  obtenerMensajes().then(mensajes => {
      mensajes.forEach(mensaje => {
          
          verMensaje(mensaje.mensaje);
        });
  });
  
  const btn = document.createElement("button");
  btn.textContent = "Dark mode";
  document.body.appendChild(btn);

  let drk = false;

  btn.addEventListener("click", () => {
      if (!drk) {
          document.body.style.backgroundColor = "black";
          drk = true;
      } else {
          document.body.style.backgroundColor = "white";
          drk = false;
      }
  });
  
});