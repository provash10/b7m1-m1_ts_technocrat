// as const assertion

// enum UesrRoles{
//     Admin = 'Admin',
//     Editor = 'Editor',
//     Viewer = 'Viewer',
// }

// const UserRoles = {
//     Admin : 'Admin',
//     Editor : 'Editor',
//     Viewer :'Viewer',
// } as const;

const UserRoles = {
    Admin : 'ADMIN',
    Editor : 'EDITOR',
    Viewer :'VIEWER',
} as const;



// as const - readonly

/*
{
    readonly Admin : 'Admin',
    readonly Editor : 'Editor',
    readonly Viewer :'Viewer',

    //1. typeof operator
    //2. keyof operator

    const user ={
    id: 222,
    name: 'Mezba'
    }

    user['id'] >>> 222

    typeof user;

   {
    id: number;
    name: string;
    }

    typeof UserRoles{
      Admin : 'Admin',
      Editor : 'Editor',
      Viewer :'Viewer',
    }

    keyof typeof UserRoles
    'Admin' | 'Editor' | 'Viewer'
    'ADMIN' | 'EDITOR' | 'VIEWER'

    UserRoles ['Admin'] >>> 'ADMIN'
    typeof UserRoles[keyof typeof UserRoles]
}
*/

// UserRoles.Admin = 'Do it';

const canEdit = (role:(typeof UserRoles) [keyof typeof UserRoles]) =>{
    if(role===UserRoles.Admin || role === UserRoles.Editor){
        return true;
    }
    else return false;
}

const isEditPermissable = canEdit(UserRoles.Admin)
console.log(isEditPermissable)