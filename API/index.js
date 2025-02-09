//npm install express
//npm install cors
//npm install nodemon --global¸
//npm install mongodb
const express = require('express')
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors({
    origin: "*",
  }
))
//init .env file
const dotenv = require('dotenv');
dotenv.config();

//init mongodb connection
const { MongoClient, ServerApiVersion } = require('mongodb');
const client = new MongoClient(process.env.URL);

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    console.log("connected");
    // Send a ping to confirm a successful connection
    await client.db("PolyManger").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
    return;
  } catch(e){
    console.log(e);
    return e;
  }
}
//rien pour le moment
app.get('/', (req, res) => {
  res.send('Hello World!')
})
//permet d'ajouter une recette a la db Recettes
app.post('/addRecette', async function (req, res){
  try{
      console.log(req.body)
      const name = req.body.name;
      const stars = req.body.stars;
      const price = req.body.price;
      const cuisson = req.body.cuisson;
      const prep = req.body.prep;
      const cheap = req.body.cheap;
      const vege = req.body.vege;
      const gymBro = req.body.gymBro;
      const time = req.body.time;
      const recette = await client.db("PolyManger").collection("Recettes").find({"name": name}).toArray();
      if(recette.length == 0){
        await client.db("PolyManger").collection("Recettes").insertOne({'name':name,'stars':stars,'price':price,'cuisson':cuisson, "prep":prep,"cheap":cheap,"vege":vege,"gymBro":gymBro,"time":time});
        res.json("Recette successfully added")
      }
      else{
        res.json("Already exist")
      }
      return
  }catch(e){
      console.log(e);
      res.json(400);
      return
  }
})
//fetch function for website infinite scroll
app.post('/fetchRecettes', async function (req, res) {
  try {
      const skips = req.body.limit * (req.body.page);
      const recettes = await client.db("PolyManger").collection("Recettes").find().skip(skips).limit(parseInt(req.body.limit)).toArray();
      console.log(recettes)
      res.json(recettes)
  } catch(e){
      console.log(e);
      res.json(400)
  }
})
//verifier la connection d'un utilisateur
app.post('/connect', async function (req,res){
  try {
    const username = req.body.username;
    const psw = req.body.psw;
    const user = await client.db("PolyManger").collection("Clients").findOne({userName:username,passWord:psw});
    console.log(user)
    res.json(user)
    return
  } catch(e){
      console.log(e);
      res.json(400)
      return
  }
})
//verifier qu'il est unique et inscrit l'utilisateur
app.post('/login', async function (req,res){
  try{ 
    const username = req.body.username;
    const psw = req.body.psw;
    if(username == "" || psw==""){
      res.json(null)
      return
    }
    if(await client.db("PolyManger").collection("Clients").findOne({userName:username})){
      res.json(null)
      return
    }else{
      const user = await client.db("PolyManger").collection("Clients").insertOne({userName:username,passWord:psw});
      res.json(user)
      return
    };
   }
   catch(e){
      console.log(e);
      res.json(400)
      return
  }
})

async function connect(PORT) {
  await run();
  console.log(`Listening to http://localhost:${PORT}`)

}
app.listen(process.env.PORT, ()=>{
    connect(process.env.PORT);
});
//"npm start" pour run le code