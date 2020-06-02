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
    savings: false,
    chooseExpenses: function () {
        for (let i = 0; i < 2; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
                b = prompt("Во сколько обойдется?", "");

            if (typeof (a) === 'string' && typeof (a) != null && typeof (b) != null && a != "" && b != "" && a.length < 50) {
                appData.expenses[a] = b;
            } else {
                i--;
            }

        }
    },
    detectDayBudget: function () {
        appData.moneyPerDay = appData.budget / 30;
        alert("Дневной бюджет: " + appData.moneyPerDay);
        return appData.moneyPerDay;
    },
    detectLevel: function () {
        if (appData.moneyPerDay < 100) {
            console.log("Это минимальный уровень достатка!");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Это средний уровень достатка!");
        } else if (appData.moneyPerDay > 2000) {
            console.log("Это высокий уровень достатка!");
        } else {
            console.log("Произошла ошибка");
        }
    },
    chooseOptExpenses: function () {
        for (let i = 0; i < 3; i++) {
            let a = prompt("Статья необязательных расходов?", "");

            if ((typeof (a)) === 'string' && (typeof (a)) != null && a != '' && a.length < 50) {
                appData.optionalExpenses[i] = a;

            } else {
                i--;
            }
        }
    },
    checkSavings: function () {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");

            appData.monthIncome = save / 100 / 12 * percent;
            alert("Доход с Вашего депозита в месяц: " + appData.monthIncome);
        }
    },
    chooseIncome: function () {
        let items = prompt(`Что принесет дополнительный доход? (Перечислите через запятую)`, ``);
        if (typeof (items) === 'string' && typeof (items) != null && items != '' && items.length < 50) {
            appData.income = items.split(`, `);
            appData.income.push(prompt(`Может что-то еще?`));
            appData.income.sort();
        }
        appData.income.forEach(function (item, i) {
            alert(`Способы доп. заработка: ` + (i + 1) + ` - ` + item);
        });
    }
};

for (let key in appData) {
    console.log(`Наша программа включает в себя: ` + key + ` - ` + appData[key]);
}



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