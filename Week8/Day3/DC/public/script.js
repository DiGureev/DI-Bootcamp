let form = document.getElementById('quiz')
let resultBtn = document.getElementById("result")
let questInd = 0

const getQuestions = async () => {
    let rawData = await fetch('http://localhost:5000/quiz/')
    let data = await rawData.json()
    chooseQuestion(data)
    
}

getQuestions()


const chooseQuestion = (data) => {
    let question = data[questInd].question;
    let answers = data.map(item => item.answer)
    let h2 = document.createElement('h2')
    h2.textContent = question
    form.append(h2)
    answers.forEach(element => {
        let ansBtn = document.createElement('button')
        ansBtn.setAttribute('value', element)
        ansBtn.textContent = element
        form.append(ansBtn)
        ansBtn.addEventListener('click', async (e)=> {
            e.preventDefault()
            questInd += 1
            const userAnswers = {question: question, answer: ansBtn.value };
            checkAnswer(userAnswers)
            if (questInd < data.length){
                form.innerHTML = ""
                chooseQuestion(data)
            } else {
                getScore()
            }
        })
    });

}


const getScore = async () => {
    let rawScore = await fetch("http://localhost:5000/quiz/score")
    let score = await rawScore.json()
    console.log(score)
    let pRes = document.createElement("p")
    pRes.textContent = `Your score is ${score}`
    form.innerHTML = ""
    form.append(pRes)
}

const checkAnswer = async (obj) => {
    fetch("http://localhost:5000/quiz/", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(obj),
    })
}