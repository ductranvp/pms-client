import Project from "@/views/project/layout/ProjectLayout";
import Home from "@/views/home/Home";
import Profile from "@/views/account/Profile";
import ProjectRoutes from "@/router/project-route";
import UserProject from "@/views/account/UserProject";
import ChangePassword from "@/views/account/ChangePassword";

const PrivateRoutes = [
    {
        path: '/',
        name: 'home',
        component: Home,
        meta: {
            title: "Home Page",
            authorities: ['ROLE_USER']
        },
    },
    {
        path: '/profile',
        name: 'profile',
        component: Profile,
        meta: {
            title: "Profile",
            authorities: ['ROLE_USER']
        },
    },
    {
        path: '/change-password',
        name: 'changePassword',
        component: ChangePassword,
        meta: {
            title: "Change Password",
            authorities: ['ROLE_USER']
        },
    },
    {
        path: '/user-project',
        name: 'userProject',
        component: UserProject,
        meta: {
            title: "User Project",
            authorities: ['ROLE_USER']
        },
    },
    {
        path: '/project/:id',
        name: 'project',
        component: Project,
        meta: {
            title: "Project",
            authorities: ['ROLE_USER']
        },
        redirect: {name: 'projectTask'},
        children: [
            ...ProjectRoutes
        ]
    }
];

export default PrivateRoutes;
