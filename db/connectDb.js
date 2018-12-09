// const mongoose = require('mongoose');
// const conn = mongoose.connection;

// //Establezco la libreria de promesas que vamos a usar
// mongoose.Promise = global.Promise;

// //Agrego un listener para escuchar posibles errores de conexión a la base de datos
// conn.on('error', err => {    
//     console.log('Error de conexión', err);
//     process.exit(1);  //Cierro la aplicación porque no puedo usar la app sin la db
// });

// mongoose.connect('mongodb://localhost/perfect-fight-db');
const mongoose = require('mongoose')
const Warrior = mongoose.model('Warrior')

var MongoClient = require('mongodb').MongoClient;

// Connect to the db
MongoClient.connect("mongodb://localhost:27017/perfect-fight", function (err, db) {
    console.log("connected to mongodb")
     if(err) throw err;
     
     let warrior = new Warrior({name:'Giant'},{hitPoints:0},{attack:0},{energyCost:'0'})

     warrior.save()


    const query = Warrior.find()
        .then(warriors => {
            console.log('warriors',warriors)
        })
        .catch(err =>{
            console.log('error',err)
        })

    
     //Write databse Insert/Update/Query code here..
                
});