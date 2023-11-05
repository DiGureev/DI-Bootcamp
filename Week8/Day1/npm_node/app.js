// const slugify = require('slugify')
// const slug = slugify('new today', '_')

// console.log(slug);

const axios = require('axios')

const getData = async() => {
    try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/users');
        // const data = await res.json()
        return res.data

    } catch (e) {
        console.log(e)
    }
}

getData().then(res => console.log(res))