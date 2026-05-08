// // access modifiers

// class BankAccount {
//     public readonly userId :number;
//     public userName :string;
//     private userBalance :number;

//     constructor (userId:number, userName:string, userBalance:number) {
//         this.userId =userId;
//         this.userName =userName,
//         this.userBalance =userBalance
//     };
//     addBalance(balance:number) {

//         this.userBalance =this.userBalance +balance
//     }
// }

// const rehenaAccount = new BankAccount(111,'Rehena',44)
// rehenaAccount.addBalance(100);
// rehenaAccount.addBalance(500);
// console.log(rehenaAccount)

class Animal {
    protected name: string;

    constructor(name: string) {
        this.name = name;
    }
}

class Dog extends Animal {

    bark() {
        console.log(`${this.name} is barking 🐶`);
    }
}

const dog = new Dog("Tommy");

dog.bark(); 

class BankAccount {
    protected balance: number;

    constructor(balance: number) {
        this.balance = balance;
    }
}

class SavingAccount extends BankAccount {

    addInterest() {
        this.balance += this.balance * 0.1; // ✅ 10% interest
    }

    showBalance() {
        return this.balance;
    }
}

const acc = new SavingAccount(1000);

acc.addInterest();

console.log(acc.showBalance()); 