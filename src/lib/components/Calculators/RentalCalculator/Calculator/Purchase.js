import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { ApplicationContext } from '../RentalCalculator'
import { CurrencyInput } from '../../../..'
import { UsesLoan, NeedsRepair } from '../../components'

const Purchase = ({ purchaseData }) => {
  const { calculatorDispatch, constants } = useContext(ApplicationContext)
  const { FIRST_LEVEL_PROPERTY, PURCHASE, PURCHASE_PRICE, CLOSING_COSTS } =
    constants
  const { purchasePrice, loan, closingCosts, repair } = purchaseData

  return (
    <div className='o-row__item u-1/2'>
      <h2 className='u-h6'>Purchase Block</h2>
      <div className='o-row'>
        <div className='o-row__item u-1/1'>
          <CurrencyInput
            type='text'
            placeholder={constants.PURCHASE_PRICE_PLACEHOLDER}
            label={constants.PURCHASE_PRICE_LABEL}
            value={purchasePrice}
            name={constants.PURCHASE_PRICE_NAME}
            onChange={calculatorDispatch(
              FIRST_LEVEL_PROPERTY,
              PURCHASE,
              PURCHASE_PRICE
            )}
          />
        </div>
      </div>
      <div className='o-row'>
        <div className='o-row__item u-1/1'>
          <CurrencyInput
            type='text'
            placeholder={constants.CLOSING_COSTS_PLACEHOLDER}
            label={constants.CLOSING_COSTS_LABEL}
            value={closingCosts}
            name={constants.CLOSING_COSTS_NAME}
            onChange={calculatorDispatch(
              FIRST_LEVEL_PROPERTY,
              PURCHASE,
              CLOSING_COSTS
            )}
          />
        </div>
      </div>
      <div className='o-row'>
        <div className='o-row__item u-1/2'>
          <UsesLoan
            dispatch={calculatorDispatch}
            constants={constants}
            loanData={loan}
          />
        </div>
        <div className='o-row__item u-1/2'>
          <NeedsRepair
            dispatch={calculatorDispatch}
            constants={constants}
            repairData={repair}
          />
        </div>
      </div>
    </div>
  )
}

Purchase.propTypes = {}

export default Purchase
