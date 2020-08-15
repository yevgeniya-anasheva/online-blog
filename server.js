const express = require("express");
const path = require("path");
const app = express();

const HTTP_PORT = process.env.PORT || 8080;

app.use(express.static("public"));

// Redirect Users to "index.html" if route not accessed using client side routing
app.use((req, res) => {
    res.sendFile(path.join(__dirname + "/public/index.html"));
});

app.listen(HTTP_PORT, ()=>{
    console.log(`server listening on: ${HTTP_PORT}`)
});