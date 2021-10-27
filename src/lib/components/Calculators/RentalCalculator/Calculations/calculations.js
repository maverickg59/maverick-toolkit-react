// calculate
// annual income
// annual mortgage payments
// annual vacancy cost
// annual property tax cost
// annual insurance cost
// annual maintenance cost
// annual other cost
// annual cash flow
// annual net operating income

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
