// mapped types


//map


const arrayOfNum: number[] = [1,4,6];
const arrayOfString : string[] = ['1', '2', '6'];

const arrayOfStringUsingMap: string[] = arrayOfNum.map((num)=>num.toString());

console.log(arrayOfStringUsingMap);


//map type
const user ={
    id: 222
}
type AreaOfNum = {
    height: number;
    width: number;
};

type height = AreaOfNum['height']

// type AreaOfString={
//     height: string;
//     width: string;
// }; 

//or

type AreaOfString = {
    [key in 'height' | 'width'] : string;
};

// type AreaOfBool = {
//     [key in 'height' | 'width'] : boolean;
// };

// type AreaOfBool = {
//     [key in keyof AreaOfNum] : boolean;
// };

type Area<T> = {
    [key in keyof T] : T[key];
};

// T = {height: string; width: string}

const area1: Area<{height: string; width: boolean}>
={height: '50', width: true}


