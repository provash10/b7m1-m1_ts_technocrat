// node ./src/m3/access-modifiers3-5.ts
//3-5 Access Modifiers

class BankAccount{
    public readonly userId: number;
    public userName: string;
    // private userBalance: number;
     protected userBalance: number;

    constructor(userId: number, userName: string, userBalance: number){
        this.userId= userId;
        this.userName= userName;
        this.userBalance= userBalance;
    }

    addBalance(balance: number){
        this.userBalance = this.userBalance + balance
    }
}

//protection and private
class StudentBankAccount extends BankAccount{
    test(){
        this.userBalance
    }
}

const mezbaBhaiAccount = new BankAccount(111, "Mezba", 20);

// mezbaBhaiAccount.userBalance = 0;
mezbaBhaiAccount.addBalance(100);
mezbaBhaiAccount.addBalance(50);

console.log(mezbaBhaiAccount);