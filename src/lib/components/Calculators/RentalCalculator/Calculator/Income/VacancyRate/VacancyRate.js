import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { ApplicationContext } from '../../../RentalCalculator'
import { PercentInput } from '../../../../../..'

const VacancyRate = ({ vacancyRatePercent }) => {
  const { calculatorDispatch, constants } = useContext(ApplicationContext)
  const { FIRST_LEVEL_PROPERTY, INCOME, VACANCY_RATE_PERCENT } = constants
  return (
    <div className='o-row'>
      <div className='o-row__item u-1/1'>
        <PercentInput
          type='text'
          label={constants.VACANCY_RATE_LABEL}
          placeholder={constants.VACANCY_RATE_PLACEHOLDER}
          value={vacancyRatePercent}
          name={constants.VACANCY_RATE_NAME}
          onChange={calculatorDispatch(
            FIRST_LEVEL_PROPERTY,
            INCOME,
            VACANCY_RATE_PERCENT
          )}
        />
      </div>
    </div>
  )
}

VacancyRate.propTypes = {}

export default VacancyRate
