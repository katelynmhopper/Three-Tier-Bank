const express = require("express");
const app = express(); 
const userRouter = require("./server/routes/user-route");
require('./server/db/mongoose')
const port = 3000; 

app.use(express.json()); 

app.use("/users", userRouter);

app.listen(port, () => console.log(`Server runnin on port ${port}`))