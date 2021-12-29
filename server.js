const express = require("express");
const cors = require("cors");
const mongodb = require("mongodb");

const rest = express();
rest.use(cors());
rest.use(express.json());

const mongodbClient = mongodb.MongoClient;

rest.get("/products", (req, res) => {
    mongodbClient.connect("mongodb+srv://deepaksharma:admin@cluster0.rk5ue.mongodb.net/ngmrngbatch?retryWrites=true&w=majority", (err, connection) => {
        if (err) throw err;
        else {
            const db = connection.db("ngmrngbatch");
            db.collection("products").find().toArray((err, array) => {
                if (err) throw err;
                else {
                    res.send(array);
                }
            });
        }

    });
});

rest.listen(8080, () => {
    console.log("node server is running on port number 8080");
});