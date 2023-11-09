let form = document.getElementById('login')
let btn = document.getElementById('log')


btn.addEventListener('click', (e)=> {
    e.preventDefault()
    const userAnswers = {username: form.username.value, password: form.password.value};
    LogUser(userAnswers)
})

const LogUser = async (obj) => {
    let res = await fetch("http://localhost:3001/login", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(obj),
    })
    let div = document.createElement('div')
    console.log(res.status);
    if (res.status === 200){
        div.textContent = 'You are now logged in'
        form.appendChild(div)
    } else {
        div.textContent = 'Password is not correct'
        form.appendChild(div)
    }
}


