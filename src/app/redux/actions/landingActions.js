
import {SET_PAGE} from '../store/storeConstants';


export const  setPage = (id) => {
  return {
    type: SET_PAGE,
    payload: {
      page: id
    }
  }
}

