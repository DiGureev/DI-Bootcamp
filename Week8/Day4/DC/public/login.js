let form = document.getElementById('login')
let btn = document.getElementById('log')


btn.addEventListener('click', (e)=> {
    e.preventDefault()
    const userAnswers = {username: form.username.value, password: form.password.value};
    console.log(userAnswers);
    LogUser(userAnswers)
})

const LogUser = async (obj) => {
    let res = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(obj),
    })

    form.innerHTML = ''
    let div = document.createElement('div')
    console.log(res.status);
    if (res.status === 200){
        div.textContent = 'You are now logged in'
        form.append(div)
    } else {
        div.textContent = 'Username or password is not correct'
        form.append(div)
    }
}


