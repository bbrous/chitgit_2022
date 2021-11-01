import {delay} from '../utils/util'
import initialStore from '../redux/store/InitialStore'

import InitialSpotlights from '../redux/store/InitialData'
import InitialAccountInfo from '../redux/store/InitialAccountInfo'

export  function fetchSampleData() {
  
  return delay(2000).then(function(){
    console.log('byebyebyebyebyee' , initialStore)
    return Promise.resolve(initialStore) 
  })
}


export  function fetchInitialSpotlights() {
  
  return delay(2000).then(function(){
    console.log('byebyebyebyebyee' , InitialSpotlights)
    return Promise.resolve(InitialSpotlights) 
  })
}

export  function fetchInitialAccountInfo() {
  
  return delay(2000).then(function(){
    console.log('helllllooooooo' , InitialAccountInfo)
    return Promise.resolve(InitialAccountInfo) 
  })
}
