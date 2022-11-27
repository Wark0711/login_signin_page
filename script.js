const listItem = document.querySelector('[nList]');
const storeItem = document.querySelector('.store')
const btn = document.querySelector('[btn]')
const newList = document.querySelector('[list]')
const storingList = document.querySelector('[lists]')
// const li = document.querySelectorAll('li')
// let listStoringEl = []
// let listSavingElement = []

function addList() {
    let list = document.querySelector('[nList]').value
    if (list.length == 0) {
        console.warn(`Task can't be empty. Add something to it.`)
    }
    else {
        // listStoringEl.push(list);
        let li = document.createElement('li')
        let checkbox = document.createElement('input')
        checkbox.setAttribute('type', 'checkbox')
        checkbox.setAttribute('class', 'check')
        let span = document.createElement('span')
        li.setAttribute('class', 'ilist')
        newList.append(li)
        li.append(checkbox)
        li.append(span)
        span.textContent = list;
    }
}

function removeListItems() {
    let li = document.querySelectorAll('li')
    for (let i = 0; i < li.length; i++) {
        let list = li[i]
        let elementCheck = li[i].children[0].checked;
        if (elementCheck === true) {
            list.remove()
        }
    }
}

function deleteListItem() {
    // let li = document.querySelectorAll('.ilist')
    // li = li[li.length - 1]
    // console.log(li);
    // li.remove()
    // listStoringEl.pop();
    // console.log(listStoringEl);
    removeListItems()
} 

function shiftListItem() {
    let li = document.querySelectorAll('.ilist')
    if (li.length == 0) {
        console.warn(`Task can't be empty. Add something to it.`)
    }
    else {
        // li = li[li.length - 1]
        // li.remove()
        // li.setAttribute('class', 'slist')
        // storingList.append(li)
        for (let i = 0; i < li.length; i++) {
            let list = li[i]
            let elementCheck = li[i].children[0].checked;
            if (elementCheck === true) {
                list.remove()
                list.setAttribute('class', 'slist')
                storingList.append(list)
            }
        }
    }
}
 