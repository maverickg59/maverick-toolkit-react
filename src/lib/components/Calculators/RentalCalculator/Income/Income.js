import PropTypes from 'prop-types'

const Income = ({ income }) => {
  const {
    monthlyRent: { rentIncome, annualRentIncrease },
    otherIncome: { otherIncome, annualOtherIncomeIncrease },
    vacancyRate,
  } = income
  return <div></div>
}

Income.propTypes = {}

export default Income
