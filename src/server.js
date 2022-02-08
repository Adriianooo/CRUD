//mongodb+srv://databaseApi:bsZEue5VR8UlmlD9@clusterapi.6pmku.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({extended: true }));

mongoose.connect("mongodb+srv://Adriano:5W4gv3i75K5M2TcD@cluster0.3scx3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
.then(() => {
    app.listen(3000, () => console.log("Conectamos ao mongoDB!"));
})
.catch((err) => console.log(err));



app.use(routes);




