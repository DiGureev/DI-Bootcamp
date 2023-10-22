let userAnswer = prompt('Give me the words, separated by comma')
console.log(userAnswer)
userAnswer = userAnswer.split(',')
console.log(userAnswer)

let longWord = 'i'
let star = '*'
let space = ' '

for (let item of userAnswer){
    item = item.replace(' ','')
    if (item.length > longWord.length){
        longWord = item
    }
}

function stars() {
    console.log(star.repeat(longWord.length+2))
    for (let item of userAnswer){
        item = item.replace(' ','')
        if (item.length == longWord.length){
            console.log(star+item+star)
        } else {
            console.log(star+item+space.repeat(longWord.length - item.length) + star)
        }
    }
    console.log(star.repeat(longWord.length+2))
}

stars()


