const initialState = {
  purchase: {
    purchasePrice: '',
    loan: {
      useLoan: true,
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
      annualTaxCost: '',
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
      annualOtherExpenses: '',
      annualOtherExpensesIncrease: '',
    },
    managementExpenses: '',
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
