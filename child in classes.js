// so basically we used child to pass parents to child data like our parents has values which we gain
// like if we have a class name person and person child was a enginer so the enineer has also the properties like patrents (person
// )

// let have a example
class ismail {
    sleep (){
        console.log("sleeping...");
    }
        eat(){
        console.log("eat...");
        }

}
// here comes the child ?
class husnain extends ismail{
    work (){
        console.log('learner')
    }
    eat() {
        super.eat();
    }
    sleep() {
        super.sleep();
    }
}

