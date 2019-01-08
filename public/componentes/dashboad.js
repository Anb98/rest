const dashboard = {
    template:`
    <div>
        <h1>Dashboard</h1>
        <ul>
            <li>{{perfil.nombre}}</li>
            <li>{{perfil.email}}</li>
        </ul>
        <table>
                <tr v-for='(prod,index) in productos' :key='index'>
                    <td>{{prod.nombre}}</td>
                    <td>{{prod.precio}}</td>
                    <td>{{prod.descripcion}}</td>
                </tr>
        </table>
        <a href='#' @click.prevent='logOut'>Cerrar sesion</a>
    </div>
    `,
    mounted(){
        store.dispatch('requestProductos');
    },
    methods:{
        logOut(){
            console.log('x');
            store.dispatch('signOut');
        }
    },
    computed:{
        perfil(){
            return store.getters.getProfile;
        },
        productos(){
            return store.getters.getProductos;
        }
    }
}