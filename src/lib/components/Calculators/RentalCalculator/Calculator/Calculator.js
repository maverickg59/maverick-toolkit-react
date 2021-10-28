import React from 'react'
import PropTypes from 'prop-types'
import { Button } from '../../../../../lib'
import { Purchase, Expenses, Income, Divestiture } from './'

const Calculator = ({ state }) => {
  const { purchase, expenses, income, divestiture } = state
  return (
    <div className='o-row__item u-1/1'>
      <Purchase purchaseData={purchase} />
      <Expenses expensesData={expenses} />
      <Income income={income} />
      <Divestiture divestiture={divestiture} />
      <Button color='success'>Calculate Results</Button>
    </div>
  )
}

Calculator.propTypes = {}

export default Calculator
