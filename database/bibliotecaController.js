var database= require("../database/mariadb");
const controller={};

controller.getListarAutor=(req,res)=>{ 
    var conn=database.getConexion();
    if(conn){
        var sql="SELECT * FROM autor";
        conn.query(sql, function(err,data){
            if(err){
                throw err;
            }else{
                
                res.render('home',{
                    data: data
                });
                
               //console.log(data);
            }
        });
        conn.end();
    }
}

controller.eliminarAutor=(req,res)=>{

}
controller.modificarAutor=(req,res)=>{
}


module.exports= controller;