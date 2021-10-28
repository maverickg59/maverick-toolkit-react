import React, { Fragment, useContext } from 'react'
import PropTypes from 'prop-types'
import { ApplicationContext } from '../../../RentalCalculator'
import { CurrencyInput, Toggle } from '../../../../../..'

const Repair = ({
  repairData: { needsRepair, repairCosts, postRepairValue },
}) => {
  const { calculatorDispatch, constants } = useContext(ApplicationContext)
  const {
    TOGGLE_TRUE,
    TOGGLE_FALSE,
    SECOND_LEVEL_PROPERTY,
    PURCHASE,
    REPAIR,
    NEEDS_REPAIR,
    REPAIR_COSTS,
    POST_REPAIR_VALUE,
  } = constants
  return (
    <div className='o-row'>
      <div className='o-row__item u-1/1'>
        <Toggle
          type='checkbox'
          label={constants.NEEDS_REPAIR_LABEL}
          checked={needsRepair}
          name={constants.NEEDS_REPAIR_NAME}
          toggleLabels={[TOGGLE_TRUE, TOGGLE_FALSE]}
          onChange={() =>
            calculatorDispatch(
              SECOND_LEVEL_PROPERTY,
              PURCHASE,
              REPAIR,
              NEEDS_REPAIR
            )
          }
        />
      </div>
      {needsRepair && (
        <Fragment>
          <div className='o-row__item u-1/1'>
            <CurrencyInput
              type='text'
              placeholder={constants.REPAIR_COSTS_PLACEHOLDER}
              label={constants.REPAIR_COSTS_LABEL}
              value={repairCosts}
              name={constants.REPAIR_COSTS_NAME}
              onChange={calculatorDispatch(
                SECOND_LEVEL_PROPERTY,
                PURCHASE,
                REPAIR,
                REPAIR_COSTS
              )}
            />
          </div>
          <div className='o-row__item u-1/1'>
            <CurrencyInput
              type='text'
              placeholder={constants.POST_REPAIR_VALUE_PLACEHOLDER}
              label={constants.POST_REPAIR_VALUE_LABEL}
              value={postRepairValue}
              name={constants.POST_REPAIR_VALUE_NAME}
              onChange={calculatorDispatch(
                SECOND_LEVEL_PROPERTY,
                PURCHASE,
                REPAIR,
                POST_REPAIR_VALUE
              )}
            />
          </div>
        </Fragment>
      )}
    </div>
  )
}

Repair.propTypes = {}

export default Repair
