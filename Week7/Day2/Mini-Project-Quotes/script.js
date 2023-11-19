const quotes = [
    {
        id: 0,
        author: 'Steve Jobs',
        quote: "Creativity is just connecting things. When you ask creative people how they did something, they feel a little guilty because they didn't really do it, they just saw something. It seemed obvious to them after a while.",
        likes: 0
    },
    {
        id: 1,
        author: 'Steve Jobs',
        quote: "It's really hard to design products by focus groups. A lot of times, people don't know what they want until you show it to them.",
        likes: 0
    },
    {
        id: 2,
        author: 'Steve Jobs',
        quote: "Remembering that you are going to die is the best way I know to avoid the trap of thinking you have something to lose. You are already naked. There is no reason not to follow your heart.",
        likes: 0
    },
    {
        id: 3,
        author: 'Steve Jobs',
        quote: "Be a yardstick of quality. Some people aren't used to an environment where excellence is expected.",
        likes: 0
    },
    {
        id: 4,
        author: 'Steve Jobs',
        quote: "You can't connect the dots looking forward; you can only connect them looking backwards. So you have to trust that the dots will somehow connect in your future. You have to trust in something — your gut, destiny, life, karma, whatever. This approach has never let me down, and it has made all the difference in my life.",
        likes: 0
    },
    {
        id: 5,
        author: 'Steve Jobs',
        quote: "Being the richest man in the cemetery doesn't matter to me … Going to bed at night saying we've done something wonderful … that's what matters to me.",
        likes: 0
    },
    {
        id: 6,
        author: 'Steve Jobs',
        quote: "I'm as proud of many of the things we haven't done as the things we have done. Innovation is saying no to a thousand things.",
        likes: 0
    },
    {
        id: 7,
        author: 'Golda Meir',
        quote: "Authority poisons everybody who takes authority on himself.",
        likes: 0
    },
    {
        id: 8,
        author: 'Golda Meir',
        quote: "Not being beautiful was the true blessing. Not being beautiful forced me to develop my inner resources. The pretty girl has a handicap to overcome.",
        likes: 0
    },
    {
        id: 9,
        author: 'Golda Meir',
        quote: "Peace will come when the Arabs will love their children more than they hate us.",
        likes: 0
    },
    {
        id: 10,
        author: 'Golda Meir',
        quote: "Don't be humble...you're not that great.",
        likes: 0
    },
]

console.log(quotes)

let container = document.getElementById('container')
const wrapper = document.getElementById('wrapper')
const buttonGen = document.getElementById('generate')
let uniq = false
const form = document.getElementById('newQoute')
const buttonAdd = document.getElementById('addQuote')

const buttonCharSpace = document.getElementById('charsSpace')
const buttonNoSpace = document.getElementById('charsNoSpace')
const buttonWords = document.getElementById('words')
const buttonLikes = document.getElementById('likes')

const inputQuote = document.getElementById('quote')
const inputAu = document.getElementById('author')

function getQuote () {
    let Indx =  Math.floor((Math.random() * quotes.length) + 1)-1;
    console.log(Indx)
    return quotes[Indx]
}

buttonAdd.addEventListener('click', (e)=> {
    e.preventDefault()
    let newquote = inputQuote.value
    let newAuthor = inputAu.value
    let newObj = {
        id: quotes.length,
        author: newAuthor,
        quote: newquote,
        likes: 0
    }
    console.log(newObj)
    quotes.push(newObj)
    form.remove()
    let p = document.createElement('p')
    p.textContent = 'New quote Added'
    p.style.color = 'white'
    container.appendChild(p)
    console.log(quotes)

})

buttonGen.addEventListener('click', ()=>{
    wrapper.innerHTML = ''
    buttonCharSpace.textContent =' Number of characters (with space)'
    buttonNoSpace.textContent ='Number of characters (without space)'
    buttonWords.textContent ='Number of words'
    buttonLikes.textContent ='Like'

    let quote = ''
    while (uniq == false){
        quote = getQuote()
        console.log(quote)
        checkQuote(quote)
    }

    let div = document.createElement('section')
    div.id = 'text'
    let pQuote = document.createElement('div')
    pQuote.textContent = quote['quote'] 
    let pAuthor = document.createElement('p')
    pAuthor.textContent = quote['author']
    pAuthor.style.fontSize = '1.5em'
    pAuthor.style.color = 'rgb(95, 226, 206)'
    let pLikes = document.createElement('p')
    pLikes.classList.add('like')
    pLikes.textContent = quote['likes']
    div.append(pQuote,pAuthor)
    wrapper.append(div)
    uniq = false
})

function checkQuote(q){
    let allQuotes = document.querySelector('div')
    console.log(allQuotes)
    if (allQuotes && allQuotes.textContent == q['quote']){
        uniq = false
    } else {
        uniq = true
    }
}

function CharsSpace(){
    let quote = document.querySelector('div').textContent
    let number = quote.length
    buttonCharSpace.textContent = number
}

buttonCharSpace.addEventListener('click', ()=>{
    CharsSpace()
})

function CharsWspace(){
    let quote = document.querySelector('div').textContent.replaceAll(' ', '')
    let number = quote.length
    buttonNoSpace.textContent = number
}

buttonNoSpace.addEventListener('click', ()=>{
    CharsWspace()
})

function Words(){
    let quote = document.querySelector('div').textContent.split(' ')
    let number = quote.length
    buttonWords.textContent = number
}

buttonWords.addEventListener('click', ()=>{
    Words()
})

function like(){
    let quote = document.querySelector('div').textContent
    quotes.forEach(item => {
        if (item['quote'] == quote){
            item.likes +=1
            buttonLikes.textContent = item.likes
        }
    })
}

buttonLikes.addEventListener('click', ()=>{
    like()
})