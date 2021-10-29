import React from 'react'
import PropTypes from 'prop-types'
import { CurrencyInput, PercentInput } from '../../..'

const MonthlyOtherIncome = ({
  dispatch,
  constants,
  monthlyOtherIncome: { monthlyOtherIncome, annualOtherIncomeIncrease },
}) => {
  const {
    THIRD_LEVEL_PROPERTY,
    INCOME,
    MONTHLY_OTHER_INCOME,
    MONTHLY_OTHER_INCOME_INCREASE,
  } = constants
  return (
    <div className='o-row'>
      <div className='o-row__item u-2/3'>
        <CurrencyInput
          type='text'
          placeholder={constants.MONTHLY_OTHER_INCOME_PLACEHOLDER}
          label={constants.MONTHLY_OTHER_INCOME_LABEL}
          value={monthlyOtherIncome}
          name={constants.MONTHLY_OTHER_INCOME_NAME}
          onChange={dispatch(
            THIRD_LEVEL_PROPERTY,
            INCOME,
            MONTHLY_OTHER_INCOME,
            MONTHLY_OTHER_INCOME
          )}
        />
      </div>
      <div className='o-row__item u-1/3'>
        <PercentInput
          type='text'
          placeholder={constants.MONTHLY_OTHER_INCOME_INCREASE_PLACEHOLDER}
          value={annualOtherIncomeIncrease}
          name={constants.MONTHLY_OTHER_INCOME_INCREASE_NAME}
          onChange={dispatch(
            THIRD_LEVEL_PROPERTY,
            INCOME,
            MONTHLY_OTHER_INCOME,
            MONTHLY_OTHER_INCOME_INCREASE
          )}
        />
      </div>
    </div>
  )
}

MonthlyOtherIncome.propTypes = {}

export default MonthlyOtherIncome
