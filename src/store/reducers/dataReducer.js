import actionsType from '../actions/actionsType'

const initialState = {
  loading: true,
  dataDevice: [],
  error: '',
}

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionsType.DATA_REQUEST:
      return {
        ...state,
      }
    case actionsType.DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        dataDevice: action.payload,
      }

    case actionsType.DATA_FAILED:
      return {
        ...state,
        error: action.payload,
        dataDevice: [],
      }

    default:
      return state
  }
}

export default dataReducer
