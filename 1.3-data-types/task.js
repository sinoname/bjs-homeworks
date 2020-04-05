'use strict';

function calculateTotalMortgage(percent, contribution, amount, date) {
    if (isNaN(percent)) {
        console.log(`Параметр percent содержит неправильное значение ${percent}`);
    } else {
        percent = parseInt(percent);   
    }
    if (isNaN(contribution)) {
        console.log(`Параметр contribution содержит неправильное значение ${contribution}`);
    } else {
        contribution = parseInt(contribution);
    }  
    if (isNaN(amount)) {
        console.log(`Параметр amount содержит неправильное значение ${amount}`);
    } else {
        amount = parseInt(amount);
    }   
    let S = amount - contribution;
    let n = Number((date.getFullYear() - new Date().getFullYear()) * 12 + (date.getMonth()) - (new Date().getMonth()));    
    let P = percent / 12 / 100; 
    let payment =  S * (P + P / (Math.pow((1 + P), n)- 1 ));
    let totalAmount = payment * n;
    console.log(+totalAmount.toFixed(2));
    return +totalAmount.toFixed(2);
}

function getGreeting(name) {
    let greeting = 'Привет, мир! Меня зовут';
    if (name === undefined || name === null || name === '') {
        console.log(`${greeting} Аноним`);
        return `${greeting} Аноним`;
    } else {
        console.log(greeting + name);
    }

    return `${greeting} ${name}`;
}