import React from 'react'
import PropTypes from 'prop-types'

const Expense = ({ expense }) => {
  const {
    propertyTax: { annualTaxCost, annualTaxIncrease },
    insurance: { annualInsuranceCost, annualInsuranceIncrease },
    hoaFee: { annualHOACost, annualHOAIncrease },
    maintenance: { annualMaintCost, annualMaintIncrease },
    otherCosts: { annualOtherCost, annualOtherCostIncrease },
    managementFee,
  } = expense
  return <div></div>
}

Expense.propTypes = {}

export default Expense
