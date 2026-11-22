export class User { 
    constructor(name, age) {
        this.name = name ;
        this.age = age ;
    }

    greet () { 
        return `Привет! Меня зовут ${this.name}, мне ${this.age} лет.`;
    }
    haveBirthday() { 
        this.age += 1;
        console.log(`У ${this.name} день рождения! Теперь ему ${this.age}.`);
    }
}