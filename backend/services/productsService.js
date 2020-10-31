const { connection } = require('../db/dbconnector')

function searchLatestPublications(items){
    const query = `SELECT ID, NOMBRE, DESCRIPCION, FOTO, FACEBOOK, INSTAGRAM, TWITTER, DIRECCION, CELULAR, CATEGORIA, TIPO_CLASIFICADO, MUNICIPIO, USUARIO, FECHA_CREACION FROM clasificados ORDER BY FECHA_CREACION DESC LIMIT ?`;

    return new Promise(function(resolve, reject){
        connection.query(query, params, function(error, resultado, campos){
            if(error){
                reject(error);
            }else{
                resolve(resultado)
            }
        });
    });
}

exports.searchLatestPublications = searchLatestPublications;
