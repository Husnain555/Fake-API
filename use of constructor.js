class employe {
    employeName(){
        console.log('Husnain')
    }
    employeAge(){
        console.log('27 Years')
    }
    employeWork (){
        console.log('Learner')
    }
}
// so in first we did not use constructor now we need to acces more values later what we do we just add them in a constructor
// if we did'nt use constructor js atomatically add constructor behind the scene and if we add js delete its define constructor
// and use our
class employe1 {
    constructor(desination,tenor) {
        this.desination = desination;
        this.tenor = tenor;
    }
    employeName(){
        console.log('Husnain')
    }
    employeAge(){
        console.log('27 Years')
    }
    employeWork (){
        console.log('Learner')
    }
}
let newemploye =new employe1('MANGER','10 years');
console.log(newemploye);