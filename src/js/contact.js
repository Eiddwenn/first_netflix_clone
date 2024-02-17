let contactForm = document.forms['contactForm'];
let nameField = contactForm.elements['name'];
let surnameField = contactForm.elements['surname'];
let mailField = contactForm.elements['email'];
let numberField = contactForm.elements['number'];
let messContainer = document.querySelector('.contact-message');
let namError = nameField.nextElementSibling;
let surError = surnameField.nextElementSibling;
let emError = mailField.nextElementSibling;
let numbError = numberField.nextElementSibling;
let textArea = document.getElementById('textarea');
let areaError = textArea.nextElementSibling;
let inpError = contactForm.elements['checkbox'].nextElementSibling;

contactForm.addEventListener('submit', validContactSubmit)

function validContactSubmit(event) {
event.preventDefault();
if (validContactDatas() == true) {
    messContainer.style.display = 'block';
} 
}

function validContactDatas() {
    return validMailField() && isValidNumber() && isValidName() && isValidSurname() && validTextArea() && checkPrivacy(contactForm);
}

function isValidName() {
    let nameValid = validUserData(nameField.value)
    if (!nameValid) {
        addErrorMessage (namError, namError, 'Devi inserire il tuo nome');
    }
    return nameValid;
}

function isValidSurname() {
    let surnameValid = validUserData(surnameField.value)
    if (!surnameValid) {
        addErrorMessage (surError, surError, 'Devi inserire il tuo cognome');

    }
    return surnameValid;
}

function validMailField() {
    let validMail = mailFieldCheck(mailField.value)
    if (!validMail) {
        addErrorMessage (emError, emError, 'Devi inserire una mail corretta');
    }
    return validMail;
}

function isValidNumber() {
    let validPsw = validNumber(numberField.value)
    if (!validPsw) {
        addErrorMessage (numbError, numbError, 'Devi inserire un numero di telefono');
    }
    return validPsw;
}

function validTextArea() {
    if (textArea.value == '') {
        addErrorMessage (areaError, areaError, 'Devi scrivere un messaggio');
        return false;
    }
    return true;
}

function checkPrivacy(theForm) {
    if (theForm.checkbox.checked == false) {
        addErrorMessage (inpError, inpError, 'Devi accettare i termini e le condizioni della privacy');
        return false;
    } else {    
        return true;
    }
}

// REGEX FIELDS

function mailFieldCheck(validMail) {
    let regExp =
    /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;

    return regExp.test(validMail);
}

function validUserData(validFieldData) {
    let regExp =  /([a-zA-Z]{3,30}\s*)+/;

    return regExp.test(validFieldData);
}

function validNumber(validNumber) {
    let regExp = /^(([+])39)?((3[1-6][0-9]))(\d{7})$/gm;

    return regExp.test(validNumber)
}

// FOCUS ELEMENTS

nameField.addEventListener('focus', () => {
    removeError(namError)
})

surnameField.addEventListener('focus', () => {
    removeError(surError)
})

mailField.addEventListener('focus', () => {
    removeError(emError)
})

numberField.addEventListener('focus', () => {
    removeError(numbError)
})

textArea.addEventListener('focus', () => {
    removeError(areaError)
})

contactForm.checkbox.addEventListener('focus', () => {
    removeError(inpError)
})


  //  MESSAGGIO ERRORE

function addErrorMessage (field, errorSpan, errorMessage) {
    field.style.display = 'block';
    errorSpan.innerHTML = errorMessage;
}

function removeError(field) {
    field.style.display = 'none';
}


// MODALE CONFERMA CONTACT

$('.close-message').click(
    function() {
        $('.contact-message').hide();
    }
)