const employ = require("../model/employmodel");
const student = require("../model/studentmodel/studentmodel");
const product = require("../model/productschema")
const allapi = async (req, res) => {
  try {
    let product = await product.find({})
    let student = await student.find({})
    let employ = await employ.find({})
    arr = [
      employ = {
        image: "https://wallpaperaccess.com/full/4322025.jpg",
        name: "EMPLOYES DETAILS",
        data: employ
      },
      student = {
        image: "https://watermark.lovepik.com/photo/20211130/large/lovepik-primary-school-students-study-picture_501212451.jpg",
        name: "STUDENTS DETAILS",
        data: student
      },
      product = {
        image: "https://stickybranding.com/wp-content/uploads/2019/11/How-to-name-your-product.jpg",
        name: "PRODUCTS DETAILS",
        data: product
      }

    ]

    res.status(200).json(arr)
  } catch (error) {
    res.status(404).json(error)
  }

}

module.exports = { allapi }