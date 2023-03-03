const employ = require('../model/employmodel')

const getemp = async (req, res) => {
    const data = await employ.find({})
    res.send(data)
}

const findid = async(req,res)=>{
    const data = await employ.findById(req.params._id);
    res.send(data)
}

const postemp = async (req, res) => {
    try {
        const { employid, employname, employemail, employnumber, employdob, employment, employaddress } = req.body
        const data = await employ.create({
            employid, employname, employemail, employnumber, employdob, employment, employaddress
        })
        res.send(data)
    }
    catch (error) {
        res.send(error)
    }
}
const putemp = async (req, res) => {
    const data = await employ.findById(req.params._id)
    if (!data) {
        res.status(401).json({ massgge: "id is not difine" })
    }
    let updatedata = await employ.findByIdAndUpdate(req.params._id, req.body,{
        new: true
    })
    res.status(201).json(updatedata)
}


const deletemp = async (req, res) => {
    const data = await employ.findById(req.params._id)
    if (!data) {
        res.status(401).json({ massge: "id is not difind" })
    }
    await data.remove()
    res.status(201).json({ massge: "data is deleted" })
}
module.exports = {
    getemp,
    postemp,
    putemp,
    deletemp,
    findid  

}