const express = require('express')
const app = express();
const port = 3000;
var AWS = require("aws-sdk");
const uuid = require('uuid');
const bodyParser = require('body-parser');

const password = 'InterD2019#1#2#3';

var getParams = {
    TableName : "AvisosInterD"
};

AWS.config.update({
  region: "us-east-2"
});

var dynamodb = new AWS.DynamoDB();
var docClient = new AWS.DynamoDB.DocumentClient();

app.all("/*", function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With, application/json');
    next();
  });
  
app.use(bodyParser.urlencoded({extended: true}) );
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/warnings', (req, res) => {
    
    docClient.scan(getParams, function(err, data) {
        if (err) {
            //console.log(err); 
            res.send({status: 'erro-no-scan'}); 
        }
        else {
            var newdata = data; 
            newdata.Items = newdata.Items.sort(function(a, b){
                return b.warningID - a.warningID; 
            });
            //console.log(newdata);
            res.send(newdata);
        }
    });
});

// DELETE 
app.post('/deleteWarning', (req, res) => {
    //console.log(req.body);
    if(req.body.senha === password){
        var deletedItem = req.body.warningID; 

        var params = {
            TableName: "AvisosInterD",
            Key:{
                "warningID": deletedItem,
            },
            UpdateExpression: "set visible = :v",
            ExpressionAttributeValues:{
                ":v": false
            },
            ReturnValues:"UPDATED_NEW"
        };

        docClient.update(params, function(err, data) {
            if(err){
                res.send({status: 'falha na exclusão'});
            }else {
                res.send({status: 'exclusão feita com sucesso!'});
            }
        })  
    } else {
        res.send({status: 'delete-senha-incorreta'}); 
    } 
});

app.post('/warnings', (req, res) => {    
    var data = req.body;    

    if(req.body.senha === password){
        docClient.scan(getParams, function(err, dados) {
        if(err){
            //console.log('Erro'); 
            res.send({status: 'erro-search-key'});
        }else {
            //console.log(dados);   
            var postParams = {
                TableName: "AvisosInterD", 
                Item: {
                    "warningID": {S: ""+parseInt(dados.Count+1)+""}, 
                    "tipo": {S: ""+data.tipo+""}, 
                    "titulo": {S: ""+data.titulo+""}, 
                    "evento": {S: ""+data.event+""}, 
                    "mensagem": {S: ""+data.mensagem+""}, 
                    "importancia": {S: ""+data.importancia+""}, 
                    "visible": {BOOL: true}
                }
            };
            //console.log('Gerando o obj', postParams);

            dynamodb.putItem(postParams, function(err, data) {
                if (err) {
                    //console.log(err); 
                    res.send({status: 'erro-ao-inserir-dado'}); 
                }
                else {
                    //console.log('Item Gravado com sucesso!!!!', data);  
                    res.send({status: 'sucesso-ao-gravar-item'});
                }
            });
        }
    });    
    } else {
        res.send({status: 'senha-incorreta'});
    }
});

app.listen(port, () => 
    console.log(`Example app listening on port ${port}!`))
