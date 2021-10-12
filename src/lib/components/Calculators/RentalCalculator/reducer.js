import { constants } from './'

const purchaseReducer = (state, action) => {
  const { field, payload } = action
  console.log(field, payload)
  return {
    ...state,
    purchase: {
      ...state.purchase,
      [field]: payload,
    },
  }
}

export default function reducer(state, action) {
  const { PURCHASE_CONSTANTS } = constants
  switch (action.type) {
    case PURCHASE_CONSTANTS.PURCHASE:
      return purchaseReducer(state, action)
    default:
      throw new Error()
  }
}
