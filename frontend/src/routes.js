import Login from './components/Login';
import Register from './components/Register';
import UserHome from './components/UserList';

export const routes  = [
    {path: '/login', component: Login},
    {path: '/register', component: Register},
    {path: '/', component: UserHome}
];

