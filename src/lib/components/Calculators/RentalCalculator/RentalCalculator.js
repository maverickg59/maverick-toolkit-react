import React, { Fragment, useReducer } from 'react'
import { Purchase, Expenses, Income, Divestiture, constants } from './'
import initialState from './initialState'
import reducer from './reducer'
import PropTypes from 'prop-types'

function RentalCalculator(props) {
  const [state, dispatch] = useReducer(reducer, initialState)
  const { purchase, expenses, income, divestiture } = state
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
      <Expenses expenses={expenses} />
      <Income income={income} />
      <Divestiture divestiture={divestiture} />
    </Fragment>
  )
}

RentalCalculator.propTypes = {}

export default RentalCalculator
