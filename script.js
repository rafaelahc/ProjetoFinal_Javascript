const form = document.getElementById("formulario-contato")

// Validação do formulário de contato
form.addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    if(formValidation()) {
        alert("Formulário enviado com sucesso!");
        this.submit();
    } 
})

function formValidation() {
    let inputs = document.querySelectorAll(".form-control"); 
    let isValid = true; 

    inputs.forEach(input => {
        if (input.value.trim() === "") {
            input.style.border = "2px solid red"; 
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

document.querySelectorAll(".form-control").forEach(input => {
    input.addEventListener("input", function() {
        if (input.value.trim() === '') {
            input.style.border = "2px solid red";
        } else {
            input.style.border = "2px solid green";
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

