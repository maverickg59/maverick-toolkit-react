const initialState = {
  purchase: {
    purchasePrice: '$350000.00',
    useLoan: true,
    moneyDownPercent: 20,
    rate: 4.5,
    term: 30,
    closingCosts: 3000,
    needsRepair: false,
  },
  expense: {
    propertyTax: {
      annualTaxCost: 1500,
      annualTaxIncrease: 3,
    },
    insurance: {
      annualInsuranceCost: 800,
      annualInsuranceIncrease: 3,
    },
    hoaFee: {
      annualHOACost: 0,
      annualHOAIncrease: 0,
    },
    managementFee: 0,
    maintenance: {
      annualMaintCost: 1000,
      annualMaintIncrease: 3,
    },
    otherCosts: {
      annualOtherCost: 200,
      annualOtherCostIncrease: 3,
    },
  },
  income: {
    monthlyRent: {
      rentIncome: 1000,
      annualRentIncrease: 3,
    },
    otherIncome: {
      otherIncome: 1000,
      annualOtherIncomeIncrease: 3,
    },
    vacancyRate: 3,
  },
  divestiture: {
    salesPriceKnown: false,
    appreciation: 3,
    holdingPeriod: 20,
    sellClosingCosts: 8,
  },
}

export default initialState
