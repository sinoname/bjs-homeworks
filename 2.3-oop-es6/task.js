'use strict';

class Weapon {
    constructor (weapon) {
		this.name = weapon.name;
		this.attack = weapon.attack; 
		this.durability = weapon.durability;
		this.range = weapon.range; 
		this.durabilityOriginal = this.durability;
    }
    
    takeDamage(damage) {
		this.durability -= damage;
        if (this.durability < 0) {
            this.durability = 0;
        }
    }
    
    getDamage() {
        if (this.durability === 0) {
            return 0;
        }
        if (this.durability < this.durabilityOriginal * 0.3) {
            return this.attack / 2;
        } 
      
        return this.attack;
    }

    isBroken() {
        if (this.durability > 0) {
          return false;
        } else {
          return true;
        }
      }
}

class Arm extends Weapon {
    constructor () {
      super({
          name: 'Рука',
          attack: 1,
          durability: Infinity,
          range: 1,
      });
    }
}

class Bow extends Weapon {
    constructor () {
      super({
          name:'Лук',
          attack: 10,
          durability: 200,
          range: 3,
          });
    }
} 

class Sword extends Weapon {
    constructor () {
     super({
        name: 'Меч',
        attack: 25,
        durability: 500,
        range: 1,
        });
    }
}

class Knife extends Weapon {
    constructor () {
      super({
         name: 'Нож',
         attack: 5,
         durability: 300,
         range: 1, 
        });
    }
}

class Staff extends Weapon {
    constructor () {
      super({
          name: 'Посох',
          attack: 8,
          durability: 300,
          range: 2,
      });	    
    }
  }
  
  class LongBow extends Bow {
    constructor () {
      super();
      this.name = 'Длинный лук';
      this.attack = 15;
      this.range = 4;
    }
  };
  
  class Axe extends Sword {
    constructor () {
      super();
      this.name = 'Секира';
      this.attack = 27;
      this.durability = 800;
    }
  };
  
  class StormStaff extends Staff {
    constructor () {
      super();
      this.name = 'Посох Бури';
      this.attack = 10;
      this.range = 3;
    }
  };

const bow = new Bow();

console.log(bow.name); // Лук
console.log(bow.attack); // 10
console.log(bow.durability); // 200
console.log(bow.range); // 3


class StudentLog {
    constructor(name) {
      this.name = name;
      this.grades = {};
    }
  
    getName() {
      return this.name;
    }
  
    addGrade(grade, subject) {
      if (typeof grade !== 'number' ||  grade === 0 || grade > 5) {
        console.log(`Вы пытались поставить оценку "${grade}" по предмету "${subject}". Допускаются только числа от 1 до 5.`);
      }
      if (!this.grades.hasOwnProperty([subject])) {
      this.grades[subject] = [];
    } 
   
    this.grades[subject].push(grade);
    
    return this.grades[subject].length;
    }
  
    getAverageBySubject(subject) {
      let averageBySubject = 0;
      if (!this.grades.hasOwnProperty([subject])) {
        return 0;
      }
      for (let i = 0; i < this.grades[subject].length; i++) {
        averageBySubject += this.grades[subject][i];
      }
      return averageBySubject / this.grades[subject].length;
    }
  
    getTotalAverage() {
      let totalAverage = 0;
      for (let subject in this.grades) {
        totalAverage += this.getAverageBySubject([subject]);
      }
      return totalAverage / Object.keys(this.grades).length;
    }
    
  }
  
  const log = new StudentLog('Олег Никифоров');
  console.log(log.getName());
  
  log.addGrade(2, 'algebra');
  log.addGrade(4, 'algebra');
  log.addGrade(5, 'geometry');
  log.addGrade(4, 'geometry');
  
  console.log(log.getAverageBySubject('geometry')); // 4.5
  console.log(log.getAverageBySubject('algebra')); // 3
  console.log(log.getAverageBySubject('math')); // 0
  
  console.log(log.getTotalAverage()); // 3,75