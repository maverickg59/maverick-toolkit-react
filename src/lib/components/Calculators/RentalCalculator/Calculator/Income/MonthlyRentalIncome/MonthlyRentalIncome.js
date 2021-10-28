import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { ApplicationContext } from '../../../RentalCalculator'
import { CurrencyInput, PercentInput } from '../../../../../..'

const MonthlyRentalIncome = ({
  monthlyRentalIncome: { monthlyRentalIncome, annualRentalIncomeIncrease },
}) => {
  const { calculatorDispatch, constants } = useContext(ApplicationContext)
  const {
    SECOND_LEVEL_PROPERTY,
    INCOME,
    MONTHLY_RENTAL_INCOME,
    MONTHLY_RENTAL_INCOME_INCREASE,
  } = constants
  return (
    <div className='o-row'>
      <div className='o-row__item u-2/3'>
        <CurrencyInput
          type='text'
          placeholder={constants.MONTHLY_RENTAL_INCOME_PLACEHOLDER}
          label={constants.MONTHLY_RENTAL_INCOME_LABEL}
          value={monthlyRentalIncome}
          name={constants.MONTHLY_RENTAL_INCOME_NAME}
          onChange={calculatorDispatch(
            SECOND_LEVEL_PROPERTY,
            INCOME,
            MONTHLY_RENTAL_INCOME,
            MONTHLY_RENTAL_INCOME
          )}
        />
      </div>
      <div className='o-row__item u-1/3'>
        <PercentInput
          type='text'
          placeholder={constants.MONTHLY_RENTAL_INCOME_INCREASE_PLACEHOLDER}
          value={annualRentalIncomeIncrease}
          name={constants.MONTHLY_RENTAL_INCOME_INCREASE_NAME}
          onChange={calculatorDispatch(
            SECOND_LEVEL_PROPERTY,
            INCOME,
            MONTHLY_RENTAL_INCOME,
            MONTHLY_RENTAL_INCOME_INCREASE
          )}
        />
      </div>
    </div>
  )
}

MonthlyRentalIncome.propTypes = {}

export default MonthlyRentalIncome
