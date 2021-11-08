

const calcButton = document.querySelector(".calculator-button");


const monthlyPaymentTotal= () => {  
const mortgageInYearsA = document.querySelector(".mortgage-term-example-one").value;
const loanAmount = document.querySelector(".loan__amount").value;
const interestRatePercentage = document.querySelector(".interest__rate").value; 
const interestPerMonth = interestRatePercentage / 1200;
const mortgageTermAinMonths = mortgageInYearsA * 12;
const mortgageAoutput = document.querySelector(".monthly-mortgage-payment-example-one-output")

	const calcPayment = loanAmount*(interestPerMonth * Math.pow((1 + interestPerMonth), mortgageTermAinMonths))/(Math.pow((1 + interestPerMonth), mortgageTermAinMonths) - 1);
  mortgageAoutput.innerHTML = calcPayment.toFixed(1);
  
  console.log(calcPayment)
  
  return calcPayment
}

calcButton.addEventListener("click", monthlyPaymentTotal)

