const notFound = {
    template:`
    <div>
    <h1>Pagina no encontrada</h1>
    <a href="#" @click.prevent='goBack'>Regresar</a>
    </div>
    `,
    methods:{
        goBack(){
            router.go(-1);
        }
    }
}