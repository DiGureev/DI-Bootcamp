//Calculate The Tip
// let each = document.getElementById('each')
// let span = document.getElementById('tip')

// let calculateBtn = document.getElementById('calculate')

// let totalTip = document.getElementById('totalTip')
// totalTip.style.display = ('block', 'none')

// calculateBtn.addEventListener('click', ()=> {
//     calculateTip()
// })

// function calculateTip(){
//     let numberOfPeople = document.getElementById('peopleamt').value
//     let billAmt = document.getElementById('billamt').value
//     let serviceQuality = document.getElementById('serviceQual').value
//     console.log(serviceQuality)
//     console.log(billAmt)
//     if (serviceQuality == '0' || billAmt == ''){
//         alert('Please, enter service quality and bill amount')
//     } else {
//         if (numberOfPeople === '' || numberOfPeople < 1){
//             numberOfPeople = 1
//             each.style.display = 'none'
//         }
    
//         let total = (( billAmt * serviceQuality ) / numberOfPeople).toFixed()
        
//         span.textContent = total
//         totalTip.style.display = 'block'
//     }

// }

// Exercise 2 : Validate The Email

// We will create a form that ask the user for their email. Then, using a function we will check the validity of the user’s input.

// Add an input that has a type="email" to your form.

let email = document.querySelector('input')
let subButton = document.querySelector('button')

// Write your own javascript validation function to check if the entered value is a valid email address. The address should contain some valid characters, and the @ sign, more characters then a . (period) and some more characters.

// subButton.addEventListener('click', (e)=>{
//     e.preventDefault()
//     checkEmail()
// })

// function checkEmailRegex(){
//         let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      
//         if (email.value.match(validRegex) && email.value.includes("..") === false) {
      
//           alert("Valid email address!");
      
//         } else {
      
//           alert("Invalid email address!");
      
//         }
// }

// function checkEmail(){  
//     let shtrudel = email.value.indexOf("@"); 
//     let dot = email.value.lastIndexOf("."); 
//     let space = email.value.indexOf(" "); 
//     let doubledot = email.value.includes("..")

//     let lenUsername = email.value.slice(0, shtrudel)
  
//     if ((lenUsername.length > 2) &&
//         (shtrudel != -1 || shtrudel != 0) && 
//         (dot != -1 || dot != 0) && 
//         (dot > shtrudel + 1) && 
//         (email.value.length > dot + 1) && 
//         (space == -1)&&
//         (doubledot === false)){ 
//         alert("Valid email address!"); 
//         } else { 
//         alert("Invalid email address!"); 
//     } 
// }


// On “submit”, the validation function should run and validate the email address.
// Try to do this exercise twice : with and without regex.


//Exercise 3 : Get The User’s Geolocation Coordinates
// let btn = document.querySelector('button')
// let body = document.querySelector('body')

// btn.addEventListener('click', ()=>{
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(getPos, error);
//       } else {
//         console.log("Geolocation is not supported by this browser.");
//       }
    
//     function getPos(position) {
//         let lat = document.createElement('div');
//         lat.textContent = position['coords']['latitude'];

//         let long = document.createElement('div');
//         long.textContent = position['coords']['longitude'];
//         body.append(lat,long);
//     }
    
//     function error() {
//         console.log("Unable to retrieve your location.");
//     }
// })
