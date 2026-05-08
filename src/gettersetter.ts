class BankAccount {
    public readonly userId :number;
    public userName :string;
    private _userBalance :number;

    constructor (userId:number, userName:string, userBalance:number) {
        this.userId =userId;
        this.userName =userName,
        this._userBalance = userBalance
    };
    // addBalance(balance:number) {

    //     this._userBalance =this._userBalance +balance
    // };
    // getBalance() {
    //     return this._userBalance;
    // }
    
    set addBalance(amount: number) {
        this._userBalance =this._userBalance + amount
    }
    // getter use kore get korbo
    get getBalance () {
        return this._userBalance
    }}

const rehenaAccount = new BankAccount(111,'Rehena',44)
// rehenaAccount.addBalance(100);
// rehenaAccount.addBalance(500);
// console.log(rehenaAccount.getBalance());
// rehenaAccount.getBalance

rehenaAccount.addBalance =100;
console.log(rehenaAccount)