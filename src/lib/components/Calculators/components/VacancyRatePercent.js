import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { PercentInput } from '../../..'

const VacancyRatePercent = ({ dispatch, constants, vacancyRatePercent }) => {
  const { SECOND_LEVEL_PROPERTY, INCOME, VACANCY_RATE_PERCENT } = constants
  return (
    <div className='o-row'>
      <div className='o-row__item u-1/1'>
        <PercentInput
          type='text'
          label={constants.VACANCY_RATE_LABEL}
          placeholder={constants.VACANCY_RATE_PLACEHOLDER}
          value={vacancyRatePercent}
          name={constants.VACANCY_RATE_NAME}
          onChange={dispatch(
            SECOND_LEVEL_PROPERTY,
            INCOME,
            VACANCY_RATE_PERCENT
          )}
        />
      </div>
    </div>
  )
}

VacancyRatePercent.propTypes = {}

export default VacancyRatePercent
