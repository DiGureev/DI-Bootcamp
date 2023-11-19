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

const wrapper = document.getElementById('wrapper')
const SearchBtn = document.getElementById('search')
const prevBtn = document.getElementById('prev')
const nextBtn = document.getElementById('next')

prevBtn.style.display = 'none'
nextBtn.style.display = 'none'


SearchBtn.addEventListener('click', (e) => {
    e.preventDefault()
    let input = e.target.form[0].value
    let filtered = quotes.filter(item => item.author.toLowerCase().includes(input.toLowerCase()))
    console.log(filtered)
    if (filtered.length == 0){
        let divQuote = document.createElement('div')
        divQuote.textContent = 'No quotes of this author'
    } else {
        prevBtn.style.display = ''
        nextBtn.style.display = ''

        let divQuote = document.createElement('div')
        divQuote.textContent = filtered[0].quote
        divQuote.id = 'curQuote'

        let divAuthor = document.createElement('div')
        divAuthor.textContent = filtered[0].author
        wrapper.append(divQuote, divAuthor)

        prevBtn.addEventListener('click', () => {
            let curQuote = document.getElementById('curQuote')
            console.log(curQuote)

            let Indx = filtered.findIndex(item => item.quote == curQuote.textContent)

            console.log(Indx)
            if (Indx == 0){
                let checkNo = document.getElementById('divNo')
                if(!checkNo){
                    let divNo = document.createElement('div')
                    divNo.textContent = 'No previous quotes'
                    divNo.id = 'divNo'
                    wrapper.append(divNo)
                }
                
            } else{
                wrapper.innerHTML = ''
                let divQuote = document.createElement('div')
                divQuote.textContent = filtered[Indx-1].quote
                divQuote.id = 'curQuote'
    
                let divAuthor = document.createElement('div')
                divAuthor.textContent = filtered[Indx-1].author
                wrapper.append(divQuote, divAuthor)
            }  
        })
    
        nextBtn.addEventListener('click', () => {
            let curQuote = document.getElementById('curQuote')
            console.log(curQuote)

            let Indx = filtered.findIndex(item => item.quote == curQuote.textContent)

            console.log(Indx)

            if (Indx == filtered.length-1){
                let checkNo = document.getElementById('divNo')

                if(!checkNo){
                    let divNo = document.createElement('div')
                    divNo.textContent = 'No more quotes'
                    divNo.id = 'divNo'
                    wrapper.append(divNo)
                }
            } else{
                wrapper.innerHTML = ''
                let divQuote = document.createElement('div')
                divQuote.textContent = filtered[Indx+1].quote
                divQuote.id = 'curQuote'
    
                let divAuthor = document.createElement('div')
                divAuthor.textContent = filtered[Indx+1].author
                wrapper.append(divQuote, divAuthor)
            }  
        })
    }


   
})