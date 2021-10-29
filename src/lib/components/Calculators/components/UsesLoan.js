import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { PercentInput, Input, Toggle } from '../../..'

const UsesLoan = ({
  dispatch,
  constants,
  loanData: { usesLoan, moneyDownPercent, rate, term },
}) => {
  const {
    TOGGLE_TRUE,
    TOGGLE_FALSE,
    THIRD_LEVEL_PROPERTY,
    PURCHASE,
    LOAN,
    USES_LOAN,
    MONEY_DOWN,
    RATE,
    TERM,
  } = constants
  return (
    <div className='o-row'>
      <div className='o-row__item u-1/1'>
        <Toggle
          type='checkbox'
          label={constants.USES_LOAN_LABEL}
          checked={usesLoan}
          name={constants.USES_LOAN_NAME}
          toggleLabels={[TOGGLE_TRUE, TOGGLE_FALSE]}
          onChange={e =>
            dispatch(
              THIRD_LEVEL_PROPERTY,
              PURCHASE,
              LOAN,
              USES_LOAN
            )(!e.target.checked)
          }
        />
      </div>
      {usesLoan && (
        <Fragment>
          <div className='o-row__item u-1/1'>
            <PercentInput
              type='text'
              placeholder={constants.MONEY_DOWN_PLACEHOLDER}
              label={constants.MONEY_DOWN_LABEL}
              value={moneyDownPercent}
              name={constants.MONEY_DOWN_NAME}
              onChange={dispatch(
                THIRD_LEVEL_PROPERTY,
                PURCHASE,
                LOAN,
                MONEY_DOWN
              )}
            />
          </div>
          <div className='o-row__item u-1/1'>
            <PercentInput
              type='text'
              placeholder={constants.RATE_PLACEHOLDER}
              label={constants.RATE_LABEL}
              value={rate}
              name={constants.RATE_NAME}
              onChange={dispatch(THIRD_LEVEL_PROPERTY, PURCHASE, LOAN, RATE)}
            />
          </div>
          <div className='o-row__item u-1/1'>
            <Input
              type='text'
              placeholder={constants.TERM_PLACEHOLDER}
              label={constants.TERM_LABEL}
              value={term}
              name={constants.TERM_NAME}
              onChange={e =>
                dispatch(
                  THIRD_LEVEL_PROPERTY,
                  PURCHASE,
                  LOAN,
                  TERM
                )(e.target.value)
              }
            />
          </div>
        </Fragment>
      )}
    </div>
  )
}

UsesLoan.propTypes = {}

export default UsesLoan
