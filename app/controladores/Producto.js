const ModeloProducto = require('./../modelos/Producto');

module.exports = {
    getProductos(req, res) {
        ModeloProducto.find({})
            .then(registros => {
                if (!registros) return res.status(404).send('No existen productos');

                res.status(200).send({
                    registros
                });
            })
            .catch(error => res.status(500).send(`Error: ${error}`));
    },

    getProducto(req, res) {
        const id = req.params.id;

        ModeloProducto.findById(id)
            .then(registro => {
                if (!registro) return res.status(404).send("Producto no encontrado");

                res.status(200).send({
                    registro
                });
            })
            .catch(error => res.status(500).send(`Error al buscar registro: ${error}`));
    },

    insertProducto(req, res) {
        let producto = new ModeloProducto();
        producto.nombre = req.body.nombre;
        producto.precio = req.body.precio;
        producto.img = req.body.img;
        producto.categorias = req.body.categorias;
        producto.descripcion = req.body.descripcion;

        producto.save()
            .then(registro => res.status(200).send(registro))
            .catch(error => res.status(500).send(`Error al guardar producto: ${error}`));

    },

    updateProducto(req, res) {
        const id = req.params.id;
        let datos = req.body;
        datos.actualizado = Date.now();

        ModeloProducto.findByIdAndUpdate(id, datos)
            .then(status => {
                if (!status) return res.status(404).send('Producto no encontrado');

                res.status(200).send(`Producto actualizado exitosamente`);
            })
            .catch(error => res.status(500).send(`Error al actualizar el producto: ${error}`));
    },

    deleteProducto(req, res) {
        const id = req.params.id;

        ModeloProducto.findByIdAndDelete(id)
            .then(status => {
                if (!status) return res.status(404).send('Producto no encontrado');

                res.status(200).send('Producto eliminado exitosamente');
            })
            .catch(error => res.status(500).send(`Error al eliminar el producto: ${error}`));
    }
};