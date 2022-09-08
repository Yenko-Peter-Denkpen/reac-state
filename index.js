const express = require("express")
const dotenv =("dotenv")
const connectDB =require("./config/connectDB")
const userRoute = require("./routes/userRoute")
const morgan = require("morgan")

const app = express();
dotenv.config
connectDB();

//middlewares
app.use(express.json())
app.use("/users", userRoute)
app.use(morgan("dev"))


app.get("/", (req, res) => {
    res.send("welcome to our school portal")
})

const PORT = process.env.PORT || 2000
app.listen(PORT, () =>
   console.log(`server is running on ${PORT}`))