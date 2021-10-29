import React from 'react'
import PropTypes from 'prop-types'
import { CurrencyInput, PercentInput, Toggle } from '../../..'

const SellingPrice = ({
  dispatch,
  constants,
  isSalePriceKnown,
  sellingPrice,
  annualAppreciation,
}) => {
  const {
    TOGGLE_TRUE,
    TOGGLE_FALSE,
    SECOND_LEVEL_PROPERTY,
    DIVESTITURE,
    IS_SALE_PRICE_KNOWN,
    SELLING_PRICE,
    ANNUAL_APPRECIATION,
  } = constants

  const SellingPrice = (
    <div className='o-row__item u-1/1'>
      <CurrencyInput
        type='text'
        placeholder={constants.SELLING_PRICE_PLACEHOLDER}
        label={constants.SELLING_PRICE_LABEL}
        value={sellingPrice}
        name={constants.SELLING_PRICE_NAME}
        onChange={dispatch(SECOND_LEVEL_PROPERTY, DIVESTITURE, SELLING_PRICE)}
      />
    </div>
  )
  const AppreciationPercent = (
    <div className='o-row__item u-1/1'>
      <PercentInput
        type='text'
        label={constants.ANNUAL_APPRECIATION_LABEL}
        placeholder={constants.ANNUAL_APPRECIATION_PLACEHOLDER}
        value={annualAppreciation}
        name={constants.ANNUAL_APPRECIATION_NAME}
        onChange={dispatch(
          SECOND_LEVEL_PROPERTY,
          DIVESTITURE,
          ANNUAL_APPRECIATION
        )}
      />
    </div>
  )

  return (
    <div className='o-row'>
      <div className='o-row__item u-1/1'>
        <Toggle
          type='checkbox'
          label={constants.IS_SALE_PRICE_KNOWN_LABEL}
          checked={isSalePriceKnown}
          name={constants.IS_SALE_PRICE_KNOWN_NAME}
          toggleLabels={[TOGGLE_TRUE, TOGGLE_FALSE]}
          onChange={e => {
            if (!e.target.checked) {
              dispatch(SECOND_LEVEL_PROPERTY, DIVESTITURE, SELLING_PRICE)('')
            }
            return dispatch(
              SECOND_LEVEL_PROPERTY,
              DIVESTITURE,
              IS_SALE_PRICE_KNOWN
            )(!e.target.checked)
          }}
        />
      </div>
      {isSalePriceKnown ? SellingPrice : AppreciationPercent}
    </div>
  )
}

SellingPrice.propTypes = {}

export default SellingPrice
