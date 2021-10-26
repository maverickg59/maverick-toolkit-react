import React, { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import formatCurrency from './helper/currency'
import { Input, currency, usePrevious } from '../../..'

const CurrencyInput = ({
  value,
  maxChar = 16,
  name,
  onChange,
  label,
  type,
  placeholder,
}) => {
  const inputRef = useRef()
  const [pasteValue, setPasteValue] = useState()
  const [selectedValue, setSelectedValue] = useState()
  const [cursor, setCursor] = useState(0)
  const [key, setKey] = useState('')
  const prevCurrStr = usePrevious(value)

  useEffect(() => {
    inputRef.current?.setSelectionRange(cursor, cursor)
  }, [cursor])

  const handleChange = e => {
    onChange(
      formatCurrency(
        e,
        setCursor,
        prevCurrStr,
        maxChar,
        pasteValue,
        setPasteValue,
        selectedValue,
        key
      )
    )
  }

  return (
    <Input
      ref={inputRef}
      type={type}
      placeholder={placeholder}
      className='c-input__currency'
      onBlur={e => handleChange(e)}
      onChange={e => handleChange(e)}
      onSelect={e =>
        setSelectedValue(
          e.target.value.substring(
            e.target.selectionStart,
            e.target.selectionEnd
          )
        )
      }
      onKeyDown={e => setKey(e.key)}
      onPaste={e => setPasteValue(e.clipboardData.getData('Text'))}
      name={name}
      value={value}
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
