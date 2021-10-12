import React, { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import formatCurrency, { setCursorPosition } from './currencyHelper'
import { Input, currency, usePrevious } from '../../..'

const CurrencyInput = ({ value, maxDollar = 16, name, onChange, label }) => {
  const inputRef = useRef()
  let currencyValue = value
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
  const operateOnCurrencyValue = (e, currencyValue) => {
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
        formatCurrency(prevCurrStr, currency.NO_CENTS)
      } else if (cL === 1) {
        formatCurrency(prevCurrStr, currency.LOOSELYLY)
      } else {
        formatCurrency(prevCurrStr, currency.STRICT)
      }
    } else if (pasteValue) {
      const split = pasteValue.split('.')
      const cleanDL = split[0].replace(/[^0-9]/g, '').length
      const cleanCL = split[1]?.replace(/[^0-9]/g, '').length
      if (cleanDL > maxDollar || cleanCL > 2 || isNaN(pasteValue)) {
        formatCurrency(0, currency.STRICT)
      } else if (cleanCL === 0) {
        formatCurrency(pasteValue, currency.NO_CENTS)
      } else if (cleanCL === 1) {
        formatCurrency(pasteValue, currency.LOOSELYLY)
      } else {
        return formatCurrency(pasteValue, currency.STRICT)
      }
      setPasteValue()
    } else if (selectedValue?.length === prevCurrStr?.length) {
      setCursorPosition(currStr, e, setCursor, false, true)
      return formatCurrency(currStr, currency.NO_CENTS)
    } else if (key === '.' && pCAL === 1) {
      if (cL === 0) {
        return formatCurrency(`${currStr}`)
      } else if (cL === 2) {
        return formatCurrency(currStr, currency.STRICT)
      } else {
        return formatCurrency(currStr, currency.LOOSELY)
      }
    } else if (key === currency.BACKSPACE || key === currency.DELETE) {
      if (dL === 1 && cL === 0) {
        return formatCurrency(currency.DOLLAR)
      } else {
        if (cL === 2) {
          setCursorPosition(currStr, e, setCursor, true)
          return formatCurrency(currStr, currency.STRICT)
        } else if (cL === 1) {
          setCursorPosition(currStr, e, setCursor, true)
          return formatCurrency(currStr, currency.LOOSELY)
        } else if (
          cL === 0 &&
          prevCurrStr[prevCurrStr.length - 1] === currency.PERIOD
        ) {
          setCursorPosition(currStr, e, setCursor, true)
          return formatCurrency(currStr, currency.NO_CENTS)
        } else if (cL === 0) {
          setCursorPosition(currStr, e, setCursor, true)
          return formatCurrency(`${currStr}`)
        }
      }
    } else if (key !== currency.PERIOD) {
      if (cL === 0) {
        setCursorPosition(currStr, e, setCursor, false)
        return formatCurrency(currStr, currency.NO_CENTS)
      } else if (cL === 1) {
        setCursorPosition(currStr, e, setCursor, false)
        return formatCurrency(currStr, currency.LOOSELY)
      } else {
        const shouldUpdate = prevCurrArr[1].split('').length === 1
        const cents = shouldUpdate ? currStrArr[1] : prevCurrArr[1]
        const updatedCurrStr = [currStrArr[0], cents].join('.')
        setCursorPosition(currStr, e, setCursor, false)
        return formatCurrency(updatedCurrStr, currency.STRICT)
      }
    }
  }
  const handleKeyDown = e => setKey(e.key)
  const handlePaste = e => setPasteValue(e.clipboardData.getData('Text'))
  const handleBlur = () => formatCurrency(currencyValue, currency.STRICT)
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
      onChange={e => onChange(operateOnCurrencyValue(e, value))}
      onKeyDown={e => handleKeyDown(e)}
      onSelect={e => handleSelect(e)}
      onPaste={e => handlePaste(e)}
      name={name}
      value={currencyValue}
      label={label}
    />
  )
}

CurrencyInput.propTypes = {
  placeholder: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.string,
}

export default CurrencyInput
