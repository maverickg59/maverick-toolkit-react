import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { Button } from '../../../..'
import { ApplicationContext } from '../RentalCalculator'
import { Purchase, Expenses, Income, Divestiture } from './'

const Calculator = ({ resultsCalculated, state }) => {
  const { resultsDispatch, constants } = useContext(ApplicationContext)
  const { FIRST_LEVEL_PROPERTY, RESULTS_CALCULATED } = constants
  const { purchase, expenses, income, divestiture } = state

  return (
    <div className='o-row__item u-1/1'>
      <Purchase purchaseData={purchase} />
      <Expenses expensesData={expenses} />
      <Income income={income} />
      <Divestiture divestiture={divestiture} />
      <Button
        onClick={() =>
          resultsDispatch(
            FIRST_LEVEL_PROPERTY,
            RESULTS_CALCULATED,
            !resultsCalculated
          )
        }
        color='success'>
        Calculate Results
      </Button>
    </div>
  )
}

Calculator.propTypes = {}

export default Calculator
