import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { ApplicationContext } from '../RentalCalculator'
import {
  MonthlyOtherIncome,
  MonthlyRentalIncome,
  VacancyRatePercent,
} from '../../components'

const Income = ({ income }) => {
  const { calculatorDispatch, constants } = useContext(ApplicationContext)
  const { monthlyRentalIncome, monthlyOtherIncome, vacancyRatePercent } = income

  return (
    <div className='o-row__item u-1/2'>
      <h2 className='u-h6'>Income Block</h2>
      <div className='o-row'>
        <div className='o-row__item u-1/1'>
          <MonthlyRentalIncome
            dispatch={calculatorDispatch}
            constants={constants}
            monthlyRentalIncome={monthlyRentalIncome}
          />
        </div>
        <div className='o-row__item u-1/1'>
          <MonthlyOtherIncome
            dispatch={calculatorDispatch}
            constants={constants}
            monthlyOtherIncome={monthlyOtherIncome}
          />
        </div>
        <div className='o-row__item u-1/1'>
          <VacancyRatePercent
            dispatch={calculatorDispatch}
            constants={constants}
            vacancyRatePercent={vacancyRatePercent}
          />
        </div>
      </div>
    </div>
  )
}

Income.propTypes = {}

export default Income
