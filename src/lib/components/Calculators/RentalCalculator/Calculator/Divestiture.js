import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { ApplicationContext } from '../RentalCalculator'
import { SellingPrice, HoldingPeriodYears, SellingCost } from '../../components'

const Divestiture = ({ divestiture }) => {
  const { calculatorDispatch, constants } = useContext(ApplicationContext)
  const {
    isSalePriceKnown,
    sellingPrice,
    annualAppreciation,
    holdingPeriodYears,
    sellingCostPercent,
  } = divestiture

  return (
    <div className='o-row__item u-1/2'>
      <h2 className='u-h6'>Divestiture Block</h2>
      <div className='o-row'>
        <div className='o-row__item u-1/1'>
          <SellingPrice
            dispatch={calculatorDispatch}
            constants={constants}
            isSalePriceKnown={isSalePriceKnown}
            sellingPrice={sellingPrice}
            annualAppreciation={annualAppreciation}
          />
        </div>
        <div className='o-row__item u-1/1'>
          <HoldingPeriodYears
            dispatch={calculatorDispatch}
            constants={constants}
            holdingPeriodYears={holdingPeriodYears}
          />
        </div>
        <div className='o-row__item u-1/1'>
          <SellingCost
            dispatch={calculatorDispatch}
            constants={constants}
            sellingCostPercent={sellingCostPercent}
          />
        </div>
      </div>
    </div>
  )
}

Divestiture.propTypes = {}

export default Divestiture
