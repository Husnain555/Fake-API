// so let spouse we have a child class and we want to acces parent class constructor in child class so we firest call
// construtor then call super to acces parent clonstructor value
// in simple words super means 1 step up here parents are one step aheed of us
// let have a example
class zaman {
    constructor(work,onlinejob) {
        this.work = work;
        this.onlinejob = onlinejob;
    }
    eating (){
        console.log('eating...');
    }
    sleep (){
        console.log('sleep...');
    }
}
// here we are going to have a child
class zamanJun extends zaman{
    constructor() {

        super('raja sahjib','trader');
    }
}
let enj = new zamanJun();
// here if we acces enj in consol we ger parents constructor properties
// in cnsol