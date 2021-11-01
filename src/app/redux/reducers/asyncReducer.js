const ASYNC_ACTION_START = 'ASYNC_ACTION_START'
const ASYNC_ACTION_FINISH = 'ASYNC_ACTION_FINISH'
const ASYNC_ACTION_ERROR = 'ASYNC_ACTION_ERROR'


//  Async actions --------------------

export const  asyncActionStart = () => {
console.log('Async action Started')
  return {
    type: ASYNC_ACTION_START,
  }
}

export const  asyncActionFinish = () => {

  return {
    type: ASYNC_ACTION_FINISH,
  }
}

export const  asyncActionError = (error) => {

  return {
    type: ASYNC_ACTION_ERROR,
    payload: error
  }
}


//  Async reducers --------------------
const initialState = {
  loading: false,
  error: null
}

const asyncReducer = (state = initialState, {type, payload}) => {


  switch(type) {

    case ASYNC_ACTION_START: 
      {
        return{
          ...state,
          loading: true
        }
      }// ASYNC_ACTION_START
      
    case ASYNC_ACTION_FINISH: 
    {
      return{
        ...state,
        loading: false,
        error: null
      }
    }// ASYNC_ACTION_FINISH
    
    case ASYNC_ACTION_ERROR: 
      {
        return{
          ...state,
          loading: false,
          error: payload
        }
      }// ASYNC_ACTION_ERROR

    default:
      return state

  } 

}// end reducer

export default asyncReducer

 