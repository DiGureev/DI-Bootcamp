fetch("http://localhost:5000/api/emojis")
  .then((res) => res.json())
  .then((data) => {
    render(data);
  });

const options = ['Banana', 'Butterfly', 'Juice', 'Dance', 'Cry']
let form = document.getElementById("container")
form.style.textAlign = 'center'
form.style.marginTop = '50px'

const render = (arr) => {
  //choose random emoji and put in into div
  const randEmoji = arr[(Math.floor(Math.random() * arr.length))] 
  let div = document.createElement('div')
  div.textContent = randEmoji.emoji
  div.style.fontSize = '50px'
  //put an options
  let option1 = document.createElement('button')
  let answer1 = options[(Math.floor(Math.random() * options.length))]
  option1.textContent = answer1
  option1.setAttribute('value', answer1)
  let option2 = document.createElement('button')
  let answer2 = options[(Math.floor(Math.random() * options.length))]
  option2.textContent = answer2
  option2.setAttribute('value', answer2)
  let option3 = document.createElement('button')
  option3.textContent = randEmoji.name
  option3.setAttribute('value', randEmoji.name)
  //append all to the form
  form.append(div, option1, option2, option3)

  let btns = document.querySelectorAll('button')
  btns.forEach(btn => {
    btn.style.margin = '20px'
    btn.addEventListener('click', (e)=>{
        e.preventDefault();
        let answer = btn.value
        let checkItem = arr.filter(item => item.name == answer)
        if (checkItem.length > 0 && checkItem[0].emoji === randEmoji.emoji){
            congrat('True!')
        } else {
            congrat('No...')
        }
        
    })
  })
};


function congrat(text) {
    form.innerHTML = ''
    let divCong = document.createElement('div')
    divCong.textContent = text
    form.append(divCong)
}