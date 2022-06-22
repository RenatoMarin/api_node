const db = require('../models')

//Main model
const User = db.users
//Main work

//1 - Create User
const addUser = async (req, res) => {
    let info = {
        email: req.body.email,
        password: req.body.password
    }

    const user = await User.create(info)
    res.status(200).send(user)
}

//2 - Select single User

const getOneUser = async (req, res) => {
    let id = req.params.id
    let user = await User.findOne({where: {id:id}})
    res.status(200).send(user)
}

//3 - Update User

const updateUser = async (req, res) => {
    let id = req.params.id
    const user = await User.update(req.body, {where: { id:id }})
    res.status(200).send(user)
}

//4 - Login User

const loginUser = async (req, res) => {
    let email = req.params.email
    let password = req.params.password
    const user = await User.findOne({where: { email:email, password:password }})
    res.status(200).send(user)
}

module.exports = {
    addUser,
    getOneUser,
    updateUser,
    loginUser
}