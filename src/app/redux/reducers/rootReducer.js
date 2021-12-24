//rootReducer.js

/*

DATA BASE - Data Loading --------------

Initial Store Data from database gets loaded with
homeActions (features/main/home/homeActions.js) in
componentDidMount.  The Home.jsx file is the destination
after successful login.


*/

import { combineReducers } from 'redux';



// import asyncReducer from './asyncReducer'
import sampleReducer from './sampleRootReducer'
import mainReducer from './mainRootReducer'


const rootReducer = combineReducers({

  // async: asyncReducer,
    sample: sampleReducer,
    main: mainReducer

  

})

export default rootReducer