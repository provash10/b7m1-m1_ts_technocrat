// node ./src/m3/static3-7.ts
// static

// class Counter {
//     count: number = 0;

//     increment(){
//         return (this.count = this.count + 1)
//     }

//      decrement(){
//         return (this.count = this.count - 1)
//     }
// }

// const instance1 = new Counter();

// console.log(instance1.increment()); // 1
// console.log(instance1.increment()); // 1 >> 2
// console.log(instance1.increment()); // 2 >>> 3

// const instance2 = new Counter();
// console.log(instance2.increment());
// console.log(instance2.increment());


//with static hole Counter use korte hobe

// class Counter {
//     static count: number = 0;

//     increment(){
//         return (Counter.count = Counter.count + 1)
//     }

//      decrement(){
//         return (Counter.count = Counter.count - 1)
//     }
// }

// const instance1 = new Counter();

// console.log(instance1.increment()); // 1
// console.log(instance1.increment()); // 1 >> 2
// console.log(instance1.increment()); // 2 >>> 3

// const instance2 = new Counter();
// console.log(instance2.increment());
// console.log(instance2.increment());

// //result --- 1,2,3,4,5 ok

// const instance3 = new Counter();
// console.log(instance3.increment());

// //result --- 1,2,3,4,5,6 ok


//================================
class Counter {
    static count: number = 0;

    static increment(){
        return (Counter.count = Counter.count + 1)
    }

     static decrement(){
        return (Counter.count = Counter.count - 1)
    }
}

console.log(Counter.increment())

//no need

// const instance1 = new Counter();

// console.log(instance1.increment()); // 1
// console.log(instance1.increment()); // 1 >> 2
// console.log(instance1.increment()); // 2 >>> 3

// const instance2 = new Counter();
// console.log(instance2.increment());
// console.log(instance2.increment());

// //result --- 1,2,3,4,5 ok

// const instance3 = new Counter();
// console.log(instance3.increment());

// //result --- 1,2,3,4,5,6 ok