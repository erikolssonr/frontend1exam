let iconCart = document.querySelector('.icon-cart');
let closeCart = document.querySelector('.closeCart');
let body = document.querySelector('body');
let increaseBtn = document.querySelector('.plus');
let decreaseBtn = document.querySelector('.minus');



function incrementBtnOnClick(e){
    let incrementBtnElement = e.target;
    incrementAmount(incrementBtnElement)
}

function addSnus1Item(){
    let snus1IncBtnElement = document.querySelector('#snus1')
    incrementAmount(snus1IncBtnElement)
}

function addSnus2Item(){
    let snus2IncBtnElement = document.querySelector('#snus2')
    incrementAmount(snus2IncBtnElement)
}

function addSnus3Item(){
    let snus3IncBtnElement = document.querySelector('#snus3')
    incrementAmount(snus3IncBtnElement)
}

function incrementAmount(element){
    let parent = element.parentElement;
    let amountSpan = parent.querySelector('.amount');
    let amount = parseInt(amountSpan.innerHTML);

    if (amount !== null) {
        let newValue = amount;
        newValue++;
        amountSpan.innerHTML = newValue;
    }
}

function decrementAmount(e){
    let test = e.target;
    let parent = test.parentElement;
    let amountSpan = parent.querySelector('.amount');
    let amount = parseInt(amountSpan.innerHTML);

    if (amount) {
        let newValue = amount;
        newValue--;
        amountSpan.innerHTML = newValue;
    }
}

function summarizeTotalCost(){
    
}


iconCart.addEventListener('click', () => {
    body.classList.toggle('showCart');
});

closeCart.addEventListener('click', () => {
    body.classList.toggle('showCart');
});

