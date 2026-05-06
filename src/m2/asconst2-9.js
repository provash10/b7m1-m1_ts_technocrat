"use strict";
// as const assertion
// enum UesrRoles{
//     Admin = 'Admin',
//     Editor = 'Editor',
//     Viewer = 'Viewer',
// }
const UserRoles = {
    Admin: 'Admin',
    Editor: 'Editor',
    Viewer: 'Viewer',
};
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
}
*/
// UserRoles.Admin = 'Do it';
const canEdit = (role) => {
    if (role === UserRoles.Admin || role === UserRoles.Editor) {
        return true;
    }
    else
        return false;
};
const isEditPermissable = canEdit(UserRoles.Admin);
console.log(isEditPermissable);
