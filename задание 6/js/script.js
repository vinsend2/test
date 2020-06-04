`use strict`;

let menu = document.getElementsByClassName("menu")[0],
    menuItem = document.getElementsByClassName("menu-item"),
    adv = document.getElementsByClassName("adv")[0],
    title = document.getElementById(`title`),
    promptNativ = document.getElementById(`prompt`),
    column = document.querySelectorAll(`.column`),
    newli = document.createElement(`li`);


menu.insertBefore(menuItem[2], menuItem[1]);
newli.className = `menu-item`;
newli.textContent = `Пятый пункт`;
menu.appendChild(newli);
document.body.style.backgroundImage = "url('/задание 6/img/apple_true.jpg')";
title.textContent = `Мы продаем только подлинную технику Apple`;
column[1].removeChild(adv);

let promptNew = prompt(`Ваше отношение к технике Apple?`, ``);
promptNativ.textContent = promptNew;