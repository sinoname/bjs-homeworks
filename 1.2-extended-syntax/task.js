'use strict'

function getResult(a,b,c) {
    let d = Math.pow(b, 2) - 4 * (a * c);
    let arr = []; 
    if (d === 0) {
        arr.push((-b + Math.sqrt(d)) / (2 * a));
    } else if (d > 0) {
        arr.push((-b + Math.sqrt(d)) / (2 * a));
        arr.push((-b - Math.sqrt(d)) / (2 * a));
    } 
      return arr;
}

function getAverageMark(marks) {
        let sum = 0;
        let averageMark = 0;
        if (marks.length > 0) {
            marks.splice(5);
            for (let i = 0; i < marks.length; i++) {
                sum += marks[i];
            }
            averageMark = sum / marks.length;
        }
        return averageMark;
    }
   
function askDrink(name, dateOfBirthday) {
    let age = new Date().getFullYear() - dateOfBirthday.getFullYear();
    if (age >= 18) {
      return `Не желаете ли олд-фэшн, ${name}?`;
    } else {
      return `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
    }
}