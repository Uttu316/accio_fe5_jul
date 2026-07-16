class A {
  constructor() {
    //instance function
    this.sayHey = function () {};
  }

  //prototype function
  sayBye() {}

  static sayHello() {}
}
const a = new A();
const b = new A();

console.log(a.sayHey === b.sayHey);
console.log(a.sayBye === b.sayBye);

A.sayHello();
