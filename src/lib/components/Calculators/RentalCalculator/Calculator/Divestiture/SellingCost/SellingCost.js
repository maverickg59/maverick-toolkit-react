import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { ApplicationContext } from '../../../RentalCalculator'
import { PercentInput } from '../../../../../..'

const VacancyRate = ({ sellingCostPercent }) => {
  const { calculatorDispatch, constants } = useContext(ApplicationContext)
  const { FIRST_LEVEL_PROPERTY, DIVESTITURE, SELLING_COST_PERCENT } = constants
  return (
    <div className='o-row'>
      <div className='o-row__item u-1/1'>
        <PercentInput
          type='text'
          label={constants.SELLING_COST_LABEL}
          placeholder={constants.SELLING_COST_PLACEHOLDER}
          value={sellingCostPercent}
          name={constants.SELLING_COST_NAME}
          onChange={calculatorDispatch(
            FIRST_LEVEL_PROPERTY,
            DIVESTITURE,
            SELLING_COST_PERCENT
          )}
        />
      </div>
    </div>
  )
}

VacancyRate.propTypes = {}

export default VacancyRate
