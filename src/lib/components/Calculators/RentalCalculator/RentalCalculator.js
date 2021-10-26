import React, { createContext, useReducer } from 'react'
import { Purchase, Expenses, Income, Divestiture, constants } from './'
import initialState from './initialState'
import reducer from './reducer'
import PropTypes from 'prop-types'

const ApplicationContext = createContext()
function RentalCalculator(props) {
  const [state, dispatch] = useReducer(reducer, initialState)
  const { purchase, expenses, income, divestiture } = state
  const rentalCalculatorDispatch = (type, parent, child, field) => payload =>
    dispatch({
      type,
      parent,
      child,
      field,
      payload,
    })
  return (
    <ApplicationContext.Provider
      value={{
        dispatch: rentalCalculatorDispatch,
        constants,
      }}>
      <div className='o-row__item u-1/1'>
        <h1 className='u-h5'>Rental Property Calculator</h1>
      </div>
      <Purchase purchaseData={purchase} />
      <Expenses expensesData={expenses} />
      <Income income={income} />
      <Divestiture divestiture={divestiture} />
    </ApplicationContext.Provider>
  )
}

RentalCalculator.propTypes = {}

export default RentalCalculator
export { ApplicationContext }
