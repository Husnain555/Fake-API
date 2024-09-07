// // // // // // // document.getElementById('input')
// // // // // // // prompt('How are you?');
// // // // // // // function abc(element1 = element) {
// // // // // // //     document.getElementById('button').innerHTML = 'HELLO WORLD'
// // // // // // //     element1.addEventListener('click', abc)
// // // // // // // }
// // // // // // //
// // // // // // // //   data types
// // // // // // // let a = ['husnain']
// // // // // // // console.log(a,typeof a)
// // // // // // // console.log(Array.isArray(a))
// // // // // // // let b = {name : 'husnia',lastname: 'babar'}
// // // // // // // console.log(b,typeof b)
// // // // // // // let name = 'lock'
// // // // // // // console.log(name,typeof name)
// // // // // // // let c = 34
// // // // // // // console.log(c,typeof c)
// // // // // // // math objestcs
// // // // // // // let a = 9
// // // // // // let b = 10
// // // // // // Math.round(b * 7)
// // // // // // console.log(b)
// // // // //
// // // // //
// // // // // const a = [
// // // // //     {
// // // // //         name: "John",
// // // // //         city : 'lahore'
// // // // //     }
// // // // // ]
// // // // //
// // // // //
// // // // // const b = [{
// // // // //     name: "husnain",
// // // // //     city : 'sahiwal'
// // // // // }]
// // // // // cons
// // // // let arr = {
// // // //     name: "John",
// // // //     last : 'abrahim',
// // // //         hometown: 'indian',
// // // //     printFull :  function  (hometown) {
// // // //         console.log(this.name + " " + this.last +' ' + hometown);
// // // //     }
// // // // }
// // // //     arr.printFull();
// // // // let  name = {
// // // //     name: "husnain",
// // // //     last : 'babar',
// // // //
// // // // }
// // // // arr.printFull.call(name, 'LAHORE')
// // // //
// // // // let name1 = {
// // // //     name : 'awais',
// // // //     last : 'ismail'
// // // // }
// // // // arr.printFull.call(name1, 'sahiwal')
// // // // let name2 ={
// // // //     name : 'ZAMAN',
// // // //     last : 'ISMAIL'
// // // // }
// // // // arr.printFull.call(name2,'islamabad')
// // // //
// // // //
// // // // //bind method / its same as call method but only diffrence here its invoked later we need to get this method as variable and we invoked the veriable later with function call it self
// // // //
// // // //
// // // //
// // // // let print = arr.printFull.bind(name2)
// // // // console.log(print)
// // // // print('islamabafd');
// // // // let name4 = {
// // // //     name: 'xuxjxjjx',
// // // //     last: 'jxhjsajxjx'
// // // // }
// // // //
// // // // let print1 = arr.printFull.bind(name4)
// // // // print1();
// // // let name = {
// // //     name: "John",
// // //     lastName: "Doe",
// // //     age : 23
// // // }
// // // let fun = function prac (hometown){
// // //     console.log(this.name + ' ' + this.lastName + ' ' + this.age + ' ' + hometown);
// // //
// // // }
// // // fun.apply(name, ['lahore'])
// // // ...........error handling try/catch..................
// // try {
// //     console.log(ads);
// //
// // }
// // catch (err) {
// //     console.log(    err.message
// //     )
// //    console.log(err.name)
// // }
// // let a = 12
// // let b = 12
// // console.log(a+b)
// // ................TEMPLATE LITERAL...........\
// let a = {
//     name: "John",
//     lastName: "Doe",
// }
// console.log(`my first name is ${a.name},my last name is ${a.lastName}`)
//
// spreed?
// let a = [1,2,3,4,5,6,7]
// let b = [...a,8,9,10]
// console.log(b)
// // rest??
// function lol (...argu){
//     let total = 0;
//     for (let i of argu){
//         total += i;
//     }
//     console.log(total);
//     console.log(...argu)
// }
//
//
// lol (1,2,3,4,5,6);
//
// function lol2 (...argu1){
//     let total1 = 0
//     for (let i of argu1){
//         total1 += i;
//         console.log(total1)
//     }
// }
//
//
// lol2(1,2,3,4,5,6,2,3,4,44,5,4,434,3,43,4,3,4,34,3,4,3,43);
// call method

let user = {
    username: 'husnain',
    userLastname: 'babar',
    desigination: 'learner',
    city: 'lahore',
}
const output = function details(background) {
    console.log(this.username + ' ' + this.userLastname + ' ' + this.desigination + ' ' + this.city + ' ' + background)
}
output.call(user);

let user1 = {
    username: 'awais',
    userLastname: 'ismail',
    desigination: 'software engineer',
    city: 'lahore',
}
output.call(user1, 'sahiwal')
// apply?



let user2 = {
    username: 'zaman',
    userLastname: 'ismail',
    desigination: 'data entry',
    city: 'lahore',
}
output.apply(user2,['sahiwal']);


let user4 = {
    username: 'ismail',
    userLastname: 'rehmat ali',
    desigination: 'driver',
    city: 'lahore',
}

output.apply(user4,['sahiwal']);

// bind?
// its same like  call method but we can store value  to invoked later
let user5 = {
    username: 'aliza',
    userLastname: 'husnain',
    desigination: 'studeny',
    city: 'lahore',

}
let input =  output.bind(user5);
input();

let user6    = {
    username: 'maida',
    userLastname: 'husnain',
    desigination: 'not studying',
    city: 'lahore',

}

let imput = output.bind(user6)
imput('sahiwal');
