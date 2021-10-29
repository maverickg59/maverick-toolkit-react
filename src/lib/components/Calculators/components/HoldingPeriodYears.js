import React from 'react'
import PropTypes from 'prop-types'
import { Input } from '../../..'

const HoldingPeriodYears = ({ dispatch, constants, holdingPeriodYears }) => {
  const { SECOND_LEVEL_PROPERTY, DIVESTITURE, HOLDING_PERIOD_YEARS } = constants
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
            dispatch(
              SECOND_LEVEL_PROPERTY,
              DIVESTITURE,
              HOLDING_PERIOD_YEARS
            )(e.target.value)
          }
        />
      </div>
    </div>
  )
}

HoldingPeriodYears.propTypes = {}

export default HoldingPeriodYears
