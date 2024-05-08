const express= require("express");
const biblioteca= require("./database/bibliotecaController")
const app= express();


//Configurando motor de vistas
app.set("view engine","ejs");
app.set('views',__dirname + '/views');

//Configurando rutas de paginas estaticas
app.use(express.static(__dirname + '/public'));

//Configurando rutas segun peticion url
app.get('/',(req,res)=>{
    res.render("home");
 });

 //Levantando el servidor HTTP
app.listen(3005,()=> {
    console.log("Servidor corriendo en puerto",3005);
});