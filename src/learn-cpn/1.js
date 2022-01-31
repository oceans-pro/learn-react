class Animal {
    constructor(name) {
        this.name = name;
    }
}

class Dog extends Animal {
    constructor(name, age) {
        super(name, age);
        this.age = age
    }
}



