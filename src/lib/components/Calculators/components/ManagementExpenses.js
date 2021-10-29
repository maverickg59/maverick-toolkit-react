import React from 'react'
import PropTypes from 'prop-types'
import { PercentInput } from '../../..'

const ManagementExpenses = ({ dispatch, constants, managementExpenses }) => {
  const { SECOND_LEVEL_PROPERTY, EXPENSE, ANNUAL_MANAGEMENT_EXPENSES } =
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
          onChange={dispatch(
            SECOND_LEVEL_PROPERTY,
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
