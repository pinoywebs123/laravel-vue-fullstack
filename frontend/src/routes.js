import Login from './components/Login';
import Register from './components/Register';
import UserHome from './components/UserList';
import Books from './components/Books';
export const routes  = [
    {path: '/login', component: Login},
    {path: '/register', component: Register},
    {path: '/', component: UserHome, beforeEnter: (to, from, next) => {
        let userData = false;
        if(userData){
            next();
        }else{
            next('/login');
        }
    }},
    {path: '/books', component: Books, beforeEnter: (to, from, next) => {
        let userData = false;
        if(userData){
            next();
        }else{
            next('/login');
        }
    }},
];

