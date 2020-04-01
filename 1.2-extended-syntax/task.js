'use strict'

function getResult(a,b,c) {
    let d = Math.pow(b, 2) - 4 * (a * c);
    let arr = []; 
    if (d === 0) {
        arr.push((-b + Math.sqrt(d)) / (2 * a));
    } else if (d > 0) {
        arr.push((-b + Math.sqrt(d)) / (2 * a));
        arr.push((-b - Math.sqrt(d)) / (2 * a));
    } else {
        return arr;
    }
      return arr;
}


function getAverageMark(marks){
    let sum = 0;
    let averageMark = 0;
    if (marks.length === 0) {
      averageMark = 0;     
    } else if (marks.length <= 5) {
        for (let i = 0; i < marks.length; i++) {
        sum += marks[i];
        averageMark = sum / marks.length;          
      } 
    } else {
        console.log('оценок больше 5');
        marks.splice(5);
        for (let i = 0; i < marks.length; i++) {
        sum += marks[i];
        averageMark = sum / marks.length;        
      }
  }   
    return averageMark;
}

function askDrink(name, dateOfBirthday) {
    let nowDate = new Date();
    let age = nowDate.getFullYear() - dateOfBirthday.getFullYear();
    let result;
    if (age >= 18) {
      result = `Не желаете ли олд-фэшн, ${name}?`;
    } else {
      result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
    }
    return result;
}