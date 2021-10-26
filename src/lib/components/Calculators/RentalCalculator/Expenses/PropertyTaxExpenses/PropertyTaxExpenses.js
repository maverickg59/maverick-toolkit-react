import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { ApplicationContext } from '../../RentalCalculator'
import { CurrencyInput, PercentInput } from '../../../../..'

const PropertyTaxExpenses = ({
  propertyTaxExpenses: { annualTaxCost, annualTaxIncrease },
}) => {
  const { dispatch, constants } = useContext(ApplicationContext)
  const {
    SECOND_LEVEL_PROPERTY,
    EXPENSE,
    ANNUAL_PROPERTY_TAX_EXPENSES,
    ANNUAL_PROPERTY_TAX_COST,
    ANNUAL_PROPERTY_TAX_INCREASE,
  } = constants
  return (
    <div className='o-row'>
      <div className='o-row__item u-1/1'>
        <div className='o-row o-justify--end'>
          <div className='o_row__item u-1/3'>
            <label htmlFor={constants.ANNUAL_MAINTENANCE_COST_INCREASE_NAME}>
              {constants.ANNUAL_EXPENSES_INCREASE_LABEL}
            </label>
          </div>
        </div>
      </div>
      <div className='o-row__item u-2/3'>
        <CurrencyInput
          type='text'
          placeholder={constants.ANNUAL_PROPERTY_TAX_COST_PLACEHOLDER}
          label={constants.ANNUAL_PROPERTY_TAX_EXPENSES_LABEL}
          value={annualTaxCost}
          name={constants.ANNUAL_PROPERTY_TAX_COST_NAME}
          onChange={dispatch(
            SECOND_LEVEL_PROPERTY,
            EXPENSE,
            ANNUAL_PROPERTY_TAX_EXPENSES,
            ANNUAL_PROPERTY_TAX_COST
          )}
        />
      </div>
      <div className='o-row__item u-1/3'>
        <PercentInput
          type='text'
          placeholder={constants.ANNUAL_PROPERTY_TAX_COST_INCREASE_PLACEHOLDER}
          value={annualTaxIncrease}
          name={constants.ANNUAL_PROPERTY_TAX_COST_INCREASE_NAME}
          onChange={dispatch(
            SECOND_LEVEL_PROPERTY,
            EXPENSE,
            ANNUAL_PROPERTY_TAX_EXPENSES,
            ANNUAL_PROPERTY_TAX_INCREASE
          )}
        />
      </div>
    </div>
  )
}

PropertyTaxExpenses.propTypes = {}

export default PropertyTaxExpenses
