// MENU

$('.myAccount').hover(function() {
  $('.menu-style').show();
}
)

$(this).click(function() {
$('.menu-style').hide();
})

$('.logs').click(
function() {
  $('.log-in-modale').show();
  $('.menu-style').hide();
  $('body').css('overflow-y', 'hidden');
}
)

$('.close-mod').click(
function() {
  $('.log-in-modale').hide();
  $('body').css('overflow-y', 'unset');
}
)


let formField = document.forms['logIn']
let emailField = formField.elements['email']
let passField = formField.elements['password']
let emailError = emailField.nextElementSibling;
let passError = passField.nextElementSibling;
let logInBtn = document.querySelector('.loginBtn');


formField.addEventListener('submit', validSubmit);

function validSubmit(event) {
  event.preventDefault();
  if (validForm() == true) {
    console.log('ora qui!')
    let changeAccountName = document.querySelector('.account-username').innerHTML = "User Name";
    let modalLogIn = document.querySelector('.log-in-modale').style.display = 'none';
  }
}

//  MESSAGGIO ERRORE

    function addErrorMessage (field, errorSpan, errorMessage) {
      field.style.display = 'block';
      errorSpan.innerHTML = errorMessage;
    }

    function removeError(field) {
      field.style.display = 'none';
    }

// validazione FORM LOGIN

function validForm() {
  return isValidEmailField() && isValidPassField();
}

function isValidEmailField() {
  let validMail = isValidMail(emailField.value);
  if (!validMail) {
    addErrorMessage(emailError, emailError, 'La mail non è corretta');
  }else {
    removeError(emailError);
  }
  return validMail;
}

function isValidPassField() {
  let validPsw = isValidPassword(passField.value);
  if (!validPsw) {
    addErrorMessage(passError, passError, 'La password non è valida');
  } else {
    removeError(passError);
  }
  return validPsw;
}

// FOCUS ELEMENTS

emailField.addEventListener('focus', () => {
  emailError.style.display = 'none';
})
passField.addEventListener('focus', () => {
  passError.style.display = 'none';
})

// CONTROLLO EMAIL PASSWORD

function isValidMail(validText) {
  let regExp =
      /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
      
  return regExp.test(validText);
}

function isValidPassword(validPsw) {
  let regExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

  return regExp.test(validPsw)
}











