const express = require('express')
const multer = require('multer')
const app = express()
const path = require('path')

const env = require('dotenv').config()
const condb = require('./config/db')
condb()
const port = process.env.PORT || 5000

// app.use(JSON.stringify())
// Gulzar
app.get('/', (req, res) => {
    res.send("hello this gullu")
})

app.use('/api/user', require('./routs/userrouts'))
app.use('/api/product', require('./routs/productrouts'))
app.use('/api/auth', require('./routs/Authrouts'))
app.use('/profile', express.static('uplode/images'))
app.use('/api/tudo', require('./routs/todoroute'))
app.use("/api/course", require("./routs/studentRoutes/studentcourseRoutes"))
app.use("/api/student", require("./routs/studentRoutes/studentRoutes"))
app.use("/api/subject", require("./routs/studentRoutes/studentsubRoutes"))
app.use("/api/country", require("./routs/studentRoutes/studentcountryRouter"))
app.use('/api/singup', require('./routs/singuprouts'))
app.use('/api/profile', require('./routs/profilerouts'))
app.use('/api/employ', require("./routs/employrouts"))
app.use('/api/allapi', require("./routs/deshbordrouts"))
app.use('/api/addcart', require("./routs/Addcarrouts"))
app.use('/api/usrr',require("./routs/userroutss"))
app.use('/api/prodect',require("./routs/prodectrouts"))
app.use('/api/carproduct',require("./routs/carproductrouts/carprdtrouts"))
app.use("/api/wishing",require("./routs/WishingRouts"))




const storage = multer.diskStorage({
    destination: "./uplode/images",
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})
const uplode = multer({
    // dest:'./backend/uplode/images'
    storage: storage
})


app.post('/uplode', uplode.single('profile'), (req, res) => {
    console.log(req.file)
    res.json({
        success: 1,
        profile_url: `http://localhost:8000/profile/${req.file.filename}`
    })
})


app.listen(port, () => {
    console.log(port)
})