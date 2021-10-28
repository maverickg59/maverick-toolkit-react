import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { ApplicationContext } from '../RentalCalculator'
import { Button } from '../../../../../lib'

const Results = ({ state }) => {
  const { resultsDispatch, constants } = useContext(ApplicationContext)
  const { resultsCalculated } = state
  // { type, parent, child, payload }
  return (
    <div className='o-row__item u-1/1'>
      <Button color='success'>Show Calculator</Button>
    </div>
  )
}

Results.propTypes = {}

export default Results
