const express = require('express');
const app = express()
const Router = express.Router()
Router.use(express.json())
const { getusr, postusr, findpost, deletusr } = require("../controler/Usercontrolerr")

Router.get("/", getusr)
Router.post("/", postusr)
Router.post("/insart/:_id", findpost)
Router.delete("/:_id", deletusr)


module.exports = Router