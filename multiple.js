class a{
    constructor(a,b,c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }
}
class b{
    constructor(d,e,f) {
        this.d = d;
        this.e = e;
        this.f = f;
    }
}
class c extends a{
    constructor() {
        super('1','2','3');
    }
}
let obj = new c()
console.log(obj)
class e extends c {
    constructor(f,h,g) {
        super();
        this.f=f;
        this.g=g;
            this.h=h;
    }

    test(){
        console.log(this.f);
    }

}
let obj1 = new e(1,1,1,)
console.log(obj1.test())
