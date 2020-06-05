`use strict`;


let money, time;

let start = document.getElementById(`start`),
    budgetvalue = document.getElementsByClassName("budget-value")[0],
    daybudgetvalue = document.getElementsByClassName("daybudget-value")[0],
    levelvalue = document.getElementsByClassName("level-value")[0],
    expensesvalue = document.getElementsByClassName("expenses-value")[0],
    optionalexpensesvalue = document.getElementsByClassName("optionalexpenses-value")[0],
    incomevalue = document.getElementsByClassName("income-value")[0],
    monthsavingsvalue = document.getElementsByClassName("monthsavings-value")[0],
    yearsavingsvalue = document.getElementsByClassName("yearsavings-value")[0],
    expensesitem = document.querySelectorAll(`.expenses-item`),
    btn = document.querySelectorAll(`button`),
    //btn1 = document.getElementsByTagName(`button`)[0],
    optionalexpensesitem = document.querySelectorAll(`.optionalexpenses-item`),
    chooseincome = document.querySelector(`.choose-income`),
    savings = document.querySelector(`#savings`),
    choosesum = document.querySelector(`.choose-sum`),
    choosepercent = document.querySelector(`.choose-percent`),
    yearvalue = document.querySelector(`.year-value`),
    monthvalue = document.querySelector(`.month-value`),
    dayvalue = document.querySelector(`.day-value`),
    inputall = document.querySelectorAll(`input`);



btn[0].disabled = true;
btn[1].disabled = true;
btn[2].disabled = true;





start.addEventListener(`click`, function () {
    time = prompt("Введите дату в формате YYYY-MM-DD");
    money = +prompt("Ваш бюджет на месяц?", ``);

    while (isNaN(money) || money == `` || money == null) {
        money = +prompt("Ваш бюджет на месяц?", ``);
    }

    while (time == `` || time == null) {
        money = +prompt("Введите дату в формате YYYY-MM-DD", ``);
    }
    appData.budget = money;
    console.log(appData.budget);
    appData.timeData = time;
    budgetvalue.textContent = money;
    window.removeEventListener()
    yearvalue.value = new Date(Date.parse(time)).getFullYear();
    monthvalue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayvalue.value = new Date(Date.parse(time)).getDate();
    btn[0].disabled = false;
    btn[1].disabled = false;
    btn[2].disabled = false;

});

btn[0].addEventListener(`click`, function () {
    let sum = 0;
    for (let i = 0; i < expensesitem.length; i++) {
        let a = expensesitem[i].value,
            b = expensesitem[++i].value;

        if (typeof (a) === 'string' && typeof (a) != null && typeof (b) != null && a != "" && b != "" && a.length < 50) {
            appData.expenses[a] = b;
            sum += +b;
            expensesvalue.textContent = sum;
        } else {
            i--;
        }

    }
});
btn[1].addEventListener(`click`, function () {
    let sum = 0;
    for (let i = 0; i < optionalexpensesitem.length; i++) {
        let a = optionalexpensesitem[i].value;

        if ((typeof (a)) === 'string' && (typeof (a)) != null && a != '' && a.length < 50) {
            appData.optionalExpenses[i] = a;
            sum += a;
            optionalexpensesvalue.textContent += appData.optionalExpenses[i] + ` `;
        } else {
            i--;
        }
    }
});

btn[2].addEventListener(`click`, function () {
    appData.moneyPerDay = (appData.budget - +expensesvalue.textContent / 30).toFixed();
    daybudgetvalue.textContent = appData.moneyPerDay;
    //return appData.moneyPerDay;
    if (appData.moneyPerDay < 100) {
        levelvalue.textContent = "Это минимальный уровень достатка!";
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        levelvalue.textContent = `Это средний уровень достатка!`;
    } else if (appData.moneyPerDay > 2000) {
        levelvalue.textContent = `Это высокий уровень достатка!`;
    } else {
        console.log("Произошла ошибка");
    }


});

chooseincome.addEventListener(`input`, function () {
        let items = chooseincome.value;
        appData.income = items.split(`, `);
        //appData.income.sort();
        incomevalue.textContent = appData.income;
    }

);
savings.addEventListener(`click`, function () {
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }

});
choosesum.addEventListener(`input`, function () {
    if (appData.savings == true) {
        appData.savemoney = +choosesum.value;
        appData.percent = +choosepercent.value;
        appData.monthIncome = appData.savemoney / 100 / 12 * appData.percent;
        appData.yearIncome = appData.savemoney / 100 * appData.percent;
        monthsavingsvalue.textContent = appData.monthIncome.toFixed(1);
        yearsavingsvalue.textContent = appData.yearIncome.toFixed(1);
    }
});
choosepercent.addEventListener(`input`, function () {
    if (appData.savings == true) {
        appData.savemoney = +choosesum.value;
        appData.percent = +choosepercent.value;
        appData.monthIncome = appData.savemoney / 100 / 12 * appData.percent;
        appData.yearIncome = appData.savemoney / 100 * appData.percent;
        monthsavingsvalue.textContent = appData.monthIncome.toFixed(1);
        yearsavingsvalue.textContent = appData.yearIncome.toFixed(1);
    }
});



const appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
    income: [],
	timeData: time,
    savings: false
};