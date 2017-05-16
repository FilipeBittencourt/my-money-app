//inicio
mongod

mongo

//mostrar todas bases de dados
show dbs 

//Usar uma base de dados, mesmo que ela não exista pode ser usado o comando. USE
use db_finance

//Mostra em qual base você está
db

//Criando, exibir e apagando Collections
db.createCollection('billingcycles')
show collections
db.billingcycles.drop()


//inserts
db.billingcycles.insert({ name: "Janeiro17", month: 1, years: 2017 })
db.billingcycles.insert({ name: "Fevereiro17", month: 2, years: 2017 })

//inserts  com listas
db.billingcycles.insert({
    name: "Março17",
    month: 3,
    years: 2017,
    credits: [
        { name: "Salário", value: 5000 }
    ],
    debtis: [
        { name: "Luz", value: 100, status: "PAGO" },
        { name: "Telefone", value: 100, status: "PENDENTE" }
    ]
})




//Consultas SELECT

db.billingcycles.find()
db.billingcycles.find().pretty()
db.billingcycles.findOne()
db.billingcycles.findOne({ month: 2 })
db.billingcycles.find({ $or: [{ month: 1 }, { month: 2 }] }).pretty()
db.billingcycles.find({ credits: { $exists: true } }).pretty()
db.billingcycles.find({ credits: { $exists: true } },{_id:0, name:1}).pretty()
db.billingcycles.find({ years: 2017 })
db.billingcycles.find({ years: 2017 }).skip(1)
db.billingcycles.find({ years: 2017 }).skip(1).limit(1)

//Aggregate

db.billingcycles.aggregate([{
    $project: {
        credit: { $sum: "$credits.value" },
        debt: { $sum: "$debtis.value" }
    },
},
{
    $group: {
        _id: null,
        credt: { $sum: "$credit" },
        debt: { $sum: "$debt" }
    }
}])

//update
db.billingcycles.update({$and: [{ month: 1}, { years: 2017 }] }, {$set:{credits:[{name:"Salário", value:5000}]}})
//UPDATE com ID
db.experiences.update({"_id" : ObjectId("58f651417b8a61601690c546")},{$set: {name: 'aaa'}})


//save - O SAVE muda o documento quando se passa a chave. Do contrario ele faz insert também.
db.billingcycles.save({ name: "xxxx", month: 5, years: 2020 })
db.billingcycles.save( {"_id" : ObjectId("58e2460ca591954402d36ef4"), "name":"Filipe"})
db.billingcycles.save({"_id" : ObjectId("58e2460ca591954402d36ef4"), "name": "xxxx", "month": 5, "years": 2020 })

//REMOVE

db.billingcycles.count()
db.billingcycles.remove({month:2})
db.billingcycles.remove({years:2017},1) // exclui o primeiro registro que ele encontrar

db.dropDatabase()




////
use theglint
db.users.find().pretty()
db.experiences.find().pretty()
db.experiences.find({"startTime" : ISODate("2017-10-05T03:00:00Z"), 'deleted' : 0, 'status': 'published'}).pretty()
	
db.notifications.find().pretty()

db.notifications.remove({type: "email"})
db.notifications.remove({"recipient" : ObjectId("59137c3fe7e6ddd41f105e6d")})
 

db.users.remove({email:"fsbvieira@gmail.com"})
db.users.remove({email:"fsbvieiragame@gmail.com"})
db.users.remove({email:"filipeicr@hotmail.com"})
//eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiI1OGU3ZmU1NzhlMmEzYzM4MjQxNjhiZTQiLCJleHAiOjE0OTIyMDM3MzU1NjB9.zXjg1ErEQOslnGIIhMJDd15VjjE7XHiSOfDh-SyTFZA
"token" : "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiI1OTAzYTI4Yzc4MGU5Njc0MWYwYWU2NWMiLCJleHAiOjE0OTQwMTUyNDQxOTJ9.n-g59sLj0kBW6VNmjAHvdEyea9M8cswvnH9uajiunI4",
MKLINK /D "C:\Repositories\Sisnet\theglint-backend\theglint-app-server\node_modules\theglint-core" "C:\Repositories\Sisnet\theglint-backend\theglint-core"
MKLINK /D "C:\Repositories\Sisnet\theglint-backend\theglint-service\node_modules\theglint-core" "C:\Repositories\Sisnet\theglint-backend\theglint-core"

MKLINK /D "C:\_REPOSITORIES\GIT-SISNET\theglint-backend\theglint-app-server\node_modules\theglint-core" "C:\_REPOSITORIES\GIT-SISNET\theglint-backend\theglint-core"
MKLINK /D "C:\Repositories\Sisnet\theglint-backend\theglint-service\node_modules\theglint-core" "C:\Repositories\Sisnet\theglint-backend\theglint-backend\theglint-core"
  

//UPDATE com ID
db.experiences.update({"_id" : ObjectId("59078a1083928580064deff0")},{$set: {status: 'published'}})
db.experiences.remove({"_id" : ObjectId("58f651417b8a61601690c546")})


db.users.update({"_id" : ObjectId("59133c16e7e6ddd41f105e6c")},{$set: {"createdOn" : ISODate("2017-05-02T16:13:10.787Z")}})
db.users.update({  email:"filipeicr@hotmail.com"  },{$set: {"createdOn" : ISODate("2017-05-01T16:13:10.787Z")}})
db.users.update({  email:"filipe@sisnet.com.br"  },{$set: {"createdOn" : ISODate("2017-05-01T16:13:10.787Z")}})

EQ("="), GTE(">="), GT(">"), LT("<"), LTE("<=");




git clone -b dev/filipe https://github.com/sisnetglobal/theglint-backend.git


http://localhost:8000/api/auth/facebook


db.experiences.insert({     
"name": 'Teste23',
"startTime": "01/05/2017",
"description": 'description',
"endTime": "06/05/2017",
"type": 'spiritual',
"location": "5883e5e852bcf9d5668076a0",
"category": "5883e6b69a8a4bd5cce6dbfb",
"subcategory": "5883e6c89a8a4bd5cce6dbfc",
"frequence": 'one_time',
"ticket": [],    
"images": [],
"private": false,
"tickets": [],
"status": 'published',
"drinks": [],
"food": ["58859c304642bb3040cf6126"],
"links": [],
"soldOut": false,
"hideLocationPriorPurchase": false,
"artists": [],
"guidelines": [],
"tier": 'free',
"flow": ["5883eba70c97ffda83803cc9"],
"safetyAgreements": [],
"tags": ["58859c304642bb3040cf6126"],
"active": true,
"deleted": 0 
})