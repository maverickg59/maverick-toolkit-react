import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { ApplicationContext } from '../../RentalCalculator'
import { PercentInput } from '../../../../..'

const VacancyRate = ({ vacancyRate }) => {
  const { dispatch, constants } = useContext(ApplicationContext)
  const { FIRST_LEVEL_PROPERTY, EXPENSE, VACANCY_RATE } = constants
  return (
    <div className='o-row'>
      <div className='o-row__item u-1/1'>
        <PercentInput
          type='text'
          label={constants.VACANCY_RATE_LABEL}
          placeholder={constants.VACANCY_RATE_PLACEHOLDER}
          value={vacancyRate}
          name={constants.VACANCY_RATE_NAME}
          onChange={dispatch(FIRST_LEVEL_PROPERTY, EXPENSE, VACANCY_RATE)}
        />
      </div>
    </div>
  )
}

VacancyRate.propTypes = {}

export default VacancyRate
