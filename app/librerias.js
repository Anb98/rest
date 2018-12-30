const express = require('express');
const app = express();

app.use('/js',express.static('/node_modules/vue/dist/vue.js'));
app.use('/js',express.static('/node_modules/vuex/dist/vuex.js'));

module.exporst= app;