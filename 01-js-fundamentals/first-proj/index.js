import { User } from './User.js'; 
console.log(" -- Зауск приложения --")

const user1 = new User("Санёк" , 25)
const user2 = new User("Мария" , 28)

console.log(user1.greet())
console.log(user2.greet())

user1.haveBirthday();

console.log('--- Конец программы ---');