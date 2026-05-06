//enum
//set of fixed string leteral ek jaigai rakhe

// type UserRoles = 'Admin' | 'Editor' | 'Viewer';


// const canEdit = (role: UserRoles) =>{
//     if(role==='Admin' || role === 'Editor'){
//         return true;
//     }
//     else return false;
// }

// const isEditPermissable = canEdit('Admin')
// console.log(isEditPermissable)

//2nd option enum

// type UserRoles = 'Admin' | 'Editor' | 'Viewer';

enum UesrRoles{
    Admin = 'Admin',
    Editor = 'Editor',
    Viewer = 'Viewer',
}

const canEdit = (role: UesrRoles) =>{
    if(role===UesrRoles.Admin || role === UesrRoles.Editor){
        return true;
    }
    else return false;
}

const isEditPermissable = canEdit(UesrRoles.Admin)
console.log(isEditPermissable)