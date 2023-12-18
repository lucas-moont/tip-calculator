function createCalculator(calculator) {
  let percentage = 0;
  let bill = 0;
  let numberOfPeople = 1;
  return {
    initiateCalculator() {
      this.tipButtonsClick();
      this.getNumberOfPeople();
      this.customPercentage();
      this.getBill(calculator.querySelector("#billValue"));
    },

    getBill(input) {
      input.addEventListener("input", () => {
        billValue = this.validateFloatNumber(input);
        bill = billValue;
        this.doCalculation();
      });
    },

    validateFloatNumber(input) {
      let inputValue = input.value;
      inputValue = Number(inputValue);
      return inputValue;
    },

    tipButtonsClick() {
      let tipBtns = calculator.querySelectorAll(".tipBtn");
      tipBtns.forEach((item) => {
        item.addEventListener("click", () => {
          this.clearButtons(tipBtns);
          item.classList.add("active");
          percentage = item.innerHTML;
          percentage = percentage.replace("%", "");
          percentage = Number(percentage);
          this.doCalculation();
        });
      });
    },

    customPercentage() {
      let customInput = calculator.querySelector("#customTipInput");
      customInput.addEventListener("keyup", () => {
        percentage = Number(customInput.value);
        this.doCalculation();
      });
    },

    getNumberOfPeople() {
      let numberOfPeopleInput = calculator.querySelector(
        "#numberOfPeopleValue"
      );
      numberOfPeopleInput.addEventListener("keydown", (e) => {
        this.validateNumber(numberOfPeopleInput, e);
      });

      numberOfPeopleInput.addEventListener("keyup", (e) => {
        if(numberOfPeopleInput.value !== ''){
            numberOfPeople = Number(numberOfPeopleInput.value);
        }else{
            numberOfPeople = 1
        }


        this.doCalculation();
      });
    },

    validateNumber(input, event) {
      const allowedKeys = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

      if (
        !allowedKeys.includes(event.key) &&
        event.key !== "Backspace" &&
        event.key !== "Delete"
      ) {
        event.preventDefault();
      }
    },

    doCalculation() {
      let tipPercentage = percentage / 100;
      let tipPerson = (tipPercentage * bill) / numberOfPeople;
      let total = bill / numberOfPeople;

      calculator.querySelector("#totalResult span").innerHTML =
        total.toFixed(2);
      calculator.querySelector("#tipAmountResult span").innerHTML =
        tipPerson.toFixed(2);
    },

    clearButtons(arrayOfButtons) {
      arrayOfButtons.forEach((element) => {
        element.classList.remove("active");
      });
    },
  };
}

let tipCalculatorDisplay = document.querySelector(".calculatorWrapper");
let tipCalculator = createCalculator(tipCalculatorDisplay);
tipCalculator.initiateCalculator();
