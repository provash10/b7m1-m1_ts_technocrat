//spread operator
const friends = ['Rahim', 'Karim'];

const schoolFriends = ['Pintu', 'Chintu','Mintu'];

const collegeFriends= ['David', 'Micheal', 'Jhon']


friends.push(...schoolFriends)
friends.push(...collegeFriends)

console.log(friends)


const user = {name: 'Mezba', phoneNo: '01710112233'};

const otherInfo = {hobby: 'outing', favouriteColor: 'Black'};

const userInfo={...user, ...otherInfo};

console.log(userInfo);


//rest operator

const sendInvite = (friend1: string, friend2: string, friend3: string)=>{

    console.log(`Sent Invitation to ${friend1}`);
    console.log(`Sent Invitation to ${friend2}`);
    console.log(`Sent Invitation to ${friend3}`);
}

sendInvite('pintu','chintu','bulbul')


//rest loop
const sendInviteDhaka = (...friends: string[])=>{
    friends.forEach((friend:string)=>
    console.log(`Send Invite Dhaka to ${friend}`))
}

sendInviteDhaka('hablu','bablu','kablu dablu')

