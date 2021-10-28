import React, { createContext, useReducer } from 'react'
import { Button } from '../../../../lib'
import PropTypes from 'prop-types'
import {
  Calculator,
  Results,
  constants,
  calculatorInitialState,
  reducer,
  resultsInitialState,
} from './'

const ApplicationContext = createContext()
function RentalCalculator(props) {
  const [calculatorState, calcDispatch] = useReducer(
    reducer,
    calculatorInitialState
  )
  const [resultsState, resultsDispatch] = useReducer(
    reducer,
    resultsInitialState
  )
  const { resultsCalculated } = resultsState
  const calculatorDispatch = (type, parent, child, field) => payload =>
    calcDispatch({
      type,
      parent,
      child,
      field,
      payload,
    })

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
          <Calculator state={calculatorState} />
        )}
      </div>
    </ApplicationContext.Provider>
  )
}

RentalCalculator.propTypes = {}

export default RentalCalculator
export { ApplicationContext }
