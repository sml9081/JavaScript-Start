//Ввод текста в поле ввода
let textEl;
let Usertext = document.querySelector('#input');
let UsertextField = document.querySelector('#duplicateField');

input.onkeyup = function (event) {
textEl = input.value;
UsertextField.textContent = textEl;

}

input.onkeyup ();

//Выводим текст в консоль
document.querySelector('.btn').addEventListener('click', function(){
    let btn = textEl;
    console.log(btn);
  });

document.querySelector('.btn').addEventListener('click', function(event) {
    input.value = event.preventDefault();
    });
  
//Отчистка  текста из формы
  document.querySelector('.btn').addEventListener('click', function(event) {
    UsertextField.textContent = event.preventDefault();
    
  });
  
  document.querySelector(".clearBtn").addEventListener('click', function() {
    input.value = "";
  });