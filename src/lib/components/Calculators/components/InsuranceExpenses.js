import React from 'react'
import PropTypes from 'prop-types'
import { CurrencyInput, PercentInput } from '../../..'

const InsuranceExpenses = ({
  dispatch,
  constants,
  insuranceExpenses: { annualInsuranceCost, annualInsuranceIncrease },
}) => {
  const {
    THIRD_LEVEL_PROPERTY,
    EXPENSE,
    ANNUAL_INSURANCE_EXPENSES,
    ANNUAL_INSURANCE_COST,
    ANNUAL_INSURANCE_COST_INCREASE,
  } = constants
  return (
    <div className='o-row'>
      <div className='o-row__item u-2/3'>
        <CurrencyInput
          type='text'
          placeholder={constants.ANNUAL_INSURANCE_COST_PLACEHOLDER}
          label={constants.ANNUAL_INSURANCE_EXPENSES_LABEL}
          value={annualInsuranceCost}
          name={constants.ANNUAL_INSURANCE_COST_NAME}
          onChange={dispatch(
            THIRD_LEVEL_PROPERTY,
            EXPENSE,
            ANNUAL_INSURANCE_EXPENSES,
            ANNUAL_INSURANCE_COST
          )}
        />
      </div>
      <div className='o-row__item u-1/3'>
        <PercentInput
          type='text'
          placeholder={constants.ANNUAL_INSURANCE_COST_INCREASE_PLACEHOLDER}
          value={annualInsuranceIncrease}
          name={constants.ANNUAL_INSURANCE_COST_INCREASE_NAME}
          onChange={dispatch(
            THIRD_LEVEL_PROPERTY,
            EXPENSE,
            ANNUAL_INSURANCE_EXPENSES,
            ANNUAL_INSURANCE_COST_INCREASE
          )}
        />
      </div>
    </div>
  )
}

InsuranceExpenses.propTypes = {}

export default InsuranceExpenses
