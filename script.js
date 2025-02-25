const form = document.getElementById("formulario-contato");
const formGroup = document.querySelectorAll(".form-group");

let inputs = document.querySelectorAll(".form-control");

//Validação do formulário de contato
form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (formValidation()) {
    inputs.forEach((input) => {
      input.value = "";
    });
    alert("Formulário enviado com sucesso!");
  }

});

function formValidation() {
  let isValid = true;
  inputs.forEach((input) => {
    if (input.value.trim() === "") {
      input.style.border = "2px solid red";

      if (input.id === "nome") {
        let name = document.getElementById("nome");
        const formGroup = name.closest(".form-group");
        if (!formGroup.querySelector("span")) {
          let span = document.createElement("span");
          span.classList.add("error");
          span.innerHTML = "Nome inválido";
          formGroup.appendChild(span);
        }
      }

      if (input.id === "email") {
        let email = document.getElementById("email");
        const formGroup = email.closest(".form-group");
        if (!formGroup.querySelector("span")) {
          let span = document.createElement("span");
          span.classList.add("error");
          span.innerHTML = "Email inválido";
          formGroup.appendChild(span);
        }
      }

      if (input.id === "contatoFormulario") {
        let contact = document.getElementById("contatoFormulario");
        const formGroup = contact.closest(".form-group");
        if (!formGroup.querySelector("span")) {
          let span = document.createElement("span");
          span.classList.add("error");
          span.innerHTML = "Contato inválido";
          formGroup.appendChild(span);
        }
      }

      if (input.id === "mensagem") {
        let message = document.getElementById("mensagem");
        const formGroup = message.closest(".form-group");
        if (!formGroup.querySelector("span")) {
          let span = document.createElement("span");
          span.classList.add("error");
          span.innerHTML = "Campo obrigatório";
          formGroup.appendChild(span);
        }
      }
      isValid = false;
    } else {
      input.style.border = "2px solid green";
    }
  });

  return isValid;
}

document.querySelectorAll(".form-control").forEach((input) => {
  input.addEventListener("input", function () {
    if (this.value.trim() === "") {
      this.style.border = "2px solid red";
    } else {
      this.style.border = "2px solid green";
    }
  });
});

// Animação dos cards dos cursos
const cards = document.querySelectorAll("#cursos .card");
cards.forEach((card) => {
  card.addEventListener("mouseover", () => {
    card.style.transform = "scale(1.1)";
  });
  card.addEventListener("mouseout", () => {
    card.style.transform = "scale(1.0)";
  });
});

//Criar mais 2 cursos
const listaCursos = document.querySelector("#sobre ul");
const newCourseLi = document.createElement("li");
newCourseLi.innerHTML = "Comunicação Digital";
const newCourse2Li = document.createElement("li");
newCourse2Li.innerHTML = "Formação de Formadores";
listaCursos.append(newCourseLi, newCourse2Li);

//Alterar tamanho da imagem do card
let cardImg = document.querySelectorAll(".card-img-top");
cardImg.forEach((img) => {
  img.style.width = "100%";
  img.style.minHeight = "200px";
});

//Missão 2
//Criar botão para voltar ao topo.
const buttonTop = document.createElement("button");
buttonTop.innerHTML = "Voltar ao inicio";
buttonTop.classList.add("btn", "btn-primary");
buttonTop.style.position = "fixed";
buttonTop.style.bottom = "10px";
buttonTop.style.right = "10px";
buttonTop.style.display = "none";
document.body.appendChild(buttonTop);

window.addEventListener("scroll", function () {
  if (window.scrollY > 600) {
    buttonTop.style.display = "block";
  } else {
    buttonTop.style.display = "none";
  }
});

buttonTop.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

//-----------------------------------------------Carrossel Sobre Nós
let aboutContainer = document.getElementById("sobre");

window.onload = function () {
  let carrosselContainer = document.createElement("div");
  carrosselContainer.classList.add("carrosselContainer");
  aboutContainer.appendChild(carrosselContainer);

  const images = [
    { src: "./img/fotoCarrossel1.jpg" },
    { src: "./img/fotoCarrossel2.jpg" },
  ];

  let carrosselHTML = `
    <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
    `;

  images.forEach((imagem, index) => {
    carrosselHTML += `
            <div class="carousel-item ${index === 0 ? "active" : ""}">
                <img src="${
                  imagem.src
                }" class="d-block w-100" alt="Carrossel" width="800" height="400">
            </div>
        `;
  });

  // Inserir o carrossel no contêiner
  carrosselContainer.innerHTML = carrosselHTML;
};


