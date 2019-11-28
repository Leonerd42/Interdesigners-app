# InterDesigners

Aplicativo desenvolvido para o evento Interdesigners Conecta em setembro de 2019 da UNESP do Campus de Bauru. 

Disponiveis nas lojas
* [Apple Store](https://apps.apple.com/br/app/interdesigners-conecta/id1482340850)
* [Play Store](https://play.google.com/store/apps/details?id=com.InterDesigners.LTIA)

O Aplicativo foi dividido em 3 partes. 

* Aplicação Ionic - Disponível nas lojas
* Servidor nodejs - Rodando em uma EC2 da AWS
* Formulário de manipulação do banco de dados - Feito com Angular, hospedado num S3 Bucket da AWS  

O evento precisava que houvesse uma ferramenta de avisos dentro do aplicativo, por isso foi feito o fomulário onde os administradores do evento poderiam cadastrar avisos de ultima hora sobre as palestra, minicursos, etc.

O aviso cadastrado pelo formulário na S3, enviava um objeto para o servidor, e este armazenava no DynamoDB, e quando uma instância do aplicativo requisitasse essa informaçao, ele disponibilizava os avisos cadastrados no BD.


**A instância da EC2 rodando o servidor foi desligada após o final do evento, para evitar despesas com a AWS, por isso os avisos não estão mais sendo cadastrados ou recebidos**
