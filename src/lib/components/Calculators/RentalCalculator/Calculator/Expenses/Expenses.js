import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { ApplicationContext } from '../../RentalCalculator'
import {
  PropertyTaxExpenses,
  InsuranceExpenses,
  HOAExpenses,
  MaintenanceExpenses,
  OtherExpenses,
  ManagementExpenses,
} from './'

const Expenses = ({ expensesData }) => {
  const {
    propertyTaxExpenses,
    insuranceExpenses,
    hoaExpenses,
    maintenanceExpenses,
    otherExpenses,
    managementExpenses,
  } = expensesData

  return (
    <div className='o-row__item u-1/2'>
      <h2 className='u-h6'>Expenses Block</h2>
      <div className='o-row'>
        <div className='o-row__item u-1/1'>
          <PropertyTaxExpenses propertyTaxExpenses={propertyTaxExpenses} />
        </div>
        <div className='o-row__item u-1/1'>
          <InsuranceExpenses insuranceExpenses={insuranceExpenses} />
        </div>
        <div className='o-row__item u-1/1'>
          <HOAExpenses hoaExpenses={hoaExpenses} />
        </div>
        <div className='o-row__item u-1/1'>
          <MaintenanceExpenses maintenanceExpenses={maintenanceExpenses} />
        </div>
        <div className='o-row__item u-1/1'>
          <OtherExpenses otherExpenses={otherExpenses} />
        </div>
        <div className='o-row__item u-1/1'>
          <ManagementExpenses managementExpenses={managementExpenses} />
        </div>
      </div>
    </div>
  )
}

Expenses.propTypes = {}

export default Expenses
