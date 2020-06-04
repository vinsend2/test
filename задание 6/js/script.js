`use strict`;

let menu = document.getElementsByClassName("menu")[0],
    menuItem = document.getElementsByClassName("menu-item"),
    adv = document.getElementsByClassName("adv")[0],
    titleOld = document.getElementById(`title`),
    promptNativ = document.getElementById(`prompt`),
    titleNew = document.createElement(`div`),
    column = document.querySelectorAll(`.column`),
    newli = document.createElement(`li`);
        

menu.insertBefore(menuItem[2], menuItem[1]);   
titleNew.className = `title`;
titleNew.id = `title`;
newli.className = `menu-item`;
newli.textContent = `Пятый пункт`;
menu.appendChild(newli);
document.body.style.backgroundImage = "url('/задание 6/img/apple_true.jpg')";
console.log(adv);
titleNew.textContent = `Мы продаем только подлинную технику Apple`;
column[1].replaceChild(titleNew, titleOld);
column[1].removeChild(adv);

let promptNew = prompt(`Ваше отношение к технике Apple?`, ``);
promptNativ.textContent = promptNew;

