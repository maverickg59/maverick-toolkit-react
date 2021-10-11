import React, { Fragment, useState, useEffect } from 'react'
import { Input } from '../../Forms'

const DailyInterest = () => {
  const [principal, setPrincipal] = useState()
  const [apy, setApy] = useState()
  const [days, setDays] = useState()
  const [daily, setDaily] = useState()
  useEffect(() => {
    setDaily(((apy * 0.01) / 365) * principal)
  }, [principal, apy, days, daily])
  return (
    <Fragment>
      <span>Margin Calculator:</span>
      <div>
        <Input
          value={principal}
          onChange={e => setPrincipal(e.target.value)}
          placeholder='Principal value'
        />
        <Input
          value={apy}
          onChange={e => setApy(e.target.value)}
          placeholder='APY value'
        />
        <Input
          value={days}
          onChange={e => setDays(e.target.value)}
          placeholder='Enter number of days held'
        />
      </div>
      <div></div>
      <span>Daily Interest:</span>
      {apy && principal && <span>${daily}</span>}
      {days && (
        <Fragment>
          <span>Total Interest:</span>
          <span>${daily * days}</span>
        </Fragment>
      )}
    </Fragment>
  )
}

export default DailyInterest
