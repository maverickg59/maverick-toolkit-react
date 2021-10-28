import React from 'react'
import PropTypes from 'prop-types'
import { SellingPrice, HoldingPeriod, SellingCost } from './'

const Divestiture = ({ divestiture }) => {
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
            isSalePriceKnown={isSalePriceKnown}
            sellingPrice={sellingPrice}
            annualAppreciation={annualAppreciation}
          />
        </div>
        <div className='o-row__item u-1/1'>
          <HoldingPeriod holdingPeriodYears={holdingPeriodYears} />
        </div>
        <div className='o-row__item u-1/1'>
          <SellingCost sellingCostPercent={sellingCostPercent} />
        </div>
      </div>
    </div>
  )
}

Divestiture.propTypes = {}

export default Divestiture
