//Get all users

const button = document.getElementById("getUsers");
const ul = document.getElementById("ul");

button.addEventListener("click", async () => {
  const data = await fetch("http://localhost:3000/users");
  const parsedData = await data.json();
  console.log(`This is from the server: ${JSON.stringify(parsedData)}`);
  parsedData.forEach((element) => {
    const li = document.createElement("li");
    li.textContent = element.username;
    ul.append(li);
  });
});

//Register users

const form = document.getElementById("register");
const username = document.getElementById("username");
const password = document.getElementById("password");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const obj = { username: username.value, password: password.value };
  console.log(obj);
  const res = await fetch("http://localhost:3000/register", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(obj),
  });
  const data = await res.json();
  if (res.status == 200) {
    alert(data.message);
  } else if (res.status == 201) {
    alert(data.message);
  }
  username.value = "";
  password.value = "";
});
