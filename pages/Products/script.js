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
        calcTotalCost()
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
        calcTotalCost()
    }
}

function calcTotalCostOfItem(element, amount) {
    let parent = element.parentElement
    let totalPriceElement;
    let totalPriceString;
    let productPrice;
    
    for (let sibling of parent.children){
        if (sibling.classList.contains('totalPrice')){
            totalPriceElement = sibling;
            totalPriceString = totalPriceElement.innerHTML.replace(':', '').replace('-', '').trim();
            productPrice = parseInt(totalPriceString);
            totalCost = productPrice * amount;
            return totalCost;
        }
    }
}

function calcTotalCost() {
    let listCartElement = document.getElementById('listCart')
    let totalCost = 0;

    for (let listCartItem of listCartElement.children){
        let listCartItemQuantityElement;
        
        for (let listCartItemChild of listCartItem.children){
            
            if (listCartItemChild.classList.contains('quantity')) {
                listCartItemQuantityElement = listCartItemChild
                totalCost += calcTotalCostOfItem(listCartItemQuantityElement, listCartItemQuantityElement.querySelector('.amount').innerHTML)
            }
        }
    }
    updateTotalCost(totalCost)
}

function updateTotalCost(totalCost){
    let totalAmountElement = document.querySelector('.totalAmount');
    totalAmountElement.innerHTML = totalCost.toFixed(2) + ' SEK';
}

iconCart.addEventListener('click', () => {
    body.classList.toggle('showCart');
});

closeCart.addEventListener('click', () => {
    body.classList.toggle('showCart');
});


