import knex from "knex"
import dotenv from "dotenv"
import { products } from "../lesson/config/db.js";

dotenv.config()

const db = knex({
    client:"pg",
    connection: {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
    }
});


const test = async() => {
    const trx = await db.transaction();
    try {
        const product = await db('products')
            .insert({name: 'iDi', price: 567}, ['id', 'name', 'price'])
            .transacting(trx)

        console.log(product);

        await trx.commit();
    } catch(e) {
        console.log(e);
        await trx.rollback()
    }
}

test()

//INSERT
// db('products')
// .insert({
//     name: 
// })


//SELECT
// db("products")
// .select("id","name","price")
// .where({"id":1})
// .then(rows => {
//     console.log(rows);
// })
// .catch(e =>{
//     console.log(e)
// })

// db.raw('select id, name, price from products where id > ?', [1],[2])
// .then(data => {
//     console.log(data.rows);
// })
// .catch(e =>{
//     console.log(e)
// })