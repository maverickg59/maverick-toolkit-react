# Icon Component

The `Icon` component uses the font-awesome JavaScript library

## Usage

This component accepts an array of icons imported from the various font-awesome packages.

This is done with the following steps:

1. Initialize a library by passing an array of icons imported from font-awesome to `iconLibrary`

- note: it is preferable to complete step one at the top level of your application to avoid clouding the dependency graph

2. Import `Icon` and pass the icon name (as the string found in the font-awesome documentation) as a prop

```
import React, { Fragment } from 'react'
import { icon, iconLibrary } from 'maverick-toolkit-react'
import { heart } from '@fortawesome/free-solid-svg-icons'

// It is preferable to instantiate this library at the top level of your application to avoid clouding the dependency graph
iconLibrary([heart])

const SomeComponent = () => {
  return (
    <Fragment>
      <Icon icon='heart' />
    </Fragment>
  )
}
```

## Props

- className | String
- size | String, one of []
- color | String
- icon | String

### importing brand icons

`import { fab } from '@fortawesome/free-brands-svg-icons'`

### import solid icons

`import { faComments } from '@fortawesome/free-solid-svg-icons'`

### import regular icons

`import { faClock as farClock } from '@fortawesome/free-regular-svg-icons'`
