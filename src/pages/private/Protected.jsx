import React from 'react'
import { Route, Switch, Redirect, useHistory } from 'react-router-dom'

// import Home from './Main'
// import Join from '../public/Join'
// import Landing from '../public/Landing'
// import Notes from './Notes'
// import Logs from './Logs'
// import Spotlights from './Spotlights'



/*
Protected.jsx requires user to have a cookie in their browser set to logged in

If there is a current user - user is taken to '/main ' which has Routes to
   Notes, Logs, Spotlights

   Each page (Notes, Logs, Spotlights) is comprised of parts:  

       - Spotlights -> spotlightElements/SpotlightsMain -> spotlightElements/Spotlight + 
                                                            navElements/SpotlightNav
       - Notes -> noteElements/NotesMain -> noteElements/Note +
                                            navElements/NoteaNav
       - Logs - > logElements/LogsMain -> logElements/Log +
                                            navElements/LogaNav

    "xxxPageS" queries the database passes props to xxxMain and xxxNav
    "xxxMain" holds all notes, spotlights or logs... and maps through them

    "xxxPage" holds each display cell to be displayed in xxxMain

*/


const Protected = (props) => {
  
  // let user = props.currentUser
  // console.log('[PROTECTED _ USER : ' , props.currentUser)

  // if(!user){
  //   return  <Redirect to = '/join'/>
  // }
 
 return (
 

  <div>
  Protected Page here

  </div>



  // <Home currentUser = {user}/>

  // <Switch> 
  // <Redirect exact from="/" to="/main" />
  // <Route exact path="/main">
  //   <Home currentUser = {user}/>
  // </Route>
  // <Route exact path="/main/notes" component={Notes}/>
  // <Route exact path="/main/logs" component={Logs}/>
  // <Route exact path="/main/spotlights" component={Spotlights}/>
  // <Route path={`${process.env.PUBLIC_URL}/home`} exact component={Landing} />
  // <Route path ={`${process.env.PUBLIC_URL}/join`}   exact component = {Join} />  
  // </Switch>

  
  
             
   

  )
}

export default Protected
