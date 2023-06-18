const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = "mongodb+srv://userViewer:yjLdc168CdLe2if7@angular-app1.dwi8rvv.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function test() {
  try {
    const database = client.db('product-list-app');
    const movies = database.collection('products');
    // Query for a movie that has the title 'Back to the Future'
    const query = { name: 'BenQ GW2480 Monitor' };
    const movie = await movies.findOne(query);
    console.log(movie);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
test().catch(console.dir);
const app = express();
app.use((req, res, next) => {
    console.log('Hello console');
    next();
})
app.use((req, res, next) => {
    res.send('Hello from express');
})

module.exports = app;