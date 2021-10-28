import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { ApplicationContext } from '../../../RentalCalculator'
import { CurrencyInput, PercentInput } from '../../../../../..'

const MaintenanceExpenses = ({
  maintenanceExpenses: { annualMaintenanceCost, annualMaintenanceIncrease },
}) => {
  const { calculatorDispatch, constants } = useContext(ApplicationContext)
  const {
    SECOND_LEVEL_PROPERTY,
    EXPENSE,
    ANNUAL_MAINTENANCE_EXPENSES,
    ANNUAL_MAINTENANCE_COST,
    ANNUAL_MAINTENANCE_COST_INCREASE,
  } = constants
  return (
    <div className='o-row'>
      <div className='o-row__item u-2/3'>
        <CurrencyInput
          type='text'
          placeholder={constants.ANNUAL_MAINTENANCE_COST_PLACEHOLDER}
          label={constants.ANNUAL_MAINTENANCE_EXPENSES_LABEL}
          value={annualMaintenanceCost}
          name={constants.ANNUAL_MAINTENANCE_COST_NAME}
          onChange={calculatorDispatch(
            SECOND_LEVEL_PROPERTY,
            EXPENSE,
            ANNUAL_MAINTENANCE_EXPENSES,
            ANNUAL_MAINTENANCE_COST
          )}
        />
      </div>
      <div className='o-row__item u-1/3'>
        <PercentInput
          type='text'
          placeholder={constants.ANNUAL_MAINTENANCE_COST_INCREASE_PLACEHOLDER}
          value={annualMaintenanceIncrease}
          name={constants.ANNUAL_MAINTENANCE_COST_INCREASE_NAME}
          onChange={calculatorDispatch(
            SECOND_LEVEL_PROPERTY,
            EXPENSE,
            ANNUAL_MAINTENANCE_EXPENSES,
            ANNUAL_MAINTENANCE_COST_INCREASE
          )}
        />
      </div>
    </div>
  )
}

MaintenanceExpenses.propTypes = {}

export default MaintenanceExpenses
