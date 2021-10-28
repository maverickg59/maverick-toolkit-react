import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { ApplicationContext } from '../../../RentalCalculator'
import { Input } from '../../../../../..'

const VacancyRate = ({ holdingPeriodYears }) => {
  const { calculatorDispatch, constants } = useContext(ApplicationContext)
  const { FIRST_LEVEL_PROPERTY, DIVESTITURE, HOLDING_PERIOD } = constants
  return (
    <div className='o-row'>
      <div className='o-row__item u-1/1'>
        <Input
          type='text'
          label={constants.HOLDING_PERIOD_LABEL}
          placeholder={constants.HOLDING_PERIOD_PLACEHOLDER}
          value={holdingPeriodYears}
          name={constants.HOLDING_PERIOD_NAME}
          onChange={e =>
            calculatorDispatch(
              FIRST_LEVEL_PROPERTY,
              DIVESTITURE,
              HOLDING_PERIOD
            )(e.target.value)
          }
        />
      </div>
    </div>
  )
}

VacancyRate.propTypes = {}

export default VacancyRate
