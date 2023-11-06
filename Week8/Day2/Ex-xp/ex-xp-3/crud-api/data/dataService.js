const axios = require('axios')

const fetchPosts = async () => {
    let base = await fetch('https://jsonplaceholder.typicode.com/posts');
    let data = await base.json();
    // console.log(data);
    return data
}

module.exports = fetchPosts