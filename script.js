`use strict`;

let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", ``);
    time = prompt("Введите дату в формате YYYY-MM-DD");

    while (isNaN(money) || money == `` || money == null) {
    money = +prompt("Ваш бюджет на месяц?", ``);
}
}
start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false

};


/*let i = 0;
while (i < 2) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
        b = prompt("Во сколько обойдется", "");
    i++;
    if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' && a.length < 50)
     {
        appData.expenses[a] = b;
    }
}
do {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
        b = prompt("Во сколько обойдется", "");
    i++;
    if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' && a.length < 50) 
    {
        appData.expenses[a] = b;
    }
    
} while (i < 2);

for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
        b = prompt("Во сколько обойдется", "");
    if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' && a.length < 50) {
        console.log("done");
        appData.expenses[a] = b;
    } else {
        console.log("bad result");
        i--;
    }
}*/

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt ("Введите обязательную статью расходов в этом месяце", ""),
            b = prompt ("Во сколько обойдется?", "");
    
        if ( typeof(a)==='string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {
            appData.expenses[a] = b;
        } else {
            i--;
        }
    
    };
}
chooseExpenses();



function detectDayBudget() {
    appData.moneyPerDay = appData.budget / 30;
    alert("Дневной бюджет: " + appData.moneyPerDay);
    return appData.moneyPerDay;
}

function detectLevel() {
    if (appData.moneyPerDay < 100) {
        console.log("Это минимальный уровень достатка!");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("Это средний уровень достатка!");
    } else if (appData.moneyPerDay > 2000) {
        console.log("Это высокий уровень достатка!");
    } else {
        console.log("Произошла ошибка");
    }
}
detectDayBudget();
detectLevel();

function chooseOptExpenses() {
    for (let i = 0; i < 3; i++) {
        let a = prompt("Статья необязательных расходов?", "");

        if ((typeof (a)) === 'string' && (typeof (a)) != null && a != '' && a.length < 50) {
            appData.optionalExpenses[i] = a;

        } else {
            i--;
        }
    }
}

chooseOptExpenses();