import React, { Fragment, useContext } from 'react'
import PropTypes from 'prop-types'
import { ApplicationContext } from '../../RentalCalculator'
import { PercentInput, Input, Toggle } from '../../../../../'

const Loan = ({ loanData: { useLoan, moneyDownPercent, rate, term } }) => {
  const { dispatch, constants } = useContext(ApplicationContext)
  const {
    TOGGLE_TRUE,
    TOGGLE_FALSE,
    SECOND_LEVEL_PROPERTY,
    PURCHASE,
    LOAN,
    USE_LOAN,
    MONEY_DOWN,
    RATE,
    TERM,
  } = constants
  return (
    <div className='o-row'>
      <div className='o-row__item u-1/1'>
        <Toggle
          type='checkbox'
          label={constants.USE_LOAN_LABEL}
          checked={useLoan}
          name={constants.USE_LOAN_NAME}
          toggleLabels={[TOGGLE_TRUE, TOGGLE_FALSE]}
          onChange={dispatch(SECOND_LEVEL_PROPERTY, PURCHASE, LOAN, USE_LOAN)}
        />
      </div>
      {useLoan && (
        <Fragment>
          <div className='o-row__item u-1/1'>
            <PercentInput
              type='text'
              placeholder={constants.MONEY_DOWN_PLACEHOLDER}
              label={constants.MONEY_DOWN_LABEL}
              value={moneyDownPercent}
              name={constants.MONEY_DOWN_NAME}
              onChange={dispatch(
                SECOND_LEVEL_PROPERTY,
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
              onChange={dispatch(SECOND_LEVEL_PROPERTY, PURCHASE, LOAN, RATE)}
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
                  SECOND_LEVEL_PROPERTY,
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

Loan.propTypes = {}

export default Loan
