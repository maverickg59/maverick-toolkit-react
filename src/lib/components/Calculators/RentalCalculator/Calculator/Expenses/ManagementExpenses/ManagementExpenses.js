import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { ApplicationContext } from '../../../RentalCalculator'
import { PercentInput } from '../../../../../..'

const ManagementExpenses = ({ managementExpenses }) => {
  const { calculatorDispatch, constants } = useContext(ApplicationContext)
  const { FIRST_LEVEL_PROPERTY, EXPENSE, ANNUAL_MANAGEMENT_EXPENSES } =
    constants
  return (
    <div className='o-row'>
      <div className='o-row__item u-1/1'>
        <PercentInput
          type='text'
          label={constants.ANNUAL_MANAGEMENT_EXPENSES_LABEL}
          placeholder={constants.ANNUAL_MANAGEMENT_COST_PLACEHOLDER}
          value={managementExpenses}
          name={constants.ANNUAL_MANAGEMENT_COST_NAME}
          onChange={calculatorDispatch(
            FIRST_LEVEL_PROPERTY,
            EXPENSE,
            ANNUAL_MANAGEMENT_EXPENSES
          )}
        />
      </div>
    </div>
  )
}

ManagementExpenses.propTypes = {}

export default ManagementExpenses
