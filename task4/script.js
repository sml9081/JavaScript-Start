let userTextField = document.querySelector(".free");

function changText (event)  {
    let userText = prompt('Введите текст'); 
    userTextField.textContent = userText;
    event.preventDefault();
    alert('Вы уверенны, что хотите изменить текст');
    }

userTextField.addEventListener('click', changText);  


