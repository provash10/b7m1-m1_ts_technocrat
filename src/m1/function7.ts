//function
//arrow function, normal function
function addNormal(num1:number,num2:number): number{
    return num1 + num2;
}

const addArrow = (num1: number, num2:number) : number => num1 + num2;
// add(2, "2");  //wrong
// add(2, 2);

addArrow(2,2)

//object => function=> method

const poorUser = {
    name: "Koli",
    balance: 0,
    addBalance(value: number):number{
     const totalBalance = this.balance + value;
     return totalBalance;   
    }
}

poorUser.addBalance(1000)

const arr: number[] = [1,4,6]
const sqrArray = arr.map((element: number) :number=>element*element)