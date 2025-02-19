const form = document.getElementById("formulario-contato");
const formGroup = document.querySelectorAll(".form-group");


let inputs = document.querySelectorAll(".form-control"); 


//Validação do formulário de contato
form.addEventListener('submit', function(event) {
    event.preventDefault();
       
    if(formValidation()) {
        inputs.forEach(input => {
            input.value = "";
        })
        alert("Formulário enviado com sucesso!");
    } 

    sendFormDataAjax();
})


function formValidation() {
    let isValid = true;
    inputs.forEach(input => {
        if (input.value.trim() === "") {            
            input.style.border = "2px solid red";

            if(input.id === 'nome') {
                let name = document.getElementById('nome');
                const formGroup = name.closest('.form-group');
                if(!formGroup.querySelector('span')) {
                    let span = document.createElement('span');
                    span.classList.add('error');
                    span.innerHTML = "Nome inválido";
                    formGroup.appendChild(span);
                }
            }

            if(input.id === 'email') {
                let email = document.getElementById('email');
                const formGroup = email.closest('.form-group');
                if(!formGroup.querySelector('span')) {
                    let span = document.createElement('span');
                    span.classList.add('error');
                    span.innerHTML = "Email inválido";
                    formGroup.appendChild(span);
                }     
            }

            if(input.id === 'contatoFormulario') {
                let contact = document.getElementById('contatoFormulario');
                const formGroup = contact.closest('.form-group');
                if(!formGroup.querySelector('span')) {
                    let span = document.createElement('span');
                    span.classList.add('error');
                    span.innerHTML = "Contato inválido";
                    formGroup.appendChild(span);
                }     
            }

            if(input.id === 'mensagem') {
                let message = document.getElementById('mensagem');
                const formGroup = message.closest('.form-group');
                if(!formGroup.querySelector('span')) {
                    let span = document.createElement('span');
                    span.classList.add('error');
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



document.querySelectorAll(".form-control").forEach(input => {
    input.addEventListener("input", function() {
        if (this.value.trim() === "") {
            this.style.border = "2px solid red";
        } else {
            this.style.border = "2px solid green";
        }
    });
});


//Enviar dados formulário AJAX
// function sendFormDataAjax() {
//     //dados do AJAX
//     let formData = new FormData();
//     formData.append("nome", nome);
//     formData.append("email", email);
//     formData.append("senha", senha);

//     fetch("processa_formulario.php", {
//         method: "POST",
//         body: formData
//     })
//     .then(response => response.json()) // Espera a resposta do servidor em JSON
//     .then(data => {
//         if (data.sucesso) {
//             document.getElementById("mensagem").innerText = "Formulário enviado com sucesso!";
//             document.getElementById("mensagem").classList.add("sucesso");
//         } else {
//             document.getElementById("mensagem").innerText = data.mensagem;
//             document.getElementById("mensagem").classList.add("erro");
//         }
//     })
//     .catch(error => {
//         document.getElementById("mensagem").innerText = "Erro ao enviar o formulário.";
//         document.getElementById("mensagem").classList.add("erro");
//         console.error("Erro:", error);
//     });
// }



// Animação dos cards dos cursos 
const cards = document.querySelectorAll('#cursos .card');
cards.forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.transform = 'scale(1.1)';
    })
    card.addEventListener('mouseout', () => {
        card.style.transform = 'scale(1.0)';
    })
});


//Criar mais 2 cursos
const listaCursos = document.querySelector("#sobre ul");
const newCourseLi = document.createElement('li');
newCourseLi.innerHTML = "Comunicação Digital";
const newCourse2Li = document.createElement('li');
newCourse2Li.innerHTML = "Formação de Formadores";
listaCursos.append(newCourseLi, newCourse2Li);


//Alterar tamanho da imagem do card
let cardImg = document.querySelectorAll('.card-img-top');
cardImg.forEach(img => {
    img.style.width = "100%";
    img.style.minHeight = "200px";
})


//Missão 2
//Criar botão para voltar ao topo.
const buttonTop = document.createElement('button');
buttonTop.innerHTML = "Voltar ao inicio";
buttonTop.classList.add('btn', 'btn-primary');
buttonTop.style.position = "fixed";
buttonTop.style.bottom = "10px";
buttonTop.style.right = "10px";
buttonTop.style.display = "none";
document.body.appendChild(buttonTop);   

window.addEventListener('scroll', function() {
    if(window.scrollY > 600) {
        buttonTop.style.display = "block";
    }else {
        buttonTop.style.display = "none";
    }
})

buttonTop.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})


//-----------------------------------------------Carrossel Sobre Nós
let aboutContainer = document.getElementById('sobre');

