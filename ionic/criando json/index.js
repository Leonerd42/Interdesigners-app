var fs = require('fs'); 

console.log('teste');

fs.open('data.json','w', function(err, file){
    if (err) throw err;
    console.log('Arquivo criado com sucesso!'); 
});

var words = ['Lorem','ipsum','dolor','sit','amet','consectetur','adipisicing','elit','Ratione','assumenda','possimus','omnis','soluta','voluptate','Veniam','repudiandae','laudantium','enim', 'nulla', 'nobis' , 'numquam' , 'voluptatem' , 'alias' , 'nemo', 'totam' , 'placeat', 'nihil' , 'quo' , 'dolore' , 'vel' ];

function GetRandomNumber(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function GetRandomPhrase(max_words){
    var totalWords = GetRandomNumber(1, max_words);
    var phrase = '';

    for(var i=0; i<totalWords; i++){
        var word = words[GetRandomNumber(0, words.length)];
        phrase += ' ' + ( word == undefined ? words[0] : word);
    }
    return phrase;
}
var cont = 0; 
var json = [];

console.log(GetRandomNumber(0,words.length));

// Criando documentos 
for(var i=0; i<=(5*17); i++){
    var event = {
        name: GetRandomPhrase(3), 
        type: GetRandomPhrase(2), 
        description: GetRandomPhrase(32), 
        location: GetRandomPhrase(5), 
        day: GetRandomNumber(7,12),
        time: GetRandomNumber(0, 22), 
        favorite: GetRandomNumber(0, 1) == 0 ? false : true, 
        id: cont++
    }
    json.push(event);
}

var string = JSON.stringify(json,null,0);
string = string.replace(/{/g,'{\n');
string = string.replace(/,/g,',\n');
string = string.replace(/}/g,'\n}');

fs.writeFile('data.json', string, function(err) {
    if (err) throw err;
    console.log('arquivo escrito com sucesso!'); 

});