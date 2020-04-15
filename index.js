const express = require("express");
const bodyParser = require('body-parser');
const app = express();

const port = 3000;

app.use(bodyParser());

app.all("/", (req, res) => {
    console.log("Request Headers: %s", req.headers);
    console.log("Request URL: %s", req.url);
    console.log("Request Method: %s", req.method.toLowerCase());
    console.log("Request Body: %s", req.body);
    return res.status(200).send("Logged Message");
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
