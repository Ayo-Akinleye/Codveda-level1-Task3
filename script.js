const displayNum = document.querySelector('.display-number')
const increase = document.querySelector('.inc');
const decrease = document.querySelector('.dec');
const reset = document.querySelector('.reset');

let count = 0;

const updateDisplay = () => {
    displayNum.textContent = count;
};

const handleIncrease = () => {
    count++
    updateDisplay()
}

const handleDecrease = () => {
    if (count > 0) {
        count--
        updateDisplay()
    }
}

const handleReset = () => {
    count = 0
    updateDisplay()
}

increase.addEventListener('click', handleIncrease);
decrease.addEventListener('click', handleDecrease);
reset.addEventListener('click', handleReset);