//---------------------------------------------------Quizz

// Dados da pergunta do quiz
const questionData = {
  question: "Sobre o Cesae Digital:",
  answers: [
    { text: "Nasceu em 2020", correct: false },
    {
      text: "Promove a realização de formação profissional e de reconhecimento",
      correct: false,
    },
    {
      text: "É um organismo dotado de personalidade jurídica de direito público sem fins lucrativos",
      correct: false,
    },
    { text: "Todas as alternativas", correct: true },
  ],
};

let score = 0;

// Criando o HTML e CSS
const container = document.createElement("div");
container.id = "quiz-container";
container.style.textAlign = "center";
container.style.padding = "20px";
container.style.backgroundColor = "#7C98B3";
container.style.marginBottom = "20px";

const title = document.createElement("h1");
title.textContent = "Quiz do Cesae";

const questionElement = document.createElement("p");
questionElement.id = "question-text";
questionElement.style.fontSize = "18px";
questionElement.style.fontWeight = "bold";
questionElement.style.marginBottom = "20px";

const answersBox = document.createElement("div");
answersBox.id = "answers-box";

const resultContainer = document.createElement("div");
resultContainer.id = "result-container";
resultContainer.style.display = "none";
resultContainer.style.marginTop = "20px";

const scoreText = document.createElement("p");
scoreText.innerHTML = "Você acertou <span id='score'>0</span> de 1 perguntas.";

const restartButton = document.createElement("button");
restartButton.textContent = "Refazer Quiz";
restartButton.style.padding = "10px 20px";
restartButton.style.marginTop = "10px";
restartButton.style.cursor = "pointer";
restartButton.addEventListener("click", restartQuiz);

resultContainer.appendChild(scoreText);
resultContainer.appendChild(restartButton);

container.appendChild(title);
container.appendChild(questionElement);
container.appendChild(answersBox);
container.appendChild(resultContainer);
document.body.appendChild(container);

// Função para carregar as pergunta
function loadQuestion() {
  questionElement.textContent = questionData.question;
  answersBox.innerHTML = "";

  questionData.answers.forEach((answer, i) => {
    const button = document.createElement("button");
    button.innerHTML = `<span>${String.fromCharCode(97 + i)})</span> ${
      answer.text
    }`;

    button.style.display = "block";
    button.style.margin = "10px auto";
    button.style.padding = "10px";
    button.style.width = "500px";
    button.style.border = "none";
    button.style.cursor = "pointer";
    button.style.backgroundColor = "#f9f9f9";
    button.style.textAlign = "left";


    button.dataset.correct = answer.correct;
    button.addEventListener("click", () => checkAnswer(button));

    answersBox.appendChild(button);
  });
}

// Função para verificar a resposta
function checkAnswer(button) {
  const isCorrect = button.dataset.correct === "true";

  if (isCorrect) {
    button.style.backgroundColor = "#4EAC3B"; // Resposta correta
    score = 1;
  } else {
    button.style.backgroundColor = "#B82020"; // Resposta incorreta
  }

  setTimeout(showResult, 700);
}

// Exibir resultado final
function showResult() {
  answersBox.style.display = "none";
  questionElement.style.display = "none";
  resultContainer.style.display = "block";
  document.getElementById("score").textContent = score;
}

// Reiniciar o quiz
function restartQuiz() {
  score = 0;
  answersBox.style.display = "block";
  questionElement.style.display = "block";
  resultContainer.style.display = "none";
  loadQuestion();
}

// Iniciar Quiz
loadQuestion();

aboutContainer.appendChild(container);

//--------------------------------------------------API EXTERNA - MAPA OPEN STREET

let contactContainer = document.getElementById("contato");

//Criar uma sessão no container do contacto para incluir a morada e a div do mapa.
let cesaeInfo = document.createElement("div");
cesaeInfo.classList.add("cesaeInfo");
cesaeInfo.innerHTML = `
    <div class="cesaeInfo">
        <div class="address">           
           <h1 class="infoTitle mt-5">Nossa localização: </h1>
            <p class="address">R. de Ciríaco Cardoso, 186 <br> Porto - 4150-212 </br></p>
        </div>

         <div id="map"></div>
    </div>
`;
contactContainer.appendChild(cesaeInfo);

