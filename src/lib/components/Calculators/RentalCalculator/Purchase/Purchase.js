import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { CurrencyInput } from '../../../../'

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
  // want to update purchase object - type is constants.PURCHASE
  // pass dispatch into input - handle connected or unconnected inside input
  const handlePurchaseChange = (type, field) => payload =>
    dispatch({
      type: type,
      field: field,
      payload,
    })

  return (
    <div className='o-row__item u-1/1'>
      <div className='o-col o-col--standard u-m-sm'>
        <div className='o-col__item'>
          <label htmlFor={constants.PURCHASE_PRICE_NAME}>
            {constants.PURCHASE_PRICE_LABEL}
          </label>
          <CurrencyInput
            value={purchasePrice}
            name={constants.PURCHASE_PRICE_NAME}
            onChange={() =>
              handlePurchaseChange(
                constants.PURCHASE,
                constants.PURCHASE_PRICE_NAME
              )
            }
          />
        </div>
      </div>
    </div>
  )
}

Purchase.propTypes = {}

export default Purchase
