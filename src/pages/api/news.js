
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://AllAssignmentData:tsh0qnXtNMWzYEh2@cluster0.3xzol.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run(req, res) {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        const newsCollection = client.db("todo-manegement").collection("news")

        if (req.method === "GET") {
            const news = await newsCollection.find({}).toArray();
            res.send({ message: "sucesss", status: 200, data: news })
        }
        if(req.method === "POST"){
            const news = await newsCollection.insertOne(req.body);
            res.json(news)
        }


    } finally {

    }
}
export default run;
