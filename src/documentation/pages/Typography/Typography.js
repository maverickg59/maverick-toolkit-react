import React from 'react'
import { Page } from '../../'
import { Headers } from './'

const Typography = () => {
  return (
    <Page
      title='Typography'
      supplement='general rules and examples for typography'>
      <div className='o-row o-justify--center'>
        <section className='o-row__item u-1/1 u-p-lg'>
          <h2 className='u-h2'>Headers</h2>
          <Headers />
        </section>
        <section className='o-row__item u-1/1 u-p-lg'>
          <h2 className='u-h2'>Sections</h2>
          <h3 className='u-h3'>Interactive Page Typography</h3>
          <h3 className='u-h3'>Blog Page Typography</h3>
        </section>
      </div>
    </Page>
  )
}

export default Typography
