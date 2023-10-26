//Calendar online

function createCalendar(year, month){
    const body = document.querySelector('body')
    const table = document.createElement('table')
    table.style.width = '80vw'

    body.append(table)

    const checkMonth = {
        '1': 31,
        '2': 0,
        '3': 31,
        '4':30,
        '5': 31,
        '6':30,
        '7':31,
        '8':31,
        '9':30,
        '10':31,
        '11': 30,
        '12': 31,
    }

    checkFabruary(year)

    const checkDay = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    

    function checkFabruary(year){
        if (year%4 == 0){
            checkMonth[2] = 29
        } else {
            checkMonth[2] = 28
        }
    }

    function checkWeeks(month){
        index = 0
        checkDay.forEach((item, i)=>{
            if (item == firstDay(year, month)){
                index = i
            }
        })
        return Math.ceil((checkMonth[month] + index)/7)
    }

    function firstDay(year,month){
        let dateStart = new Date(year,month-1);
        return dateStart.toString().slice(0,3)
    }


    function createTable () {
        let rowClass = 1
        let index = 0
        let tr = document.createElement('tr')
        for(i = 0; i < 7; i++){
            let th = document.createElement('th')
            th.append(document.createTextNode(checkDay[index]))
            index +=1
            tr.append(th)
        }
        tr.classList.add('header')
        tr.style.backgroundColor = 'lightgreen'
        table.append(tr)

        for (i = 0; i < checkWeeks(month); i++){
            let tr = document.createElement('tr')
            if (rowClass%2 == 0){
                tr.style.backgroundColor = 'lightblue'
            }
            tr.classList.add(rowClass)
            rowClass +=1
            for(a = 0; a < 7; a++){
                let td = document.createElement('td')
                tr.append(td)
            }
            table.append(tr)
        }
    }


    function findStartCell(){
        let targetIndex = 0
        checkDay.forEach((item, index) => {
            if (item == firstDay(year, month)){
                targetIndex = index
            }
        })
        return targetIndex
    }


    function fillTable(){
        let day = 1
        for (i = findStartCell(); i < checkMonth[month]+findStartCell(); i++){
            tdList[i].append(document.createTextNode(day))
            day += 1
        }
        
    }

    
    createTable()
    let tdList = document.querySelectorAll('td')
    fillTable()
    
}


createCalendar(2023, 12)
