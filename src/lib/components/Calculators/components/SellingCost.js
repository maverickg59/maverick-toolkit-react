import React from 'react'
import PropTypes from 'prop-types'
import { PercentInput } from '../../..'

const SellingCost = ({ dispatch, constants, sellingCostPercent }) => {
  const { SECOND_LEVEL_PROPERTY, DIVESTITURE, SELLING_COST_PERCENT } = constants
  return (
    <div className='o-row'>
      <div className='o-row__item u-1/1'>
        <PercentInput
          type='text'
          label={constants.SELLING_COST_LABEL}
          placeholder={constants.SELLING_COST_PLACEHOLDER}
          value={sellingCostPercent}
          name={constants.SELLING_COST_NAME}
          onChange={dispatch(
            SECOND_LEVEL_PROPERTY,
            DIVESTITURE,
            SELLING_COST_PERCENT
          )}
        />
      </div>
    </div>
  )
}

SellingCost.propTypes = {}

export default SellingCost
