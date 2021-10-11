import React from 'react'
import PropTypes from 'prop-types'

const Expenses = ({ expenses }) => {
  const {
    propertyTax: { annualTaxCost, annualTaxIncrease },
    insurance: { annualInsuranceCost, annualInsuranceIncrease },
    hoaFee: { annualHOACost, annualHOAIncrease },
    maintenance: { annualMaintCost, annualMaintIncrease },
    otherCosts: { annualOtherCost, annualOtherCostIncrease },
    managementFee,
  } = expenses
  return <div></div>
}

Expenses.propTypes = {}

export default Expenses