//Pegar os dados para colocar usar a API - Escolhido o Map Tiler
let address = "R. de Ciríaco Cardoso, 186 Porto - 4150-212";
let url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
  address
)}`;

//Faço a requisição e pego as coordenadas
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    let lat = data[0].lat;
    let lon = data[0].lon;

    // Inicializo o mapa dentro da div que criei com o id map
    let map = L.map("map").setView([lat, lon], 16);
    L.tileLayer(
      "https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=SIoAvuIVZgEnujqCK3FY",
      {
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles &copy; <a href="https://maptiler.com/copyright">MapTiler</a>',
      }
    ).addTo(map);

    // Adicionar um marcador no endereço
    let marker = L.marker([lat, lon]).addTo(map);
    marker.bindPopup("<b>Localização:</b><br>" + address).openPopup();
  })

  .catch((error) => console.error("Erro ao obter coordenadas:", error));

//-----------------------------------------------------------Modais
document.addEventListener("DOMContentLoaded", () => {
  const cardButtons = document.querySelectorAll(".card-body a");

  //COnteúdo dos modais referente a cada card de que vai de acordo com o índice.
  const modalContents = [
    {
      title: "Software Developer",
      description:
        "A formação de Software Developer pretende promover a requalificação profissional de jovens e adultos e capacitar profissionais para o domínio técnico especializado em temáticas relacionadas com a programação e desenvolvimento de plataformas web e mobile, gestão de bases de dados e engenharia de software.",
    },
    {
      title: "Web Developer",
      description:
        "Definir e implementar estratégias de experiência do utilizador/ Analisar e interpretar interações entre utilizadores e produtos digitais",
    },
    {
      title: "Front End Developer",
      description:
        "Dotar os formandos de conhecimentos teóricos e competências técnicas necessários para ingressar no mercado de trabalho numa atividade profissional ligada ao Design e Programação Web: criação de conteúdos multimédia para a web, desenvolvimento de plataformas web client-side, gestão de projetos em metodologias waterfall e agile.",
    },
    {
      title: "Girls can code",
      description:
        "O Girls Can Code , um projeto inovador voltado para capacitar raparigas na área de tecnologia, é lançado oficialmente hoje. Com o objetivo de promover diversidade e inclusão no setor, o projeto visa capacitar jovens raparigas a explorar todo o potencial do mundo digital, proporcionando-lhes oportunidades de aprendizagem e desenvolvimento de competências digitais.",
    },
  ];

  if (cardButtons.length === 0) {
    console.warn("Nenhum botão encontrado dentro de .card-body");
    return;
  }

  cardButtons.forEach((button, index) => {
    const modal = document.createElement("div");
    modal.classList.add("modal");
    modal.style.cssText =
      "position:fixed;z-index:1000;left:0;top:0;width:100%;height:100%;background:rgba(0,0,0,0.5);display:none;justify-content:center;align-items:center;";

    modal.innerHTML = `
            <div class="modal-content" style="background:white;padding:20px;border-radius:8px;width:50%;text-align:center;position:relative;">
                <span class="close" style="position:absolute;top:10px;right:15px;font-size:20px;cursor:pointer;">&times;</span>
                <h2>${modalContents[index]?.title || `Modal ${index + 1}`}</h2>
                <p>${
                  modalContents[index]?.description ||
                  `Conteúdo do modal ${index + 1}.`
                }</p>
            </div>
        `;

    document.body.appendChild(modal);

    button.addEventListener("click", (e) => {
      e.preventDefault();
      modal.style.display = "flex";
    });

    modal
      .querySelector(".close")
      .addEventListener("click", () => (modal.style.display = "none"));
    modal.addEventListener("click", (e) => {
      if (e.target === modal) modal.style.display = "none";
    });
  });
});


// Colocando a logo
const navbarBrand = document.querySelector(".navbar-brand");


const logo = document.createElement("img");
logo.src = "./img/logo_cesae-cores_horizontal_header_site.png";
logo.alt = "Cesae Digital";
logo.style.height = "70px";


navbarBrand.innerHTML = ""; // Remove o texto
navbarBrand.appendChild(logo);
