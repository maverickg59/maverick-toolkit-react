import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { ApplicationContext } from '../RentalCalculator'
import { Button } from '../../../..'

const Results = ({ state }) => {
  const { resultsDispatch, constants } = useContext(ApplicationContext)
  const { FIRST_LEVEL_PROPERTY, RESULTS_CALCULATED } = constants
  const {
    resultsCalculated,
    annualIncome,
    annualMortgagePayments,
    annualVacancyCost,
    annualPropertyTaxCost,
    annualInsuranceCost,
    annualMaintenanceCost,
    annualOtherCost,
    annualCashFlow,
    annualNetOperatingIncome,
    annualInternalRateOfReturn,
    totalProfitUponSale,
    cashOnCashReturn,
    capitalizationRate,
    totalRentalIncome,
    totalMortgagePayments,
    totalExpenses,
    totalNetOperatingIncome,
  } = state
  // { type, parent, child, payload }
  return (
    <div className='o-row__item u-1/1'>
      <Button
        onClick={() =>
          resultsDispatch(
            FIRST_LEVEL_PROPERTY,
            RESULTS_CALCULATED,
            !resultsCalculated
          )
        }
        color='success'>
        Show Calculator
      </Button>
    </div>
  )
}

Results.propTypes = {}

export default Results
