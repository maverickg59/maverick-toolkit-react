import React, { Fragment } from 'react'
import { Card } from '../components'
import { Paginator } from '../../lib'
import { paginatorData } from '../'

const SandBox = () => {
  return (
    <Fragment>
      <Paginator
        blockColor='primary'
        records={paginatorData}
        rows={8}
        adjacents={0}>
        {({ title, value }) => <Card key={title} title={title} value={value} />}
      </Paginator>
    </Fragment>
  )
}

export default SandBox
