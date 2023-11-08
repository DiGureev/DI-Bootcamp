const {db} = require("../config/db.js")
const bcrypt = require("bcrypt")

const _getAllUsers = () => {
    return db("users").select('email', 'username', 'first_name', 'last_name');
}


const _getUserById = (id) => {
    return db("users").select('email', 'username', 'first_name', 'last_name').where({id});
}

const _registerUser = async (email, username, password, first_name, last_name) => {
    const trx = await db.transaction();
    try {
        const users = await db('users')
            .insert({email, username, first_name, last_name})
            .transacting(trx)

        bcrypt.hash(password, 10, async function(err, hash) {
            const hashpwd = await db('hashpwd')
            .insert({username, password: hash})
        });

        await trx.commit();
    } catch(e) {
        console.log(e);
        await trx.rollback()
    }
}

const _loginUser = (user) => {
    return db('hashpwd').select('username', 'password').where({username: user})
}


const _updateUser = (id, first_name, last_name) => {
    return db("users").update({first_name, last_name}).where({id});
}


module.exports = {
    _getAllUsers,
    _getUserById,
    _registerUser,
    _loginUser,
    _updateUser
}