const disp = document.getElementById('display')
const sine = document.getElementById('n2')
const cosine = document.getElementById('n3')
const tan = document.getElementById('n4')
const log = document.getElementById('n5')
const ln = document.getElementById('n6')
const sqRoot = document.getElementById('n7')
const power = document.getElementById('n8')
const square = document.getElementById('n9')
const fact = document.getElementById('n10')
const inv = document.getElementById('n11')
const leftP = document.getElementById('n12')
const rightP = document.getElementById('n13')
const del = document.getElementById('n16')
const deci = document.getElementById('n14')
const clear = document.getElementById('n15')
const equals = document.getElementById('n18')
const plus = document.getElementById('n17')
const minus = document.getElementById('n19')
const multi = document.getElementById('n20')
const div = document.getElementById('n21')
const six = document.getElementById('n22')
const seven = document.getElementById('n23')
const eight = document.getElementById('n24')
const nine = document.getElementById('n25')
const five = document.getElementById('n26')
const four = document.getElementById('n27')
const three = document.getElementById('n28')
const two = document.getElementById('n29')
const euler = document.getElementById('n30')
const pi = document.getElementById('n31')
const zero = document.getElementById('n32')
const one = document.getElementById('n33')
let z = '';

function displayElement(item) {
    item.addEventListener('click', e => {
        if (item.innerText === 'e') {
            let val = 'Math.E'
            disp.innerText += item.innerText
            z += val
        }
        else if (item.innerText === 'π') {
            let val = 'Math.PI'
            disp.innerText += item.innerText
            z += val
        }
        else {
            disp.innerText += item.innerText
            z += item.innerText
        }
    })
}

function clrScr(p) {
    p.addEventListener('click', e => {
        disp.innerText = ""
        z = ""
    })
}

function delStr(p) {
    p.addEventListener('click', e => {
        let dispLength = disp.innerText.length
        if (dispLength > 0) {
            disp.innerText = disp.innerText.slice(0, dispLength - 1)
            z = disp.innerText
        }
    })
}

function equalsTo(x) {
    x.addEventListener('click', e => {
        disp.innerText = eval(z)
        z = disp.innerText
        // console.log(z);
    })
}

function Sin(x) {
    x.addEventListener('click', e => {
        disp.innerText = eval(Math.sin(disp.innerText))
        z = disp.innerText
    })
}

function Cos(x) {
    x.addEventListener('click', e => {
        console.log(disp.innerText);
        disp.innerText = eval(Math.cos(disp.innerText))
        z = disp.innerText
    })
}

function Tan(x) {
    x.addEventListener('click', e => {
        disp.innerText = eval(Math.tan(disp.innerText))
        z = disp.innerText
    })
}

function Log10(x) {
    x.addEventListener('click', e => {
        disp.innerText = eval(Math.log10(disp.innerText))
        z = disp.innerText
    })
}

function Loge(x) {
    x.addEventListener('click', e => {
        disp.innerText = eval(Math.log(disp.innerText))
        z = disp.innerText
    })
}

function squareRoot(x) {
    x.addEventListener('click', e => {
        let sqrt = Number(disp.innerText)
        disp.innerText = eval(Math.sqrt(sqrt))
        z = disp.innerText
    })
}

function cubeRoot(x) {
    x.addEventListener('click', e => {
        let cubrt = Number(disp.innerText)
        disp.innerText = eval(Math.cbrt(cubrt))
        z = disp.innerText
    })
}

function sq(x) {
    x.addEventListener('click', e => {
        let sq = disp.innerText * disp.innerText
        disp.innerText = eval(sq)
        z = disp.innerText
    })
}

function cube(x) {
    x.addEventListener('click', e => {
        let sq = disp.innerText * disp.innerText * disp.innerText
        disp.innerText = eval(sq)
        z = disp.innerText
    })
}

function inverse(p) {
    p.addEventListener('click', e => {
        disp.innerText = eval(1 / z)
        z = disp.innerText
    })
}

displayElement(deci)
displayElement(plus)
displayElement(minus)
displayElement(multi)
displayElement(div)
displayElement(six)
displayElement(seven)
displayElement(eight)
displayElement(nine)
displayElement(two)
displayElement(three)
displayElement(four)
displayElement(five)
displayElement(zero)
displayElement(one)
displayElement(leftP)
displayElement(rightP)
displayElement(pi)
displayElement(euler)
clrScr(clear)
delStr(del)
equalsTo(equals)
inverse(inv)
sq(square)
squareRoot(sqRoot)
cubeRoot(power)
cube(fact)
Sin(sine)
Cos(cosine)
Tan(tan)
Log10(log)
Loge(ln)




