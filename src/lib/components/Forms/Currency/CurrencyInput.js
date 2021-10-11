import React, { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import formatCurrency, {
  setCursorPosition,
  formatNoCents,
  formatStrictly,
} from './currencyHelper'
import { Input, currency, usePrevious } from '../../../'

const CurrencyInput = ({ value = 0, maxDollar = 16, name }) => {
  const inputRef = useRef()
  const [currencyValue, setCurrencyValue] = useState(formatStrictly(value))
  const [pasteValue, setPasteValue] = useState()
  const [selectedValue, setSelectedValue] = useState()
  const [cursor, setCursor] = useState(0)
  const [key, setKey] = useState('')
  const prevCurrStr = usePrevious(currencyValue)
  const prevCurrArr = usePrevious(
    currencyValue.split('.') ? currencyValue.split('.') : ''
  )
  useEffect(() => {
    inputRef.current?.setSelectionRange(cursor, cursor)
  }, [cursor])
  const format = (currStr, type) =>
    setCurrencyValue(formatCurrency(currStr, type))
  const handleChange = e => {
    setCursor(e.target.selectionStart)
    const currStr = e.target.value
    const currStrArr = currStr.split('.')
    const d = currStrArr[0] ? currStrArr[0] : []
    const c = currStrArr[1] ? currStrArr[1] : []
    const dL = d.length
    const cL = c.length
    const pCAL = prevCurrArr?.length
    if (currStrArr[0].length > maxDollar) {
      if (cL === 0) {
        format(prevCurrStr, currency.NO_CENTS)
      } else if (cL === 1) {
        format(prevCurrStr, currency.LOOSELYLY)
      } else {
        format(prevCurrStr, currency.STRICT)
      }
    } else if (pasteValue) {
      const split = pasteValue.split('.')
      const cleanDL = split[0].replace(/[^0-9]/g, '').length
      const cleanCL = split[1]?.replace(/[^0-9]/g, '').length
      if (cleanDL > maxDollar || cleanCL > 2 || isNaN(pasteValue)) {
        format(0, currency.STRICT)
      } else if (cleanCL === 0) {
        format(pasteValue, currency.NO_CENTS)
      } else if (cleanCL === 1) {
        format(pasteValue, currency.LOOSELYLY)
      } else {
        format(pasteValue, currency.STRICT)
      }
      setPasteValue()
    } else if (selectedValue?.length === prevCurrStr?.length) {
      format(currStr, currency.NO_CENTS)
      setCursorPosition(currStr, e, setCursor, false, true)
    } else if (key === '.' && pCAL === 1) {
      if (cL === 0) {
        setCurrencyValue(`${currStr}`)
      } else if (cL === 2) {
        format(currStr, currency.STRICT)
      } else {
        format(currStr, currency.LOOSELY)
      }
    } else if (key === currency.BACKSPACE || key === currency.DELETE) {
      if (dL === 1 && cL === 0) {
        setCurrencyValue(currency.DOLLAR)
      } else {
        if (cL === 2) {
          format(currStr, currency.STRICT)
          setCursorPosition(currStr, e, setCursor, true)
        } else if (cL === 1) {
          format(currStr, currency.LOOSELY)
          setCursorPosition(currStr, e, setCursor, true)
        } else if (
          cL === 0 &&
          prevCurrStr[prevCurrStr.length - 1] === currency.PERIOD
        ) {
          format(currStr, currency.NO_CENTS)
          setCursorPosition(currStr, e, setCursor, true)
        } else if (cL === 0) {
          setCurrencyValue(`${formatNoCents(currStr)}.`)
          setCursorPosition(currStr, e, setCursor, true)
        }
      }
    } else if (key !== currency.PERIOD) {
      if (cL === 0) {
        format(currStr, currency.NO_CENTS)
        setCursorPosition(currStr, e, setCursor, false)
      } else if (cL === 1) {
        format(currStr, currency.LOOSELY)
        setCursorPosition(currStr, e, setCursor, false)
      } else {
        const shouldUpdate = prevCurrArr[1].split('').length === 1
        const cents = shouldUpdate ? currStrArr[1] : prevCurrArr[1]
        const updatedCurrStr = [currStrArr[0], cents].join('.')
        format(updatedCurrStr, currency.STRICT)
        setCursorPosition(currStr, e, setCursor, false)
      }
    }
  }
  const handleKeyDown = e => setKey(e.key)
  const handlePaste = e => setPasteValue(e.clipboardData.getData('Text'))
  const handleBlur = () => format(currencyValue, currency.STRICT)
  const handleSelect = e =>
    setSelectedValue(
      e.target.value.substring(e.target.selectionStart, e.target.selectionEnd)
    )
  return (
    <Input
      ref={inputRef}
      placeholder={currency.PLACEHOLDER}
      className='c-input__currency'
      onBlur={() => handleBlur()}
      onChange={e => handleChange(e)}
      onKeyDown={e => handleKeyDown(e)}
      onSelect={e => handleSelect(e)}
      onPaste={e => handlePaste(e)}
      name={name}
      value={currencyValue}
    />
  )
}

CurrencyInput.propTypes = {
  placeholder: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.number,
}

export default CurrencyInput
