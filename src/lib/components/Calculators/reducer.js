import produce from 'immer'
import {
  FIRST_LEVEL_PROPERTY,
  SECOND_LEVEL_PROPERTY,
  THIRD_LEVEL_PROPERTY,
} from './constants'

const reducer = produce((draft, action) => {
  const { type, parent, child, field, payload } = action
  switch (type) {
    case FIRST_LEVEL_PROPERTY:
      console.log(type, parent, payload)
      draft[parent] = payload
      break
    case SECOND_LEVEL_PROPERTY:
      console.log(type, parent, child, payload)
      draft[parent][child] = payload
      break
    case THIRD_LEVEL_PROPERTY:
      console.log(type, parent, child, field, payload)
      draft[parent][child][field] = payload
      break
    default:
      throw new Error()
  }
})

export default reducer
