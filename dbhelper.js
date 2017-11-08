var data = require(data);

var createdb = function(){
    var MongoClient = require('mongodb').MongoClient;
    var url = 'mongodb://localhost:27017/SDGuru';
    
    MongoClient.connect(url, function(err,db){
        if(err) {throw err;}
        console.log('Database created!');
        db.close();
    });
    
}

var createNewCustomerCollection = function(){
    var MongoClient = require('mongodb').MongoClient;
    var url = 'mongodb://localhost:27017/SDGuru';

    MongoClient.connect(url,function(err,db){
        if(err) {throw err;}
        db.createCollection('NewCustomers', function(err,res){
            if(err) {throw err;}

            console.log('Collection created!');
            db.close();
        });
    });
}

var addNewCustomerRecords=function(records){
    var MongoClient = require('mongodb').MongoClient;
    var url = 'mongodb://localhost:27017/SDGuru';

    MongoClient.connect(url,function(err,db){
        if(err) {throw err;}
        db.collection('NewCustomers').insertMany(records, function(err,res){
            if(err) {throw err;}
            console.log('Records Added!');
            db.close();
        });
    });
}

var createExistingCustomerCollection = function(){

}

module.exports = createdb;
module.exports = createcreateNewCustomerCollection;
module.exports = addNewCustomerRecords;

