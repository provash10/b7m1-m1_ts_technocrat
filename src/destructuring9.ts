//Destructuring ---a. object destructuring  b. array destructurng


const user = {
    id: 123,
    name:{
        firstName: 'Atish',
        middleName: 'Chandra',
        lastName: 'Barman'
    },
    gender: 'male',
    favouriteColor: 'Black'
};

//simple way
// const myFavouriteColor = user.favouriteColor
// const myMiddleName = user.name.middleName

//distructuring way
// const {favouriteColor}= user;
// const {favouriteColor:myFavouriteColor }= user;
// console.log(favouriteColor)
// console.log(myFavouriteColor)

const {favouriteColor,
    name:{middleName:myMiddleName} }= user;
console.log(myMiddleName);


//array
// const friends = ['Mina','Tina', 'Lina']
// const anaBestFriend = friends[1]
// console.log(anaBestFriend)


const friends = ['Mina','Tina', 'Lina']
// const [A, anaBestFriend, C] = friends
const [, anaBestFriend] = friends
console.log(anaBestFriend)