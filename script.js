//'use strict';

class First {
    constructor(name) {
        this.name = name;
    }

    hello() {
    name = 'Привет, я метод родителя!';
    console.log(`${this.name}`);
    }
    
};

class Second extends First {

}

const invoice = new Second('А я наследуемый метод');

invoice.hello();





// function Second(name, option) {
// First.apply(this, arguments);
// hello () {
// console.log('А я наследуемый метод' + this.name);
// };
// }

// Second.prototype = Object.create(First.prototype);
// Second.prototype.constructor = Second;

// let result = new Second (' first');
// result.hello();
