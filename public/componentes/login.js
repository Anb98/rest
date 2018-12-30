const login={
    data(){
        return{
            user:null,
            pass:null
        }
    },
    mounted(){
        document.getElementById('usuario').focus();
    },
    methods:{
        sign(){
            store.dispatch('signIn',this);
        }
    },
    template:`
    <div>
        <h1>Login</h1>
        <form id="login" @submit.prevent='sign'>
            <label for="usuario">Username</label>
            <input type="text" name="usuario" id="usuario" v-model='user'>
            <label for="pass">Password</label>
            <input type="password" name="pass" id="pass" v-model='pass'>
            <input type="submit" name="submit" value="Iniciar">
        </form>
        <router-link to='/registro'>Registrate</router-link>
    </div>
    `
}