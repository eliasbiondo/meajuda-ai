const form = document.querySelector('#submit-form');
const questionTitle = document.querySelector('#questionTitle');
const questionDescription = document.querySelector('#questionDescription');
const warningText = document.querySelector('.box-description p')
const submitBtn = document.querySelector('#submitBtn');

function formValidation(event) {
    event.preventDefault();
    const questionTitleLength = questionTitle.value.length;
    const questionDescriptionLength = questionDescription.value.length;

    if (questionTitleLength >= 20 && questionTitleLength <= 45 && questionDescriptionLength >= 40 && questionDescriptionLength <= 480) {
        form.submit();
    } else if (questionTitleLength < 20) {
        window.alert('O título da pergunta deve conter no mínimo 20 caracteres. Verifique e tente novamente.')
    } else if (questionTitleLength > 45) {
        window.alert('O título da pergunta deve conter no máximo 45 caracteres. Verifique e tente novamente.')
    } else if (questionDescriptionLength < 40) {
        window.alert('A sua resposta contém menos do que 40 caracteres! Verifique e tente novamente.')
    } else {
        window.alert('A sua resposta contém mais do que 480 caracteres! Verifique e tente novamente.')
    }
}

let title = false;
let description = false;

function questionTitleLengthUpdate() {
    const questionTitleLength = questionTitle.value.length;
    warningText.innerText = `${questionTitleLength} de 45 caracteres preenchidos`;

    if (questionTitleLength >= 20 && questionTitleLength <= 45) {
        warningText.classList.remove("invalid")
        warningText.classList.add("valid")
        title = true;

        if(title && description) {
            submitBtn.disabled = false;
        }

    } else {
        submitBtn.disabled = true;
        warningText.classList.remove("valid")
        warningText.classList.add("invalid")
        title = false;
    }
}


function questionDescriptionLengthUpdate() {
    const questionDescriptionLength = questionDescription.value.length;
    warningText.innerText = `${questionDescriptionLength} de 480 caracteres preenchidos`;

    if (questionDescriptionLength >= 40 && questionDescriptionLength <= 480) {
        warningText.classList.remove("invalid")
        warningText.classList.add("valid")
        description = true;

        if(title && description) {
            submitBtn.disabled = false;
        }

    } else {
        submitBtn.disabled = true;
        warningText.classList.remove("valid")
        warningText.classList.add("invalid")
        description = false;
    }
}

submitBtn.addEventListener("click", formValidation);

window.onload = function eventListeners() {
    questionTitle.addEventListener("keyup", questionTitleLengthUpdate)
    questionDescription.addEventListener("keyup", questionDescriptionLengthUpdate)
    submitBtn.disabled = true;
}