window.onload = function() {
    let carrosselContainer = document.createElement('div');
    carrosselContainer.classList.add('carrosselContainer');
    aboutContainer.appendChild(carrosselContainer);

    const images = [
        {src: './img/fotoCarrossel.jpg'},
        {src: './img/Front-endTurma.jpg'}
    ]
    
    let carrosselHTML = `
    <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
    `;
    
    images.forEach((imagem, index) => {
        carrosselHTML += `
            <div class="carousel-item ${index === 0 ? 'active' : ''}">
                <img src="${imagem.src}" class="d-block w-100" alt="Carrossel" width="800" height="400">
            </div>
        `;       
    });
    
    // Inserir o carrossel no contêiner
    carrosselContainer.innerHTML = carrosselHTML;
}

//--------------------------------------------------API EXTERNA

let contactContainer = document.getElementById('contato');

//Criar uma sessão no container do contacto para incluir a morada e a div do mapa.
let cesaeInfo = document.createElement('div');
cesaeInfo.classList.add('cesaeInfo');
cesaeInfo.innerHTML = `
    <div class="cesaeInfo">
        <div class="address">           
           <h1 class="infoTitle">Nossa localização: </h1>
            <p class="address">R. de Ciríaco Cardoso, 186 <br> Porto - 4150-212 </br></p>
        </div>

         <div id="map"></div>
    </div>
`
contactContainer.appendChild(cesaeInfo);


//Pegar os dados para colocar usar a API - Escolhido o Map Tiler
let address = "R. de Ciríaco Cardoso, 186 Porto - 4150-212";
let url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`;

//Faço a requisição e pego as coordenadas
fetch(url)
.then(response => response.json())
.then(data => {
    let lat = data[0].lat;
    let lon = data[0].lon;

    // Inicializo o mapa dentro da div que criei com o id map
    let map = L.map('map').setView([lat, lon], 16);
    L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=SIoAvuIVZgEnujqCK3FY', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles &copy; <a href="https://maptiler.com/copyright">MapTiler</a>'
    }).addTo(map);

    // Adicionar um marcador no endereço
    let marker = L.marker([lat, lon]).addTo(map);
    marker.bindPopup("<b>Localização:</b><br>" + address).openPopup();
  })
  
.catch(error => console.error('Erro ao obter coordenadas:', error));


//-----------------------------------------------------------Modais
let cardButton = document.querySelectorAll('.card-body a');

cardButton.forEach((button, index) => {
    button.classList.add(`btn-${index + 1}`);
    console.log(button);

    let modals = [];

        // Criar o modal correspondente
        let modal = document.createElement('div');
        modal.classList.add('modal', `modal-${index + 1}`);
        modal.style.position = 'fixed';
        modal.style.zIndex = '1000';
        modal.style.left = '0';
        modal.style.top = '0';
        modal.style.width = '100%';
        modal.style.height = '100%';
        modal.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        modal.style.display = 'none'; // Oculto inicialmente
        modal.style.justifyContent = 'center';
        modal.style.alignItems = 'center';

        // Criar o conteúdo do modal
        let modalContent = document.createElement('div');
        modalContent.classList.add('modal-content');
        modalContent.style.backgroundColor = 'white';
        modalContent.style.padding = '20px';
        modalContent.style.borderRadius = '8px';
        modalContent.style.width = '50%';
        modalContent.style.textAlign = 'center';
        modalContent.style.position = 'relative';

        // Criar o botão de fechar
        let closeButton = document.createElement('span');
        closeButton.innerHTML = '&times;';
        closeButton.style.position = 'absolute';
        closeButton.style.top = '10px';
        closeButton.style.right = '15px';
        closeButton.style.fontSize = '20px';
        closeButton.style.cursor = 'pointer';

        // Criar o conteúdo do modal específico
        let title = document.createElement('h2');
        title.innerText = `Modal ${index + 1}`;

        let description = document.createElement('p');
        description.innerText = `Este é o conteúdo do modal ${index + 1}, aberto pelo botão ${index + 1}.`;

        // Montar o modal
        modalContent.appendChild(closeButton);
        modalContent.appendChild(title);
        modalContent.appendChild(description);
        modal.appendChild(modalContent);
        document.body.appendChild(modal);

        // Armazenar modal na lista
        modals.push(modal);

        // Evento para abrir o modal correto
        button.addEventListener('click', function (event) {
            event.preventDefault(); // Evita redirecionamento
            modals[index].style.display = "flex"; // Mostra o modal correspondente
        });

        // Fechar modal ao clicar no botão de fechar
        closeButton.addEventListener('click', function () {
            modals[index].style.display = "none";
        });

        // Fechar modal ao clicar fora do conteúdo
        modal.addEventListener('click', function (event) {
            if (event.target === modal) {
                modals[index].style.display = "none";
            }
        });
    });


// let modal = document.createElement('div');
// modal.classList.add('modal');
// modal.style.position = 'fixed';
// modal.style.zIndex = '1000';
// modal.style.left = '0';
// modal.style.top = '0';
// modal.style.width = '100%';
// modal.style.height = '100%';
// modal.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
// modal.style.display = 'flex';
// modal.style.justifyContent = 'center';
// modal.style.alignItems = 'center';


