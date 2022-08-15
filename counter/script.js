const counter = document.querySelector('.mainCounter');



// const incrementBtn = document.querySelector('#incrementBtn');
// incrementBtn.addEventListener('click', increment);

// let value = 0;

// function increment() {
//     value += 1;
//     counter.textContent = value;
// }

// const resetBtn = document.querySelector('#resetBtn');
// resetBtn.addEventListener('click', reset)

// function reset () {
//     value = 0;
//     counter.textContent = value;
// }

// const decrementBtn = document.querySelector('#decrementBtn');
// decrementBtn.addEventListener('click', decrement);

// function decrement() {
//     value -= 1;
//     counter.textContent = value;
// }





const allBtns = document.querySelector('#allBtns');
allBtns.addEventListener('click', counting);

let value = 0;

function counting(e) {
    const btn = e.target.id;
    if (btn === 'incrementBtn') {
        value += 1;
    } else if (btn === 'decrementBtn') {
        value -= 1;
    } else {
        value = 0;
    }
    counter.textContent = value;
}