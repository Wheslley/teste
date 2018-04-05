const https = require('https');

module.exports = app => {
	
    const MongoClient = require('mongodb').MongoClient;
    const ObjectID = require('mongodb').ObjectID;
    const url = 'mongodb://wheslley:senha123@ds231589.mlab.com:31589/womandb';
    const respostaSucesso = "{status:SUCESSO}";
    const respostaErro = "{status:ERRO}";
	
	app.get('/api/teste', (req, res) => {
		res.json('{status:SUCESSO}');
	});
	
	app.get('/api/select', (req, res) => {
		console.log("inicio");
		MongoClient.connect(url, function (err, db) {
			if (err) throw err;
            var dbo = db.db("womandb");
			dbo.collection("usuario").find({}).toArray(function (err, result) {
				console.log("buscou");
                if (err) throw err;
                if (!result){
					console.log("sem resultado");
					res.json(respostaErro);
				}
                else {
					console.log("houve resultado");
					res.json(result);
				}
				console.log("fim");
                db.close();
            });
		});
	});
	
    app.post('/api/auditoria', (req, res) => {
        MongoClient.connect(url, function (err, db) {
            if (err) throw err;
            var dbo = db.db("womandb");
			
			dbo.collection("item").insertOne('{"nome":"celular"}', function (err, res) {
				console.log("inico insert");
				if (err) {
					res.json(respostaErro);
					throw err;
				}
				console.log("fim insert");
			});
			console.log("Inseriu");
            dbo.collection("item").find({}).toArray(function (err, result) {
                if (err) throw err;
                if (!result) res.json(respostaErro);
                else res.json(result);
                db.close();
            });
        });
    });

}