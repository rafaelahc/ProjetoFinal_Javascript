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

