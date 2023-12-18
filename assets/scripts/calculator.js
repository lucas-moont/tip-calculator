function createCalculator(calculator) {
  let percentage = 0;
  let bill = 0;
  let numberOfPeople = 1;
  return {
    initiateCalculator() {
      this.tipButtonsClick();
      this.getNumberOfPeople();
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

    getNumberOfPeople() {
      let numberOfPeopleInput = calculator.querySelector(
        "#numberOfPeopleValue"
      );
      numberOfPeopleInput.addEventListener("keydown", (e) => {
        this.validateNumber(numberOfPeopleInput, e);
      });

      numberOfPeopleInput.addEventListener("keyup", (e) => {
        numberOfPeople = Number(numberOfPeopleInput.value);

        this.doCalculation()
      })
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
      bill = 100;
      let tipAmount = (tipPercentage * bill);
      let tipPerson = (tipPercentage * bill) / numberOfPeople
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
