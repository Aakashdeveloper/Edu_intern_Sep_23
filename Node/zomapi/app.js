let express = require('express');
let app = express();
let port = 9120
let {ObjectId} = require('mongodb');
let bodyParser = require('body-parser');
let cors = require('cors');
let {dbConnect,getData,postData,deleteData,updateData} = require('./Controller/dbController');

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

app.get('/',(req,res) => {
    res.send("Hiii From Express")
})

// get all location

app.get('/location', async(req,res) =>{
    let query = {};
    let collection = "location";
    let output = await getData(collection,query);
    res.send(output)
});

app.get('/restaurants', async(req,res) =>{
    let query = {};
    if(req.query.stateId && req.query.mealId){
        query = {
            "state_id":Number(req.query.stateId),
            "mealTypes.mealtype_id":Number(req.query.mealId)
        } 
    }
    else if(req.query.stateId){
       query = {"state_id":Number(req.query.stateId)} 
    }else if(req.query.mealId){
        query = {"mealTypes.mealtype_id":Number(req.query.mealId)}
    }
    let collection = "restaurants";
    let output = await getData(collection,query);
    res.send(output)
});

// get all mealtypes
app.get('/mealType', async(req,res) => {
    let query = {};
    let collection = "mealType";
    let output = await getData(collection,query);
    res.send(output);
})

app.get('/filter/:mealId',async(req,res) => {
    let mealId = Number(req.params.mealId);
    let cuisineId = Number(req.query.cuisineId);
    let lcost = Number(req.query.lcost);
    let hcost = Number(req.query.hcost);

    if(cuisineId){
        query = {
            "mealTypes.mealtype_id":Number(mealId),
            "cuisines.cuisine_id":Number(cuisineId)
        }
    }else if(lcost && hcost){
        query = {
            "mealTypes.mealtype_id":Number(mealId),
            $and:[{cost:{$gt:lcost,$lt:hcost}}]
        }
    }
    else{
        query = {}
    }

    let collection = "restaurants";
    let output = await getData(collection,query);
    res.send(output)
})


//restaurant details
app.get('/details/:id',async(req,res) => {
    //let id = Number(req.params.id);
    const validObjId = (id) =>{
        const idPattern = /^[0-9a-fA-F]{24}$/
        return idPattern.test(id)
    }
    if(validObjId(req.params.id)){
        let collection = "restaurants";
        let query = {_id:new ObjectId(req.params.id)}
        let output = await getData(collection,query);
        res.send(output)
    }else{
        res.send('Invalid Object Id')
    }
    

})

//menu of restaurants
app.get('/menu/:id',async(req,res) => {
    let collection = "menu";
    let query = {restaurant_id:Number(req.params.id)}
    let output = await getData(collection,query);
    res.send(output)
})

//get orders
app.get('/orders',async(req,res) => {
    let query = {}
    let collection = "orders";
    if(req.query.email){
        query = {email:req.query.email}
    }
    let output = await getData(collection,query);
    res.send(output)
})

//placeOrder
app.post('/placeOrder',async(req,res) => {
    let body = req.body;
    let collection = 'orders';
    let response = await postData(collection,body);
    res.send(response)
})

//menu wrt to id {"id":[4,8,11]}
app.post('/menuDetails',async(req,res) => {
    if(Array.isArray(req.body.id)){
        let query = {menu_id:{$in:req.body.id}};
        let collection = "menu";
        let output = await getData(collection,query)
        res.send(output)
    }else{
        res.send('Please pass data in from of array')
    }
})

//update order status
app.put('/updateOrder',async(req,res) => {
   
    let collection = "orders";
    let condition = {"_id":new ObjectId(req.body._id)}
    let data = {
        $set:{
            "status":req.body.status
        }
    }
    let output = await updateData(collection,condition,data)
    res.send(output)
})

//delete order
app.delete('/deleteOrder',async(req,res) => {
    let collection = "orders";
    let condition = {"_id":new ObjectId(req.body._id)}
    let output = await deleteData(collection,condition)
    res.send(output)
})


app.listen(port,(err) => {
    dbConnect();
    if(err) throw err;
    console.log(`Server is running on port ${port}`)
})
