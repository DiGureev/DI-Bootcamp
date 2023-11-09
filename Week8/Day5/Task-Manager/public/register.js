let form = document.getElementById('registration')
let btn = document.getElementById('reg')


btn.addEventListener('click', (e)=> {
    e.preventDefault()
    const userAnswers = {email: form.email.value, username: form.username.value, password: form.password.value, first_name: form.firstname.value, last_name: form.lastname.value};
    regUser(userAnswers)
})

const regUser = async (obj) => {
    let res = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(obj),
    })

    if (res.status == 200){
        form.innerHTML = ''
        let div = document.createElement('div')
        div.textContent = 'You are now registered'
        form.append(div)
    }
}


