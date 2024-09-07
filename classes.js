class company{
    constructor(Desigination,Tenor){
        this.Desigination = Desigination;
        this.tenor = Tenor;
        console.log('welcome companion');
    }
    employeName(){
        console.log('husnain');
    }
    employeid (){
        console.log('123')
    }

}
let company2 = new company('Manager','10 years');
company2.employeName();
company2.employeid();
let company3 = new company('Accountent', );
company3.employeName();
company3.employeid();
company3.employeid();

// Inheritance?
// now we have new company and we want to use old companay properties so we inheritit we can also do this from copy paste
// like we do in function but classes give us in herit option

class NewCompany extends company{
constructor() {

    super();
}
}
let newCompany = new company('sweeper', '1st year')
newCompany.employeName();
newCompany.employeid();

// we use super here so super keyword do if we need to acces constructor in child class
// so fir we call construtor in child class and first prop was going to pass here is super()
