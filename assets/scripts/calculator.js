function createCalculator(calculator){
    return {
        initiateCalculator(){
            this.tipButtonsClick()
        },

        tipButtonsClick(){
            let tipBtns = calculator.querySelectorAll('.tipBtn')
            tipBtns.forEach(item => {
                item.addEventListener('click', () => {
                    this.clearButtons(tipBtns)
                    item.classList.add('active')
                    let percentage = item.innerHTML
                    percentage = percentage.replace('%', '')
                    percentage = Number(percentage)
                    
                })
            })
        },

        clearButtons(arrayOfButtons){
            arrayOfButtons.forEach(element => {
                element.classList.remove('active')
            });
        }
    }
}

let tipCalculatorDisplay = document.querySelector('.calculatorWrapper')
let tipCalculator = createCalculator(tipCalculatorDisplay)
tipCalculator.initiateCalculator()