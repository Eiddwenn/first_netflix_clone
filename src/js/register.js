let registForm = document.forms['registerForm']
let newMailField = registForm.elements['email']
let newPassField = registForm.elements['password']
let samePassField = registForm.elements['confirmPassword']
let messContainer = document.querySelector('.register-message')
let newMailError = newMailField.nextElementSibling;
let newPassError = newPassField.nextElementSibling;
let samePassError = samePassField.nextElementSibling;
let inputError = registForm.elements['checkbox'].nextElementSibling;

registForm.addEventListener('submit', newValidSubmit)

function newValidSubmit(event) {
  event.preventDefault();
  if (newValidForm() == true) {
    messContainer.style.display = 'block';
  }
}

function newValidForm() {
  return isValidNewEmailField() && isValidNewPassField() && checkPasswords() && checkInp(registForm);
}

function isValidNewEmailField() {
  let validMail = isValidNewMail(newMailField.value)
  if (!validMail) {
    addErrorMessage (newMailError, newMailError, 'L\'email non è valida');
  }
  return validMail;
}

function isValidNewPassField() {
  let validPsw = isValidNewPass(newPassField.value)
  if (!validPsw) {
    addErrorMessage (newPassError, newPassError, 'La password deve essere di almeno 6 caratteri, avere almeno un carattere speciale, un numero, un carattere maiuscolo e uno minuscolo');
  }
  return validPsw;
}

function checkPasswords() {
  if (newPassField.value === samePassField.value) {
    return true; 
  } else {
    addErrorMessage (samePassError, samePassError, 'Le password devono essere uguali');
  }
}

function checkInp(theForm) {
  if (
  theForm.checkbox.checked == false) 
  {
      addErrorMessage (inputError, inputError, 'Devi accettare i termini e le condizioni della privacy');
      return false;
  } else {    
      return true;
  }
}

// CONTROLLO EMAIL PASSWORD

function isValidNewMail(validText) {
  let regExp =
      /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
      
  return regExp.test(validText);
}

function isValidNewPass(validPsw) {
  let regExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

  return regExp.test(validPsw)
}

// FOCUS ELEMENTS

newMailField.addEventListener('focus', () => {
  removeError(newMailError)
})

newPassField.addEventListener('focus', () => {
  removeError(newPassError)
})

samePassField.addEventListener('focus', () => {
  removeError(samePassError)
})

registForm.checkbox.addEventListener('focus', () => {
  removeError(inputError)
})

//  MESSAGGIO ERRORE

    function addErrorMessage (field, errorSpan, errorMessage) {
      field.style.display = 'block';
      errorSpan.innerHTML = errorMessage;
    }

    function removeError(field) {
      field.style.display = 'none';
    }

//  MESSAGGIO PER LUNGHEZZA PASSWORD 

$('input[name="password"]').focus(
    function() {
      $('.instruction-password').css('display', 'block');
    } 
  )
  
  $('input[name="password"]').focusout(
    function() {
      $('.instruction-password').css('display', 'none');
    } 
  )
  
  // FORM REGISTRAZIONE
  
  $('.register-form p button').click(
    function() {
      $('.log-in-modale').show();
    }
  )

  // MESSAGE CLOSE

  $('.close-message').click(
    function() {
      $('.register-message').hide();
    }
  )