const https = require('https');

module.exports = app => {
	
	
	app.get('/api/teste', (req, res) => {
		res.json('{status:SUCESSO}');
	}
	
	/*
    const MongoClient = require('mongodb').MongoClient;
    const ObjectID = require('mongodb').ObjectID;
    const url = "mongodb://mongo_womandb:27017/";
    const respostaSucesso = "{status:SUCESSO}";
    const respostaErro = "{status:ERRO}";

    app.post('/api/teste', (req, res) => {
        MongoClient.connect(url, function (err, db) {
            if (err) throw err;
            var dbo = db.db("womandb");
			
			dbo.collection("item").insertOne(req.body, function (err, res) {
				if (err) {
					res.json(respostaErro);
					throw err;
				}
			});
			console.log("Inseriu");
            dbo.collection("item").find({}).toArray(function (err, result) {
                if (err) throw err;
                if (!result) res.json(respostaErro);
                else res.json(result);
                db.close();
            });
        });
    });*/

}