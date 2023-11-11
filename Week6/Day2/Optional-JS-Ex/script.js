// Question 1:
// Clean the room function:

// Given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], make a function that organizes these, into individual array that is ordered.

// For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591].

// let ArrayFromAbove = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];

// function answer(arr){
//     let organizeArr = [];
//     let copyArr = [...arr].sort(function(a, b){return a - b})
//     let countaRrr = Array.from(new Set(arr))
//     for (let i = 0; i < countaRrr.length ; i++) {
//         let newArr = copyArr.filter(el => el == copyArr[0])
//         copyArr = copyArr.filter(el => el != copyArr[0])
//         if (newArr.length > 1) {
//             organizeArr.push(newArr)
//         } else if (newArr.length === 1) {
//             organizeArr.push(...newArr)
//         }
//     }
//     console.log(organizeArr)
// }

// answer(ArrayFromAbove)

// Bonus: Make it so it organizes strings differently from number types. i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]

// let ArrayFromAbove = [4, 1, "4", "2", "3", 2];

// function answer(arr){
//     let organizeArr = [];
//     let copyArr = [...arr]
//     for (let i = 0; i < 3 ; i++) {
//         let newArr = copyArr.filter(el => typeof el == typeof copyArr[0]).sort(function(a,b){return a-b})
//         copyArr = copyArr.filter(el => typeof el != typeof copyArr[0])
//         if (newArr.length > 1) {
//             organizeArr.push(newArr)
//         } else if (newArr.length === 1) {
//             organizeArr.push(...newArr)
//         }
//     }
//     console.log(organizeArr)
// }

// answer(ArrayFromAbove)

// Question 2:
// Write a javascript function that takes an array of numbers and a target number.

// The function should find two different numbers in the array that, when added together, give the target number.

// For example: answer([1,2,3], 4) should return [1,3]
// function answer(arr, number) {
//     result = []

//     arr.forEach((element, index1) => {
//         arr.forEach((el,index2) => {
//             if (index1 != index2 && element + el == number){
//                 newArr = [element, el].sort(function(a,b){return a-b})
//                     if (result.length > 0){
//                         result.forEach(item => {
//                         if (item.toString() != newArr.toString()){
//                             result.push(newArr)
//                         }
//                     })} else {
//                         result.push(newArr)
//                     }
//             }
//         })
//     })
//     console.log(result)
// }

// answer([2,3,1], 4)


// Question 3:
// Write a function that converts HEX to RGB.

// Then Make that function auto-detect the formats so that if you enter HEX color format it returns RGB and if you enter RGB color format it returns HEX

let hex = {
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