import React from 'react'
import PropTypes from 'prop-types'
import { CurrencyInput, PercentInput } from '../../..'

const HOAExpenses = ({
  dispatch,
  constants,
  hoaExpenses: { annualHOACost, annualHOAIncrease },
}) => {
  const {
    THIRD_LEVEL_PROPERTY,
    EXPENSE,
    ANNUAL_HOA_EXPENSES,
    ANNUAL_HOA_COST,
    ANNUAL_HOA_COST_INCREASE,
  } = constants
  return (
    <div className='o-row'>
      <div className='o-row__item u-2/3'>
        <CurrencyInput
          type='text'
          placeholder={constants.ANNUAL_HOA_COST_PLACEHOLDER}
          label={constants.ANNUAL_HOA_COST_LABEL}
          value={annualHOACost}
          name={constants.ANNUAL_HOA_COST_NAME}
          onChange={dispatch(
            THIRD_LEVEL_PROPERTY,
            EXPENSE,
            ANNUAL_HOA_EXPENSES,
            ANNUAL_HOA_COST
          )}
        />
      </div>
      <div className='o-row__item u-1/3'>
        <PercentInput
          type='text'
          placeholder={constants.ANNUAL_HOA_COST_INCREASE_PLACEHOLDER}
          value={annualHOAIncrease}
          name={constants.ANNUAL_HOA_COST_INCREASE_NAME}
          onChange={dispatch(
            THIRD_LEVEL_PROPERTY,
            EXPENSE,
            ANNUAL_HOA_EXPENSES,
            ANNUAL_HOA_COST_INCREASE
          )}
        />
      </div>
    </div>
  )
}

HOAExpenses.propTypes = {}

export default HOAExpenses
