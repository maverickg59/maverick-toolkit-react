import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { CurrencyInput, Toggle } from '../../../../'

const Purchase = ({ purchase, dispatch, constants }) => {
  const {
    purchasePrice,
    useLoan,
    moneyDownPercent,
    rate,
    term,
    closingCosts,
    needsRepair,
  } = purchase
  const handleChange = (type, field) => payload =>
    dispatch({
      type: type,
      field: field,
      payload,
    })

  return (
    <div className='o-row__item u-1/2'>
      <div className='o-row'>
        <div className='o-row__item u-1/1'>
          <CurrencyInput
            label={constants.PURCHASE_PRICE_LABEL}
            value={purchasePrice}
            name={constants.PURCHASE_PRICE_NAME}
            onChange={handleChange(
              constants.PURCHASE,
              constants.PURCHASE_PRICE
            )}
          />
        </div>
      </div>
      <div className='o-row'>
        <div className='o-row__item u-1/1'>
          <Toggle
            type='checkbox'
            checked={useLoan}
            onChange={handleChange(constants.PURCHASE, 'useLoan')}
          />
        </div>
      </div>
    </div>
  )
}

Purchase.propTypes = {}

export default Purchase
