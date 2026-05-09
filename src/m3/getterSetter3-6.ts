// node ./src/m3/getterSetter3-6.ts
//3-6 Getter and Setter

class BankAccount{
    public readonly userId: number;
    public userName: string;
    private _userBalance: number;

    constructor(userId: number, userName: string, userBalance: number){
        this.userId= userId;
        this.userName= userName;
        this._userBalance= userBalance;
    }

    //set balance
    // addBalance(balance: number){
    //     this._userBalance = this._userBalance + balance
    // }

    //setter use 
    set addBalance(amount: number){
        this._userBalance = this._userBalance + amount
    }

    //get balance
    // getBalance(){
    //     return this._userBalance
    // }

    //getter
    get getBalance(){
        this._userBalance
    }
}



const mezbaBhaiAccount = new BankAccount(111, "Mezba", 20);

// mezbaBhaiAccount.userBalance = 0;
// mezbaBhaiAccount.addBalance(100);
// mezbaBhaiAccount.addBalance(50);

// console.log(mezbaBhaiAccount);

// console.log(mezbaBhaiAccount.getBalance())
// mezbaBhaiAccount.getBalance

mezbaBhaiAccount.addBalance = 100;
console.log(mezbaBhaiAccount.getBalance)
console.log(mezbaBhaiAccount)