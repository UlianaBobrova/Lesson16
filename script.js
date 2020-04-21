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





