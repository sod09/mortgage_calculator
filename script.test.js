import { monthlyPaymentAmountWithInterest } from "./script"

describe ("Should return monthly payment", () => {
  test ("25 years", () => {
    expect (monthlyPaymentAmountWithInterest(25, 3.5).toEqual(751))
  })
})

