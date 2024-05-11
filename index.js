const express= require("express");
const biblioteca= require("./database/bibliotecaController");
const app= express();


//Configurando motor de vistas
app.set("view engine","ejs");
app.set('views',__dirname + '/views');
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//Configurando rutas de paginas estaticas
app.use(express.static(__dirname + '/public'));


//Configurando rutas segun peticion url
app.get('/',biblioteca.getListarAutor);
app.get('/contacto',function(req,res){
    res.render("contacto");
 });
 app.post('/guardar',function(req,res){
    //res.render("contacto");
    const datos= req.body;
    console.log(datos.nombre);
    console.log(datos.apellido);
    res.render("contacto");
 });


//declaracion de rutas
 app.get('/galeria',(req,res)=>{
    res.render("galeria");
 });
 app.get('/nosotros',(req,res)=>{
   res.render("nosotros");
});
app.post('/eliminar',biblioteca.eliminarAutor);
app.post('/modificar',biblioteca.modificarAutor);

 //Levantando el servidor HTTP
app.listen(3005,()=> {
    console.log("Servidor corriendo en puerto",3005);
});