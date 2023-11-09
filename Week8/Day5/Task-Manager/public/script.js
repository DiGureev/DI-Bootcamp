let btn = document.getElementById('all')
let body = document.querySelector('body')

btn.addEventListener('click', ()=> {
    body.innerHTML = ''
    getAll()
})

const getAll = async() => {
    let Rawdata = await fetch('http://localhost:5000/users')
    let data = await Rawdata.json()
    let ul = document.createElement('ul')
    body.append(ul)
    data.forEach(element => {
        Usname = element.username
        let li = document.createElement('li')
        li.textContent = Usname
        ul.appendChild(li)
    });


}