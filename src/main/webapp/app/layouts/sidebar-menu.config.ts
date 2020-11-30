export const sidebarMenu = [
    { label: 'MAIN NAVIGATION', separator: true },
    { label: 'Dashboard', route: '/dashboard', iconClasses: 'fas fa-tachometer-alt' },
    { label: 'Widgets', route: '/widgets', iconClasses: 'fas fa-th' },
    {
        label: 'UI Elements', iconClasses: 'fas fa-tree', children: [
            { label: 'General', route: '/ui-elements/general' },
            { label: 'Incons', route: '/ui-elements/icons' },
            { label: 'Buttons', iconClasses: 'fas fa-tree', children: [
                { label: 'General', route: '/ui-elements/general' },
                { label: 'Incons', route: '/ui-elements/icons' },
                { label: 'Buttons', route: '/ui-elements/buttons' }
            ]}
        ]
    },
    { label: 'DEMO', separator: true },
    { label: 'User Management', route: 'user', iconClasses: 'fas fa-user' }
];
