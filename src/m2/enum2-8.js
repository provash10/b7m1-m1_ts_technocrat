"use strict";
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
var UesrRoles;
(function (UesrRoles) {
    UesrRoles["Admin"] = "Admin";
    UesrRoles["Editor"] = "Editor";
    UesrRoles["Viewer"] = "Viewer";
})(UesrRoles || (UesrRoles = {}));
const canEdit = (role) => {
    if (role === UesrRoles.Admin || role === UesrRoles.Editor) {
        return true;
    }
    else
        return false;
};
const isEditPermissable = canEdit(UesrRoles.Admin);
console.log(isEditPermissable);
