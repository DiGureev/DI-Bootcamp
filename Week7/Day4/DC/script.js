// In the HTML file, add a form, containing an input and a button. This input is used to fetch gif depending on a specific category.
// In the JS file, create a program to fetch one random gif depending on the search of the user (ie. If the search is “sun”, append on the page one gif with a category of “sun”).
// The gif should be appended with a DELETE button next to it. Hint : to find the URL of the gif, look for the sub-object named “images” inside the data you receive from the API.
// Allow the user to delete a specific gif by clicking the DELETE button.
// Allow the user to remove all of the GIFs by clicking a DELETE ALL button.

let container = document.getElementById('container')
let input = document.getElementById("search")
let button = document.getElementById("btn")
let deleteBtn = document.getElementById("dlt")

deleteBtn.addEventListener("click", function() {
    container.innerHTML = ''
})

button.addEventListener("click", async function(e){
    e.preventDefault()
    let word = input.value;
    let data = await getGif(word)

    let imgUrl = data.data["images"]["fixed_width_small"]["url"]

    let div = document.createElement('div')
    div.style.marginTop = "40px"
    let img = document.createElement('img')

    img.setAttribute('src', imgUrl)
    let p = document.createElement('p')
    p.textContent = data.data["title"]
    let btn = document.createElement('button')
    btn.textContent = 'Delete GIF'

    div.append(img)
    div.append(p)
    div.append(btn)
    container.append(div)

    btn.addEventListener('click', function() {
        div.remove()
    })

})


const getGif = async (category) => {
    try {let response = await fetch(`https://api.giphy.com/v1/gifs/random?tag=${category}&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`);
    let data = await response.json();
    return data
    }catch (e) {
        console.log(e);
        }
    
}

getGif('sun')

