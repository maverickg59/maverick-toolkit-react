import PropTypes from 'prop-types'
import { MonthlyOtherIncome, MonthlyRentalIncome, VacancyRate } from './'

const Income = ({ income }) => {
  const { monthlyRentalIncome, monthlyOtherIncome, vacancyRatePercent } = income

  return (
    <div className='o-row__item u-1/2'>
      <h2 className='u-h6'>Income Block</h2>
      <div className='o-row'>
        <div className='o-row__item u-1/1'>
          <MonthlyRentalIncome monthlyRentalIncome={monthlyRentalIncome} />
        </div>
        <div className='o-row__item u-1/1'>
          <MonthlyOtherIncome monthlyOtherIncome={monthlyOtherIncome} />
        </div>
        <div className='o-row__item u-1/1'>
          <VacancyRate vacancyRatePercent={vacancyRatePercent} />
        </div>
      </div>
    </div>
  )
}

Income.propTypes = {}

export default Income
