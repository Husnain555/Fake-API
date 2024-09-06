// // // // // // document.getElementById('input')
// // // // // // prompt('How are you?');
// // // // // // function abc(element1 = element) {
// // // // // //     document.getElementById('button').innerHTML = 'HELLO WORLD'
// // // // // //     element1.addEventListener('click', abc)
// // // // // // }
// // // // // //
// // // // // // //   data types
// // // // // // let a = ['husnain']
// // // // // // console.log(a,typeof a)
// // // // // // console.log(Array.isArray(a))
// // // // // // let b = {name : 'husnia',lastname: 'babar'}
// // // // // // console.log(b,typeof b)
// // // // // // let name = 'lock'
// // // // // // console.log(name,typeof name)
// // // // // // let c = 34
// // // // // // console.log(c,typeof c)
// // // // // // math objestcs
// // // // // // let a = 9
// // // // // let b = 10
// // // // // Math.round(b * 7)
// // // // // console.log(b)
// // // //
// // // //
// // // // const a = [
// // // //     {
// // // //         name: "John",
// // // //         city : 'lahore'
// // // //     }
// // // // ]
// // // //
// // // //
// // // // const b = [{
// // // //     name: "husnain",
// // // //     city : 'sahiwal'
// // // // }]
// // // // cons
// // // let arr = {
// // //     name: "John",
// // //     last : 'abrahim',
// // //         hometown: 'indian',
// // //     printFull :  function  (hometown) {
// // //         console.log(this.name + " " + this.last +' ' + hometown);
// // //     }
// // // }
// // //     arr.printFull();
// // // let  name = {
// // //     name: "husnain",
// // //     last : 'babar',
// // //
// // // }
// // // arr.printFull.call(name, 'LAHORE')
// // //
// // // let name1 = {
// // //     name : 'awais',
// // //     last : 'ismail'
// // // }
// // // arr.printFull.call(name1, 'sahiwal')
// // // let name2 ={
// // //     name : 'ZAMAN',
// // //     last : 'ISMAIL'
// // // }
// // // arr.printFull.call(name2,'islamabad')
// // //
// // //
// // // //bind method / its same as call method but only diffrence here its invoked later we need to get this method as variable and we invoked the veriable later with function call it self
// // //
// // //
// // //
// // // let print = arr.printFull.bind(name2)
// // // console.log(print)
// // // print('islamabafd');
// // // let name4 = {
// // //     name: 'xuxjxjjx',
// // //     last: 'jxhjsajxjx'
// // // }
// // //
// // // let print1 = arr.printFull.bind(name4)
// // // print1();
// // let name = {
// //     name: "John",
// //     lastName: "Doe",
// //     age : 23
// // }
// // let fun = function prac (hometown){
// //     console.log(this.name + ' ' + this.lastName + ' ' + this.age + ' ' + hometown);
// //
// // }
// // fun.apply(name, ['lahore'])
// // ...........error handling try/catch..................
// try {
//     console.log(ads);
//
// }
// catch (err) {
//     console.log(    err.message
//     )
//    console.log(err.name)
// }
// let a = 12
// let b = 12
// console.log(a+b)