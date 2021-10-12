import currency from 'currency.js'
import { currency as constants } from '../../..'
export const formatNoCents = currencyString => {
  return currency(currencyString, {
    precision: 0,
  }).format()
}
export const formatLoosely = currencyString => {
  return currency(currencyString, {
    precision: 1,
  }).format()
}

export const formatStrictly = currencyString => {
  return currency(currencyString, {
    precision: 2,
  }).format()
}

export const setCursorPosition = (
  currStr,
  e,
  setCursor,
  deletes = false,
  selects = false
) => {
  // update to handle deleting first char where next char is comma - sends cursor to final index
  const start = e.target.selectionStart
  const length = currStr.length
  const split = formatNoCents(currStr).slice(1, 5).split('')
  const addsComma = split[1] === constants.COMMA
  const deletesComma = split[3] === constants.COMMA
  const deletesCents = deletes && (start === length || start === length - 1)
  if (deletesCents) {
    setCursor(start)
  } else if (selects && start === length) {
    setCursor(2)
  } else if (deletes && start === 1) {
    setCursor(1)
  } else if (deletes && deletesComma) {
    setCursor(start - 1)
  } else if (!deletes && addsComma) {
    setCursor(start + 1)
  } else {
    setCursor(start)
  }
}

export default function formatCurrency(currencyString, type) {
  const types = {
    formatNoCents,
    formatLoosely,
    formatStrictly,
  }
  return type ? types[type](currencyString) : currencyString
}
