import currency from 'currency.js'
import { currency as constants } from '../../../..'

const formatNoCents = currencyString => {
  return currency(currencyString, {
    precision: 0,
  }).format()
}
const formatLoosely = currencyString => {
  return currency(currencyString, {
    precision: 1,
  }).format()
}

const formatStrictly = currencyString => {
  return currency(currencyString, {
    precision: 2,
  }).format()
}

const setCursorPosition = (
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

const format = (currencyString, type) => {
  const types = {
    formatNoCents,
    formatLoosely,
    formatStrictly,
  }
  return type ? types[type](currencyString) : currencyString
}

export default function formatCurrency(
  e,
  setCursor,
  prevCurrStr,
  maxChar,
  pasteValue,
  setPasteValue,
  selectedValue,
  key
) {
  setCursor(e.target.selectionStart)
  let currStr = e.target.value
  const currStrArr = currStr.split('.')
  const prevCurrArr = prevCurrStr ? prevCurrStr.split('.') : []
  const dollars = currStrArr[0] ? currStrArr[0] : []
  const cents = currStrArr[1] ? currStrArr[1] : []
  const dollarsLength = dollars.length
  const centsLength = cents.length
  const pCAL = prevCurrArr.length

  if (currStrArr[0].length > maxChar) {
    if (centsLength === 0) {
      currStr = format(prevCurrStr, constants.NO_CENTS)
    } else if (centsLength === 1) {
      currStr = format(prevCurrStr, constants.LOOSELY)
    } else {
      currStr = format(prevCurrStr, constants.STRICT)
    }
  } else if (pasteValue) {
    const split = pasteValue.split('.')
    const dollarLength = split[0].replace(/[^0-9]/g, '').length
    const centsLength = split[1]?.replace(/[^0-9]/g, '').length
    if (dollarLength > maxChar || centsLength > 2 || isNaN(pasteValue)) {
      currStr = format(0, constants.STRICT)
    } else if (centsLength === 0) {
      currStr = format(pasteValue, constants.NO_CENTS)
    } else if (centsLength === 1) {
      currStr = format(pasteValue, constants.LOOSELY)
    } else {
      currStr = format(pasteValue, constants.STRICT)
    }
    setPasteValue()
  } else if (selectedValue.length === prevCurrStr.length) {
    currStr = format(currStr, constants.NO_CENTS)
    setCursorPosition(currStr, e, setCursor, false, true)
  } else if (key === constants.PERIOD && pCAL === 1) {
    if (centsLength === 0) {
      currStr = format(`${currStr}`)
    } else if (centsLength === 2) {
      currStr = format(currStr, constants.STRICT)
    } else {
      currStr = format(currStr, constants.LOOSELY)
    }
  } else if (key === constants.BACKSPACE || key === constants.DELETE) {
    if (dollarsLength === 1 && centsLength === 0) {
      currStr = format(constants.DOLLAR)
    } else {
      if (centsLength === 2) {
        currStr = format(currStr, constants.STRICT)
        setCursorPosition(currStr, e, setCursor, true)
      } else if (centsLength === 1) {
        currStr = format(currStr, constants.LOOSELY)
        setCursorPosition(currStr, e, setCursor, true)
      } else if (
        centsLength === 0 &&
        prevCurrStr[prevCurrStr.length - 1] === constants.PERIOD
      ) {
        currStr = format(currStr, constants.NO_CENTS)
        setCursorPosition(currStr, e, setCursor, true)
      } else if (centsLength === 0) {
        currStr = format(`${currStr}`)
        setCursorPosition(currStr, e, setCursor, true)
      }
    }
  } else if (key !== constants.PERIOD) {
    if (centsLength === 0) {
      currStr = format(currStr, constants.NO_CENTS)
      setCursorPosition(currStr, e, setCursor, false)
    } else if (centsLength === 1) {
      currStr = format(currStr, constants.LOOSELY)
      setCursorPosition(currStr, e, setCursor, false)
    } else {
      const shouldUpdate = prevCurrArr[1].split('').length === 1
      const cents = shouldUpdate ? currStrArr[1] : prevCurrArr[1]
      const updatedCurrStr = [currStrArr[0], cents].join('.')
      currStr = format(updatedCurrStr, constants.STRICT)
      setCursorPosition(currStr, e, setCursor, false)
    }
  }
  return currStr
}
