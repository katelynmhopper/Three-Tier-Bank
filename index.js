const express = require("express");
const app = express(); 
const userRouter = require("./src/routes/user-route");
require('./src/db/mongoose')
const port = 3000; 

app.use(express.json()); 

app.use("/users", userRouter);

app.listen(port, () => console.log(`Server runnin on port ${port}`))