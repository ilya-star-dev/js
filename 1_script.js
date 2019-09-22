"use strict";

let money = +prompt('Введите бюджет на месяц: ');
let time = +prompt('Введите дату в формате YYYY-MM-DD: ');

let appData = {
    money: money,
    timeData: time,
    expenses: {},
    optionalExpenses: '',
    income: [],
    savings: false
};

let expenses1 = prompt('Введите обязательную статью расходов в этом месяце: ');
let expenses2 = prompt('Во сколько обойдется? ');

appData.expenses = {expenses1, expenses2};
alert('Ваш бюджет на 1 день составляет:' + money/30);