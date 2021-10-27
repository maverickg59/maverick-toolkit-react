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
    vacancyRatePercent: 3,
  },
  divestiture: {
    isSalePriceKnown: false,
    sellingPrice: '',
    annualAppreciation: '',
    holdingPeriodYears: '',
    sellingCostPercent: '',
  },
}

export default initialState
