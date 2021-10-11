import { constants } from './'
export default function reducer(state, action) {
  const { PURCHASE_CONSTANTS } = constants
  const { type, field, payload } = action
  switch (type) {
    case PURCHASE_CONSTANTS.PURCHASE:
      return { ...state, [field]: payload }
    default:
      throw new Error()
  }
}
