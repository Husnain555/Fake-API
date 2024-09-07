// showing a university student data and this data can acces by all students
let data = 'its a secrate'
class user {
    constructor(name,email,studentId) {

    }
    secrate (){
        console.log('data is ',data)

    }
}
class student1 extends user{
    constructor() {
        super('husnain','test','123');
    }
}
let new123 = new student1();
console.log(new123)

let student2 = new user('awais','talk2mughals@gmail.com',456);
let teacher1 = new user('zaman','koiptanai@gmail.com',789);
