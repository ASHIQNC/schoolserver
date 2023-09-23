//for getting the env file
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const router = require("./routes/routes");

const server = express();

//importing db connection

require("./db/dbconnection");

//connecting server and fe using cors inorder to avoid cors error

server.use(cors());

//to convert all incoming json type data in to js
//egane cheyumpo serverilott vernna alla requestum jslot convert aayikolum

server.use(express.json());
server.use(router);

const port = 3000;
server.listen(port, () => {
  console.log(`server started at port numbers ${port}`);
});
