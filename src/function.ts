// arrow function ,normal function

function addNormal (num1:number ,num2:number):number
 {
    return num1+num2
};
addNormal(2,4);

const addArrow =(a:number, b:number):number => a+b;
addArrow(3,5);

const poorUser = {
  balance: 0,

  addBalance(value: number): number {
    this.balance += value;
    return this.balance;
  }
};


poorUser.addBalance(10000);
const arr: number[] =[1,2,3,4,5,6];
const sqrArray =arr.map((elem:number) : number=>elem*elem)
console.log(sqrArray);