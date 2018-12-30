const registro = {
    template:`
    <div>
    <h1>Registro</h1>
    <form id="registro" @submit.prevent='registrar'>
        <label for="usuario">Nombre</label>
        <input type="text" name="usuario" id="usuario" v-model='user'>
        <label for="email">Email</label>
        <input type="text" name="email" id="email" v-model='email'>
        <label for="pass">Password</label>
        <input type="password" name="pass" id="pass" v-model='pass'>
        <input type="submit" name="submit" value="Registrarse">
    </form>
    <router-link to='/'>Iniciar sesion</router-link>
    </div>`,
    mounted(){
        document.getElementById('usuario').focus();
    },
    data(){
        return {
            user:'',
            email:'',
            pass:'',
        }
    },
    methods:{
        registrar(){
            axios.post('/user/registrar',{
                nombre:this.user,
                email:this.email,
                password:this.pass
            })
            .then(res=>console.log(res))
            .catch(err=>console.log(err));
            
        },
    }
};