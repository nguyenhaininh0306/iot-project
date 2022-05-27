import actionsType from './actionsType'
import { db } from '../../firebase/config'
import { ref, onValue } from 'firebase/database'

export const fetchDataRequest = () => {
  return {
    type: actionsType.DATA_REQUEST,
  }
}

export const fetchDataSuccess = (dataDevice) => {
  return {
    type: actionsType.DATA_SUCCESS,
    payload: dataDevice,
  }
}

export const fetchDataFailed = (error) => {
  return {
    type: actionsType.DATA_FAILED,
    payload: error,
  }
}

export const fetchDataDevice = () => {}
