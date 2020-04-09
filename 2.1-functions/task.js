'use strict';


function getSolutions(a, b, c) {
    let roots = [];
    let D = Math.pow(b, 2) - 4 * (a * c);
    if (D < 0) {
        return {D: D, roots: []};
    } else if (D === 0) {
        roots.push(-b / (2 * a));
        return {D: D, roots: roots};
    }else {
        roots.push((-b + Math.sqrt(D)) / (2 * a));
        roots.push((-b - Math.sqrt(D)) / (2 * a));
        return {D: D, roots: roots};
    }
}

function showSolutionsMessage (a, b, c) {
    let result = getSolutions(a, b, c);
    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
    console.log(`Значение дискриминанта: ${result.D}`);
    if (result.D < 0) {
        console.log(`Уравнение не имеет вещественных корней`);
        return `Уравнение не имеет вещественных корней`;
    } else if (result.D === 0) {
        console.log(`Уравнение имеет один корень X₁`);
        return `Уравнение имеет один корень X₁ = ${result.roots}`;
    } else {
        console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`);
        return `Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`;
    }
}
showSolutionsMessage(2, 4, -3);

function getAverageScore(data) {
    let value = 0;
    let obj = {};
    let dataLength = 0;
    for (let prop in data) {
      obj[ prop ] = getAverageMark(data[prop]);
      dataLength++   
    }
    for (let prop in obj) {
      value += obj[ prop ];  
    }  
    dataLength === 0 ? obj['average'] = 0 : obj['average'] = value / dataLength;
    return obj
  }
  
  function getAverageMark(marks) {
    let sum = 0;  
    for (let i = 0; i < marks.length; i++) {
      sum += marks[i];
    }  
    return marks.length !== 0 ? sum / marks.length : 0;;
  }
  console.log(getAverageScore({
      algebra: [4, 5, 5, 4],
      music: [5, 4],
      english: [3, 4, 5, 4]
    }));
  


function getPersonData(secretData) {
      let obj = {
          firstName: getDecodedValue(secretData.aaa),
          lastName: getDecodedValue(secretData.bbb)
          };
          return obj;                                          
}

function getDecodedValue(secret) {
      if (secret === 0) {
          secret = 'Родриго';
      } else {
          secret = 'Эмильо';
      }
      return secret;    
}    
console.log(getPersonData({
    aaa: 1,
    bbb: 1
}));