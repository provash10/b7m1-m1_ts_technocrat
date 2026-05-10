// node ./src/m3/access-modifiers3-5.ts
//3-5 Access Modifiers


// node ./src/m3/encapsulation3-10.ts

class BankAccount{
    public readonly userId: number;
    public userName: string;
    private userBalance: number;   // encapsulation  -private
    //  protected userBalance: number;

    constructor(userId: number, userName: string, userBalance: number){
        this.userId= userId;
        this.userName= userName;
        this.userBalance= userBalance;
    }

    private addBalance(balance: number){
        this.userBalance = this.userBalance + balance
    }

    callHiddenMethod(balance:number){
        this.addBalance(balance)
    }
}

//protection and private
class StudentBankAccount extends BankAccount{
    test(){
        this.userBalance
    }
}

const mezbaBhaiAccount = new BankAccount(111, "Mezba", 20);
