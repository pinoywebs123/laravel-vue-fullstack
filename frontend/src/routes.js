import Login from './components/Login';
import Register from './components/Register';
import UserHome from './components/UserList';
import Books from './components/Books';
export const routes  = [
    {path: '/login', component: Login},
    {path: '/register', component: Register},
    {path: '/', component: UserHome, beforeEnter: guard},
    {path: '/books', component: Books, beforeEnter: guard},
];

function guard(to, from, next){
    let userData = JSON.parse(localStorage.getItem("token"));
        if(userData == null || userData == ""){
            next('/login');
        }else{
            next();
           
        }
}

