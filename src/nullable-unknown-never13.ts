//node ./src/nullable-unknown-never13.ts

//nullable types

const getUser = (input: string | null)=>{
    if(input){
        console.log(`From DB: ${input}`)
    }else{
         console.log(`From DB: All User`)
    }
}

// getUser("Mezba");
getUser(null);

//unknown
// const discountCalculator = (input:string | number | null)=>{

// }

// discountCalculator(100)
// discountCalculator('100 Tk')
// discountCalculator(null)

const discountCalculator = (input:unknown)=>{
    if(typeof input==='number'){
        const discountPrice= input *0.1;
        console.log(discountPrice)
    }
    // else if(typeof input === 'string'){
    //     const splittedInput = input.split(" ");
    //     console.log(splittedInput)
    // }
    else if(typeof input === 'string'){
        const [discountPrice] = input.split(" ");
        console.log(Number(discountPrice) *0.1)
    }
    else{
        console.log('wrong input')
    }
}

discountCalculator(100)
discountCalculator('100 Tk')
discountCalculator(null)


//void
const throwError = (msg: string):never=>{
    throw new Error(msg)
}
throwError('Error...')