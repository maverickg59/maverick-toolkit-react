import React, { createContext, useReducer } from 'react'
import PropTypes from 'prop-types'
import { reducer, constants } from '../'
import {
  Calculator,
  Results,
  calculatorInitialState,
  resultsInitialState,
} from './'

const ApplicationContext = createContext()
function RentalCalculator(props) {
  const [calculatorState, calcDispatch] = useReducer(
    reducer,
    calculatorInitialState
  )
  const [resultsState, resDispatch] = useReducer(reducer, resultsInitialState)
  const { resultsCalculated } = resultsState
  const calculatorDispatch = (type, parent, child, field) => payload =>
    calcDispatch({
      type,
      parent,
      child,
      field,
      payload,
    })

  const resultsDispatch = (type, parent, payload) => {
    resDispatch({
      type,
      parent,
      payload,
    })
  }

  return (
    <ApplicationContext.Provider
      value={{
        calculatorDispatch,
        resultsDispatch,
        constants,
      }}>
      <div className='o-row'>
        <div className='o-row__item u-1/1'>
          <h1 className='u-h5'>Rental Property Calculator</h1>
        </div>
        {resultsCalculated ? (
          <Results state={resultsState} />
        ) : (
          <Calculator
            resultsCalculated={resultsCalculated}
            state={calculatorState}
          />
        )}
      </div>
    </ApplicationContext.Provider>
  )
}

RentalCalculator.propTypes = {}

export default RentalCalculator
export { ApplicationContext }
