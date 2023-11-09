let form = document.getElementById('registration');
let btn = document.getElementById('regis');

console.log(form);

btn.addEventListener('click', (e)=> {
    e.preventDefault();
    
    const userAnswers = {firstname: form.firstname.value, lastname:form.lastname.value, email:form.email.value, username: form.username.value, password:form.password.value};
    regUser(userAnswers);
});

const regUser = async (obj) => {
    let res = await fetch("http://localhost:3001/register", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(obj),
    });
    let data=await res.json();
    let div = document.createElement('div');
    if (res.status === 200){
        div.textContent = data.msg;
        form.appendChild(div);
    } else {
        div.textContent =data.msg;
        form.appendChild(div);
    }
}


