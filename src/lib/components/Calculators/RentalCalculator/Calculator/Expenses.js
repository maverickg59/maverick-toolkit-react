import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { ApplicationContext } from '../RentalCalculator'
import {
  PropertyTaxExpenses,
  InsuranceExpenses,
  HOAExpenses,
  MaintenanceExpenses,
  OtherExpenses,
  ManagementExpenses,
} from '../../components'

const Expenses = ({ expensesData }) => {
  const { calculatorDispatch, constants } = useContext(ApplicationContext)
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
          <PropertyTaxExpenses
            dispatch={calculatorDispatch}
            constants={constants}
            propertyTaxExpenses={propertyTaxExpenses}
          />
        </div>
        <div className='o-row__item u-1/1'>
          <InsuranceExpenses
            dispatch={calculatorDispatch}
            constants={constants}
            insuranceExpenses={insuranceExpenses}
          />
        </div>
        <div className='o-row__item u-1/1'>
          <HOAExpenses
            dispatch={calculatorDispatch}
            constants={constants}
            hoaExpenses={hoaExpenses}
          />
        </div>
        <div className='o-row__item u-1/1'>
          <MaintenanceExpenses
            dispatch={calculatorDispatch}
            constants={constants}
            maintenanceExpenses={maintenanceExpenses}
          />
        </div>
        <div className='o-row__item u-1/1'>
          <OtherExpenses
            dispatch={calculatorDispatch}
            constants={constants}
            otherExpenses={otherExpenses}
          />
        </div>
        <div className='o-row__item u-1/1'>
          <ManagementExpenses
            dispatch={calculatorDispatch}
            constants={constants}
            managementExpenses={managementExpenses}
          />
        </div>
      </div>
    </div>
  )
}

Expenses.propTypes = {}

export default Expenses
