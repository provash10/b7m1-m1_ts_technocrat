// let anything: any;

// anything = 'Mezba';


const kgToGmConverter = (input: string | number) :
string | number | undefined =>
    {
    if(typeof input === "number"){
        return input * 1000;
    }
    else if(typeof input === 'string'){
        const [value] = input.split(' ')
        return `Converted output is: ${Number(input) * 1000}`;
    }
}


const result1=kgToGmConverter(2) as number;
console.log({result1});
const result2=kgToGmConverter('2 Kg') as string;
console.log({result2});

