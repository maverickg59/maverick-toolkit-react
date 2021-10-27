import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { ApplicationContext } from '../../RentalCalculator'
import { CurrencyInput, PercentInput } from '../../../../..'

const OtherExpenses = ({
  otherExpenses: { annualOtherCost, annualOtherCostIncrease },
}) => {
  const { dispatch, constants } = useContext(ApplicationContext)
  const {
    SECOND_LEVEL_PROPERTY,
    EXPENSE,
    ANNUAL_OTHER_EXPENSES,
    ANNUAL_OTHER_COST,
    ANNUAL_OTHER_COST_INCREASE,
  } = constants
  return (
    <div className='o-row'>
      <div className='o-row__item u-2/3'>
        <CurrencyInput
          type='text'
          placeholder={constants.ANNUAL_OTHER_COST_PLACEHOLDER}
          label={constants.ANNUAL_OTHER_EXPENSES_LABEL}
          value={annualOtherCost}
          name={constants.ANNUAL_OTHER_COST_NAME}
          onChange={dispatch(
            SECOND_LEVEL_PROPERTY,
            EXPENSE,
            ANNUAL_OTHER_EXPENSES,
            ANNUAL_OTHER_COST
          )}
        />
      </div>
      <div className='o-row__item u-1/3'>
        <PercentInput
          type='text'
          placeholder={constants.ANNUAL_OTHER_COST_INCREASE_PLACEHOLDER}
          value={annualOtherCostIncrease}
          name={constants.ANNUAL_OTHER_COST_INCREASE_NAME}
          onChange={dispatch(
            SECOND_LEVEL_PROPERTY,
            EXPENSE,
            ANNUAL_OTHER_EXPENSES,
            ANNUAL_OTHER_COST_INCREASE
          )}
        />
      </div>
    </div>
  )
}

OtherExpenses.propTypes = {}

export default OtherExpenses
