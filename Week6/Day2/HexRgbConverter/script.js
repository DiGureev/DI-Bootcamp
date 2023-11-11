const hex = {
    '0': '0',
    '1': '1',
    '2': '2',
    '3': '3',
    '4': '4',
    '5': '5',
    '6': '6',
    '7': '6',
    '8': '8',
    '9': '9', 
    '10': 'A', 
    '11': 'B', 
    '12': 'C', 
    '13': 'D', 
    '14': 'E',
    '15': 'F'
}



function rgbToHex(rgb){
    let rgbColor = rgb.split(', ')
    let hexResult = '#'
    let values = Object.values(hex)

    rgbColor.forEach(element => {
        console.log(element)
        if (values.includes(element)){
            console.log(element)
            hexResult += element + element
        } else {
            let number = Number(element)/16;
            console.log(number)
            let firstDig = String(number).slice(0,2).replace('.', '');
            console.log(firstDig)
            let secondDig = String(((number - Number(firstDig))*16));
            console.log(secondDig)
            hexResult += hex[firstDig]
            hexResult += hex[secondDig]
        }
    });

    console.log(hexResult)
}



function hexToRgb(hexnum){
    let hexString = hexnum.replace('#','').split('')
    let rgbResult = []

    let rgbObj = Object.entries(hex)
    let rgbCheck = Object.fromEntries(rgbObj.map(([key, value]) => [value, key]))
    
    for (let i = 0; i < 3; i++) {
        let checkEl = Number(hexString[0])

        if (!Number.isNaN(checkEl) === true){
            if (hexString[0] === hexString[1]){
                rgbResult.push(String(hexString[0]))
                hexString.splice(0,2)
            } else{
                secondNum = Number(hexString[1])/16
                console.log(secondNum)

                total = (Number(hexString[0]) + secondNum)*16
                console.log(total)

                rgbResult.push(String(total))
                hexString.splice(0,2)
            }
        } else {
            firstChar = hexString[0] //D
            firstNum = Number(rgbCheck[firstChar]) //13
            secondChar = hexString[1] //C
            secondNum = Number(rgbCheck[secondChar])/16 //0.75
            
            total = (firstNum + secondNum)*16
            rgbResult.push(String(total))
            hexString.splice(0,2)
        }
    }

    console.log(rgbResult.join(', '))
}


function convert(str){
    if (str.includes('#')){
        hexToRgb(str)
    } else {
        rgbToHex(str)
    }
}

convert('#FF5466')