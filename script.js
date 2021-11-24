const calcButton = document.querySelector(".calculator-button");

const monthlyPaymentTotalA = () => {
  const mortgageInYearsA = document.querySelector(
    ".mortgage-term-example-one"
  ).value;
  const loanAmount = document.querySelector(".loan__amount").value;
  const interestRatePercentage =
    document.querySelector(".interest__rate").value;
  const interestPerMonth = interestRatePercentage / 1200;
  const mortgageTermAinMonths = mortgageInYearsA * 12;
  const mortgageAoutput = document.querySelector(
    ".monthly-mortgage-payment-example-one-output"
  );
  const totalCostMortgageTermA = document.querySelector(
    ".total-cost-over-mortgage-term-one-output"
  );
  const totalCostMortgageTermB = document.querySelector(
    ".total-cost-over-mortgage-term-two-output"
  );

  const calcAPayment =
    (loanAmount *
      (interestPerMonth *
        Math.pow(1 + interestPerMonth, mortgageTermAinMonths))) /
    (Math.pow(1 + interestPerMonth, mortgageTermAinMonths) - 1);
  mortgageAoutput.innerHTML = calcAPayment.toFixed(1);

  const mortgageInYearsB = document.querySelector(
    ".mortgage-term-example-two"
  ).value;
  const mortgageTermBinMonths = mortgageInYearsB * 12;
  const mortgageBoutput = document.querySelector(
    ".monthly-mortgage-payment-example-two-output"
  );

  const calcBPayment =
    (loanAmount *
      (interestPerMonth *
        Math.pow(1 + interestPerMonth, mortgageTermBinMonths))) /
    (Math.pow(1 + interestPerMonth, mortgageTermBinMonths) - 1);
  mortgageBoutput.innerHTML = calcBPayment.toFixed(1);

  const monthlySavingComparison = document.querySelector(
    ".monthly-saving-output"
  );

  const calcMonthlyDifference = () => {
    if (calcAPayment >= calcBPayment) {
      monthlySavingComparison.innerHTML = parseInt(calcAPayment - calcBPayment);
    } else if (calcBPayment >= calcAPayment) {
      monthlySavingComparison.innerHTML = parseInt(calcBPayment - calcAPayment);
    }
    console.log(monthlySavingComparison);
    return calcMonthlyDifference;
  };

  calcMonthlyDifference();

  const calcExampleATotalYearsAmount = () => {
    totalCostMortgageTermA.innerHTML = parseInt(
      calcAPayment * 12 * mortgageInYearsA
    );
  };

  calcExampleATotalYearsAmount();

  const calcExampleBTotalYearsAmount = () => {
    totalCostMortgageTermB.innerHTML = parseInt(
      calcBPayment * 12 * mortgageInYearsB
    );
  };

  calcExampleBTotalYearsAmount();
};

calcButton.addEventListener("click", monthlyPaymentTotalA);
// calcButton.addEventListener("click", monthlyPaymentTotalB);
