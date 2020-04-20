export default {
    state: {
        isAuth: false,
        token: '',
    },
    getters: {
        isAuth(state){
            return state.isAuth;
        },
        token(state){
            return state.token;
        }
    },
    mutation: {

    },
    actions: {

    }
}