var mysql= require("mysql");


function getConexion(){
    var conn= mysql.createConnection({
        host: "localhost",
        database: "biblioteca",
        user: "cunori",
        password: "12345678"
    });
    
    conn.connect( function(err){
        if(err){
            throw err;
        }else{
            console.log('Conexion exitosa!!');
        }
    });
    //conn.end();
    return(conn);
}

//getConexion();
//conexion.end();
//console.log(getConexion());
exports.getConexion= getConexion;