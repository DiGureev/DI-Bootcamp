let section = document.getElementById('here')
let data = window.location.search
let params = new URLSearchParams(data)


console.log(params.get("firstname"))

section.innerHTML = params.get("firstname") +' '+ params.get("lastname");
