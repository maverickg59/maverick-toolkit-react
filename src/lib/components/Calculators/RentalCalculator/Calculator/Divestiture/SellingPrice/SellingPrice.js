import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { ApplicationContext } from '../../../RentalCalculator'
import { CurrencyInput, PercentInput, Toggle } from '../../../../../..'

const SellingPrice = ({
  isSalePriceKnown,
  sellingPrice,
  annualAppreciation,
}) => {
  const { calculatorDispatch, constants } = useContext(ApplicationContext)
  const {
    TOGGLE_TRUE,
    TOGGLE_FALSE,
    FIRST_LEVEL_PROPERTY,
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
        onChange={calculatorDispatch(
          FIRST_LEVEL_PROPERTY,
          DIVESTITURE,
          SELLING_PRICE
        )}
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
        onChange={calculatorDispatch(
          FIRST_LEVEL_PROPERTY,
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
              calculatorDispatch(
                FIRST_LEVEL_PROPERTY,
                DIVESTITURE,
                SELLING_PRICE
              )('')
            }
            return calculatorDispatch(
              FIRST_LEVEL_PROPERTY,
              DIVESTITURE,
              IS_SALE_PRICE_KNOWN
            )
          }}
        />
      </div>
      {isSalePriceKnown ? SellingPrice : AppreciationPercent}
    </div>
  )
}

SellingPrice.propTypes = {}

export default SellingPrice
