import {

  UPDATE_USER_AUTH
  
  
} from '../store/storeConstants';


export const  updateUserAuth = (userData) => {
  // console.log("[ACTION] - updateUserAuth clicked : userData is: ", userData)
  return {
    type: UPDATE_USER_AUTH,
    payload: {
      authData: userData
      
    }
  }
}


