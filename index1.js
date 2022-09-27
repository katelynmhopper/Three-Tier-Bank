const express = require("express");
const cors = require("cors");
const app = express(); 
const userRouter = require("./server/routes/user-route");
require('./server/db/mongoose')
const port = 3000; 

app.use(cors());

app.use(express.json()); 

app.use("/users", userRouter);

app.listen(port, () => console.log(`Server running on port ${port}`))