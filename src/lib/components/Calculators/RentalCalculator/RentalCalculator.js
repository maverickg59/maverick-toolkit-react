import React, { Fragment, useReducer } from 'react'
import { Purchase, Expense, Income, Divestiture, constants } from './'
import initialState from './initialState'
import reducer from './reducer'
import PropTypes from 'prop-types'

function RentalCalculator(props) {
  const [state, dispatch] = useReducer(reducer, initialState)
  const { purchase, expense, income, divestiture } = state
  return (
    <Fragment>
      <div className='o-row__item u-1/1'>
        <h1 className='u-h5'>Rental Property Calculator</h1>
      </div>
      <Purchase
        purchase={purchase}
        dispatch={dispatch}
        constants={constants.PURCHASE_CONSTANTS}
      />
      <Expense expense={expense} />
      <Income income={income} />
      <Divestiture divestiture={divestiture} />
    </Fragment>
  )
}

RentalCalculator.propTypes = {}

export default RentalCalculator
