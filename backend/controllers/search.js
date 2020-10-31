const { searchLatestPublications } = require('../services/productsService.js')

function findLatestPublications(req, res){
    const items = parseInt(req.params.items);

    searchLatestPublications(items).then(function(clasificados){
        res.status(200).send(clasificados);
    }).catch(function(err){
        res.status(500).send({error: "Ha ocurrido un error inesperado"});
    });
}

exports.findLatestPublications = findLatestPublications;