'use strict';

// let menu = document.querySelector('.menu'),
//     menuItem = document.getElementsByClassName('.menu-item'),
//     tittle  = document.querySelector('.tittle'),
//     adv = document.querySelector('.adv'),
//     promptForApple = document.querySelector('.prompt'),
//     menuItemLi = document.createElement('li');

let menu = document.querySelector('.menu'),
    menuItem = document.getElementsByClassName("menu-item"),
    title = document.getElementById("title"),
    adv = document.getElementsByClassName("adv")[0],
    promptForApple = document.querySelector("#prompt"),
    menuItemLi = document.createElement("li");


menu.insertBefore(menuItem[2], menuItem[1]);  // поменяли местами 3ий со 2ым

menuItemLi.classList.add('menu-item');       // добавляем 5ый элемент и текст
menuItemLi.textContent = 'Пятый элемент';
menu.appendChild(menuItemLi);

document.body.style.backgroundImage = "url('img/apple_true.jpg')";  // Меняем фон


title.textContent = "Мы продаем только подлинную технику Apple"  // заменили текст


adv.remove(); // удаляем див с рекламой со страницы

let yourOpinion = prompt('Ваше отношение к технике Apple?'); // спрашиваем мнение
promptForApple.textContent = yourOpinion; // записываем его

