let result = document.getElementById('result')
let selectCurFrom = document.getElementById('curFrom')
let selectCurTo = document.getElementById('curTo')
let amount = document.getElementById('amount')
let button = document.getElementById('btn')

let fromIcon = document.getElementById('from')


//Fill the selects with currencies

const getCodes = async () => {
    try {
        let response = await fetch(`https://v6.exchangerate-api.com/v6/c43225650213f10ba0c7a53c/codes`);
        let data = await response.json();
        let curArr = data.supported_codes
        FillCodes(curArr)

    }catch (e) {
        console.log(e);
        }
}


const FillCodes = async (curArr)=>{
    curArr.forEach(currency => {
        let option = document.createElement('option')
        option.setAttribute('value', currency[0])
        option.textContent = currency.join(' - ')

        selectCurFrom.append(option)

        let option2 = document.createElement('option')
        option2.setAttribute('value', currency[0])
        option2.textContent = currency.join(' - ')

        selectCurTo.append(option2)
    });
}

getCodes()

fromIcon.addEventListener('click', ()=>{
    let from = selectCurFrom.value
    let to = selectCurTo.value
    selectCurFrom.value = to
    selectCurTo.value = from
})

//Add button event

button.addEventListener('click', (e)=>{
    e.preventDefault()
    result.innerHTML = ''
    let from = selectCurFrom.value
    let to = selectCurTo.value
    let num = amount.value

    if (from === to){
        result.textContent = 'Choose currency to exchange'
    } else {
        getExchange(from, to, num)
    }
    
})

// Exchange functions

const getExchange = async (curFrom, curTo, amount) => {
    try {let response = await fetch(`https://v6.exchangerate-api.com/v6/c43225650213f10ba0c7a53c/latest/${curFrom}`);
    let data = await response.json();
    let rate = data["conversion_rates"][curTo]

    let sum = count(rate, amount)

    if (Number.isNaN(sum)){
        result.textContent = 'Please, use only numbers'
    } else if (sum === 0){
        result.textContent = 'Enter the amount'
    } else{
        result.textContent = sum
    }

    return sum
    }catch (e) {
        console.log(e);
        }
}

const count = (rate, amount) => rate*amount
