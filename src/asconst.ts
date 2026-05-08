const UserRoles = {
    Admin: 'Admin',
    Editor: 'Editor',
    Viewer: 'Viewer'
} as const;

// value type বের করছি
type UserRole = typeof UserRoles[keyof typeof UserRoles];

const canEdit = (role: UserRole) => {
    return role === UserRoles.Admin || role === UserRoles.Editor;
};

const isEditPermissable = canEdit(UserRoles.Admin);
console.log(isEditPermissable);