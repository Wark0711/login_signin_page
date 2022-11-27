const days = document.querySelector('.date-section');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const currentMonth = document.querySelector('.date');
const cDate = document.querySelector('.cdate')
const currDate = document.getElementsByClassName('dateVal')
const today = new Date();
let td = new Date().toDateString();
let month = new Date().getMonth();
let year = new Date().getFullYear();
wday = new Date().getDay()
let aray = []
let cdim

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const weekDay = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
currentMonth.innerText = `${months[new Date().getMonth()]} ${new Date().getFullYear()}`
cDate.innerText = td

function addInArray(a, b, arrays) {
    for (let i = a; i <= b; i++) {
        arrays.push(i)
    }
}

addInArray(1,30,aray)

function getDaysInMonth(years, months) {
    cdim = new Date(years, months, 0).getDate();
}

getDaysInMonth(year,month+1)

function createDateValues(val) {
    val.forEach(element => {
        let div = document.createElement('div')
        days.append(div)
        div.setAttribute('class', 'dateVal')
        div.innerText = element
    });
}
createDateValues(weekDay)
adjustDayDate()
createDateValues(aray)

for (let i = 0; i < weekDay.length; i++) {
    currDate[i].style.fontWeight = 'bold'
}

function highlightDate(y,m) {
    for (let i = 0; i < currDate.length; i++) {
        if (currDate[i].innerText == new Date().getDate() && m === new Date().getMonth() && y === new Date().getFullYear()) {
            currDate[i].style.backgroundColor = 'gold'
            currDate[i].style.fontWeight = 'bold'
            // currDate[i].style.border = '.1rem solid black'
            break
        }
    }
}

highlightDate(year,month)

function removeEl(val) {
    for (let i = 7; i < val + 7 + new Date(year,month,1).getDay(); i++) {
        const element = currDate[7];
        // console.log(element)
        element.remove()
    }  
}

prev.addEventListener('click', e => {
    removeEl(cdim)
    month -= 1;
    date = new Date(year, month)
    adjustDayDate()
    let arais = []
    getDaysInMonth(year,month+1)
    addInArray(1, cdim, arais)
    // console.log(arais)
    createDateValues(arais)
    currentMonth.innerText = `${months[date.getMonth()]} ${date.getFullYear()}`;
    highlightDate(year,month)
})

next.addEventListener('click', e => {
    removeEl(cdim)
    month += 1;
    date = new Date(year, month)
    adjustDayDate()
    let arais = []
    getDaysInMonth(year,month+1)
    addInArray(1, cdim, arais)
    createDateValues(arais)
    // console.log(arais)
    currentMonth.innerText = `${months[date.getMonth()]} ${date.getFullYear()}`
    highlightDate(year,month)
})

function adjustDayDate(){
    for (let i = 0; i < new Date(year,month,1).getDay(); i++) {
        let div = document.createElement('div')
        days.append(div)
        div.setAttribute('class', 'dateVal')
    }
}