const form = document.querySelector('#submit-form');
const reply = document.querySelector('#reply');
const warningText = document.querySelector('.box-description p')
const submitBtn = document.querySelector('#submitBtn');

function formValidation(event) {
    event.preventDefault();
    const replyLength = reply.value.length;

    if (replyLength >= 30 && replyLength <= 480) {
        form.submit();
    } else if (replyLength < 30) {
        window.alert('A sua resposta contém menos do que 30 caracteres! Verifique e tente novamente.')
    } else {
        window.alert('A sua resposta contém mais do que 480 caracteres! Verifique e tente novamente.')
    }
}

function replyLengthUpdate() {
    const replyLength = reply.value.length;
    warningText.innerText = `${replyLength} de 480 caracteres preenchidos`;

    if (replyLength >= 30 && replyLength <= 480) {
        submitBtn.disabled = false;
        warningText.classList.remove("invalid")
        warningText.classList.add("valid")
    } else {
        submitBtn.disabled = true;
        warningText.classList.remove("valid")
        warningText.classList.add("invalid")
    }
}

submitBtn.addEventListener("click", formValidation);

window.onload = function eventListeners() {
    reply.addEventListener("keyup", replyLengthUpdate)
    submitBtn.disabled = true;
}


