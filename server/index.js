const express = require('express')
const app = express()
const dotenv = require('dotenv')
const cors = require('cors')
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const port = process.env.PORT || 5000
dotenv.config()

app.use(cors())
app.use(express.json())

const uri = process.env.MY;

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

const run = async () => {
    try {
        await client.connect();

        const db = client.db("concept-1");
        const usersCollection = db.collection("users");

        app.get('/user', async (req,res) => {
            const result = await usersCollection.find().toArray();
            res.send(result)
        });

        app.get('/user/:id', async (req,res)=> {
            const id = req.params.id
            const query = {
                _id: new ObjectId(id)
            }
            const result = await usersCollection.findOne(query)
            // console.log(result)
            res.json(result)
        })

        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");

    } finally {
        // await client.close();
    }
}
run().catch(console.dir);


app.get('/', (req, res) => {
  res.send('Hello World Umayer')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
