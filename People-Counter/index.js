let count = 0;
let total = 0;
let entriesEl = document.getElementById('entries')
let countEl = document.getElementById('count-el')
let saveEl  =document.getElementById('save-el')
let totalEl =document.getElementById('total')


function increment(){
    count += 1;
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    entriesEl.textContent += countStr
    total += Number(count);
    totalEl.textContent = "Total Sum:" + total
    countEl.textContent = 0
    count = 0
}

function reset(){
    countEl.textContent =  0
    totalEl.textContent = 'Total Sum:' 
    count = 0
    total = 0
    entriesEl.innerHTML = "<strong>Previous entries: </strong>"
    

}