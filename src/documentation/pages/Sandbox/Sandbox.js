import React from 'react'
import { Paginator, Card, DailyInterest } from '../../../lib'
import { Page, paginatorData } from '../..'

const Sandbox = () => {
  return (
    <Page title='Sandbox'>
      <Paginator
        blockColor='primary'
        records={paginatorData}
        rows={5}
        adjacents={1}>
        {({ title, value }) => <Card key={title} title={title} value={value} />}
      </Paginator>
      <DailyInterest />
    </Page>
  )
}

export default Sandbox
