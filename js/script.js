const chatbotToggler = document.querySelector(".chatbot-toggler");
const closeBtn = document.querySelector(".close-btn");
const chatbox = document.querySelector(".chatbox");
const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");

let userMessage = null; // Variable para almacenar el mensaje del usuario

const createChatLi = (message, className) => {
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", `${className}`);
    let chatContent = className === "outgoing" ? `<p></p>` : `<span class="material-symbols-outlined">smart_toy</span><p></p>`;
    chatLi.innerHTML = chatContent;
    chatLi.querySelector("p").textContent = message;
    return chatLi;
}

const renderOptions = (options) => {
  options.forEach((option) => {
      const optionItem = document.createElement("p");
      optionItem.classList.add("option-item");
      optionItem.textContent = option;
      optionItem.addEventListener("click", () => {
          handleOptionSelection(option);
      });
      chatbox.appendChild(optionItem);
      chatbox.scrollTo(0, chatbox.scrollHeight);
  });
}

const optionInfo = {
  "Diseño Y Remodelación De Vivienda Nueva": {
      quoteLink: "Enlace al formulario de cotización para Diseño Y Remodelación De Vivienda Nueva"
  },
  // Agrega más opciones e información aquí
};

const handleOptionSelection = (selectedOption) => {
    const option = optionInfo[selectedOption] || {};

    const chatLiOutgoing = createChatLi(selectedOption, "outgoing");
    chatbox.appendChild(chatLiOutgoing);

    setTimeout(() => {
        if (option.text) {
            const botLiText = createChatLi(option.text, "incoming");
            chatbox.appendChild(botLiText);
        }

        if (option.quoteLink) {
          const botLiQuote = document.createElement("li");
          botLiQuote.classList.add("chat", "incoming");
          const link = document.createElement("a");
          link.href = option.quoteLink;
          link.target = "_blank";
          link.textContent = "Cotizar Diseño Y Remodelación De Vivienda Nueva";
          link.classList.add("quote-link"); // Agrega la clase al enlace
          botLiQuote.appendChild(link);
          chatbox.appendChild(botLiQuote);
        }

        chatbox.scrollTo(0, chatbox.scrollHeight);
    }, 500);
};


sendChatBtn.addEventListener("click", () => {
  userMessage = chatInput.value.trim();
  if (!userMessage) return;

  chatInput.value = "";
  chatbox.appendChild(createChatLi(userMessage, "outgoing"));
  chatbox.scrollTo(0, chatbox.scrollHeight);

  // Simular respuesta del chatbot con opciones
  setTimeout(() => {
      const options = ["Diseño Y Remodelación De Vivienda Nueva", "Diseño Y Remodelación De Vivienda Usada", "Diseño Y Construcción De Vivienda Nueva", "Construcción De Proyectos Ecoturisticos"]; // Agrega tus opciones aquí
      const incomingChatLi = createChatLi("Elige una opción:", "incoming");
      chatbox.appendChild(incomingChatLi);
      chatbox.scrollTo(0, chatbox.scrollHeight);

      renderOptions(options);
  }, 600);
});

closeBtn.addEventListener("click", () => {
    document.body.classList.remove("show-chatbot");
});

// Event listener para el botón de mostrar el chatbot
chatbotToggler.addEventListener("click", () => {
    document.body.classList.toggle("show-chatbot");
});

// Event listener para el botón de abrir el chatbot
const openChatbotBtn = document.querySelector("#open-chatbot");

openChatbotBtn.addEventListener("click", () => {
    document.body.classList.add("show-chatbot");
});

const style = document.createElement('style');
style.innerHTML = `

  .options-list {
    list-style-type: none;
    padding: 0;
    margin-top: 8px;
  }

  .option-item {
    background-color: #f0f0f0;
    margin: 4px 0;
    padding: 8px;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.2s, color 0.2s;
  }

  .option-item:hover {
    background-color: #e0e0e0;
  }

  /* Estilos para el enlace de cotización */
  .quote-link {
    background-color: #f0f0f0;
    margin: 4px 0;
    padding: 8px;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.2s, color 0.2s;
    text-decoration: none;
    color: #000;
    display: inline-block;
  }

  .quote-link:hover {
    background-color: #e0e0e0;
  }

`;



document.head.appendChild(style);





let navbar = document.querySelector('.header .navbar');
let contactInfo = document.querySelector('.contact-info');

document.querySelector('#menu-btn').onclick = () =>{
   navbar.classList.toggle('active');
   searchForm.classList.remove('active');
   loginForm.classList.remove('active');
};


document.querySelector('#info-btn').onclick = () =>{
   contactInfo.classList.add('active');
}

document.querySelector('#close-contact-info').onclick = () =>{
   contactInfo.classList.remove('active');
}

window.onscroll = () =>{
   navbar.classList.remove('active');
   searchForm.classList.remove('active');
   loginForm.classList.remove('active');
   contactInfo.classList.remove('active');
}

var swiper = new Swiper(".home-slider", {
   loop: true,
   grabCursor: true,
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
   autoplay: {
     delay: 5000, // Tiempo de espera entre cada diapositiva en milisegundos
     disableOnInteraction: false, // Permite que la transición automática continúe después de interactuar con los botones de navegación

   },
   effect: "creative", // Efecto creativo
   creativeEffect: {
     prev: {
       translate: [-200, 0, -800],
     },
     next: {
       translate: ["100%", 0, 0],
     },
   },
});

var swiperReviews = new Swiper(".reviews-slider", {
   loop: true,
   grabCursor: true,
   spaceBetween: 20,
   breakpoints: {
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
   },
   autoplay: {
     delay: 5000,
     
   },
   effect: "slide", // Transición de deslizamiento suave
   speed: 800, // Velocidad de transición en milisegundos
});

var swiperBlogs = new Swiper(".blogs-slider", {
   loop: true,
   grabCursor: true,
   spaceBetween: 20,
   breakpoints: {
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
   },
   autoplay: {
     delay: 5000,
   },
   effect: "slide",
   speed: 600, // Velocidad de transición en milisegundos
});

var swiperLogo = new Swiper(".logo-slider", {
   loop: true,
   grabCursor: true,
   spaceBetween: 20,
   breakpoints: {
      450: {
         slidesPerView: 2,
       },
      640: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 4,
      },
      1000: {
        slidesPerView: 5,
      },
   },
   autoplay: {
     delay: 5000,
   },
   effect: "slide",
   speed: 500, // Velocidad de transición en milisegundos
});

const typingSpan = document.querySelector('.typing-animation');
const pauseDuration = 5000; // 5 segundos

function startTypingAnimation() {
  typingSpan.style.animation = 'typing 5s steps(40, end) 1';
  setTimeout(() => {
    typingSpan.style.animation = 'none'; // Detener la animación
    setTimeout(startTypingAnimation, pauseDuration); // Esperar y reiniciar la animación
  }, 5000); // 5 segundos
}

startTypingAnimation();




