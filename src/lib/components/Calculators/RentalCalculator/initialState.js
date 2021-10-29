export const calculatorInitialState = {
  purchase: {
    purchasePrice: '',
    loan: {
      usesLoan: true,
      moneyDownPercent: '',
      rate: '',
      term: '',
    },
    closingCosts: '',
    repair: {
      needsRepair: true,
      repairCosts: '',
      postRepairValue: '',
    },
  },
  expenses: {
    propertyTaxExpenses: {
      annualPropertyTaxCost: '',
      annualTaxIncrease: '',
    },
    insuranceExpenses: {
      annualInsuranceCost: '',
      annualInsuranceIncrease: '',
    },
    hoaExpenses: {
      annualHOACost: '',
      annualHOAIncrease: '',
    },
    maintenanceExpenses: {
      annualMaintenanceCost: '',
      annualMaintenanceIncrease: '',
    },
    otherExpenses: {
      annualOtherCost: '',
      annualOtherCostIncrease: '',
    },
    managementExpenses: '',
  },
  income: {
    monthlyRentalIncome: {
      monthlyRentalIncome: '',
      annualRentalIncomeIncrease: '',
    },
    monthlyOtherIncome: {
      monthlyOtherIncome: '',
      annualOtherIncomeIncrease: '',
    },
    vacancyRatePercent: '',
  },
  divestiture: {
    isSalePriceKnown: true,
    sellingPrice: '',
    annualAppreciation: '',
    holdingPeriodYears: '',
    sellingCostPercent: '',
  },
}

export const resultsInitialState = {
  resultsCalculated: false,
  annualIncome: 12,
  annualMortgagePayments: 0,
  annualVacancyCost: 0,
  annualPropertyTaxCost: 0,
  annualInsuranceCost: 0,
  annualMaintenanceCost: 0,
  annualOtherCost: 0,
  annualCashFlow: 0,
  annualNetOperatingIncome: 0,
  annualInternalRateOfReturn: 0,
  totalProfitUponSale: 0,
  cashOnCashReturn: 0,
  capitalizationRate: 0,
  totalRentalIncome: 0,
  totalMortgagePayments: 0,
  totalExpenses: 0,
  totalNetOperatingIncome: 0,
}
