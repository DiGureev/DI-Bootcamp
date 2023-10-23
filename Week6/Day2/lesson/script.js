// const form = document.forms.my;

// function getUserComment(e){
//     e.preventDefault();
//     console.log(e.target);
// }

// form.addEventListener("submit", getUserComment);

// let table = document.querySelector('#sampleTable')
// let rowNumber = 3

// function insertRow(){
//     let rowCell1 = document.createElement('td')
//     let rowCell2 = document.createElement('td')
//     let row = document.createElement('tr')
//     rowCell1.textContent = `Row ${rowNumber} cell1`
//     rowCell2.textContent = `Row ${rowNumber} cell2`
//     row.append(rowCell1)
//     row.append(rowCell2)
//     table.append(row)
//     rowNumber +=1
// }

// let x = document.getElementById("btn");
// let y = document.getElementById("btn1");

// y.addEventListener("click", RespondClick);
// y.addEventListener("mouseover", RespondMouseOver);

// x.addEventListener("click", RespondClick);
// x.addEventListener("mouseover", RespondMouseOver);
// x.addEventListener("mouseout", RespondMouseOut);

// function RespondClick() {
//   alert("Button Clicked");
// }

// function RespondMouseOver() {
//   alert("My mouse is over the btn");
// }

// function RespondMouseOut() {
//   alert("My mouse is out of the btn");
// }

// function RespondMouseOver(e) {
//   console.log("e", e);
//   // all the properties of the event object
//   console.log("My mouse is over the btn named" + e.target.innerHTML);
//   console.log("e.type: ", e.type);
//   // e.type: mouseover
//   console.log("e.target: ", e.target);
//   // e.target:  <button id=​"btn1">​Hey Hey​</button>​
// }
let x = document.getElementById("jsstyle");
let div = document.querySelector('div')
x.addEventListener('click', newFunction2)
div.addEventListener('click', newFunction1)
x.addEventListener('mouseout', newFunction3)



function newFunction2(e){
    x.style.backgroundColor = 'yellow'
    
}

function newFunction3(e){
    x.style.color = 'red';
    e.stopPropagation()
}

function newFunction1(e){
    div.style.border = '2px solid green'
}

// let x = document.getElementById("btn")
// let y = document.getElementById("div")
// let z = document.getElementById("section")

// x.addEventListener("click", XRespondClick); 
// y.addEventListener("click", YRespondClick); 
// z.addEventListener("click", ZRespondClick); 

// function XRespondClick(e) { 
//     alert("BTN is Clicked")
//     e.stopPropagation()
// }    

// function YRespondClick(e) { 
//     alert("DIV is Clicked")
// }    

//  function ZRespondClick(e) { 
//     alert("SECTION is Clicked")
// }  