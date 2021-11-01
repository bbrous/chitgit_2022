/* app/App.js in chitPro_2021

Main Funcitional Wrapper for entire site.
contains:
   Routing for:
      Landing
      Features
      Sample Site
      Protected - Entry way to user apps
   
    Also contains theming for @MUI


*/




import React, { Component, Fragment, useEffect, useState } from 'react';
 
import { Route, Switch } from 'react-router-dom'
// import { auth, createUserProfileDocument } from './firebase/firebase.utils.js'


import { ThemeProvider } from '@mui/styles';
import CssBaseline from '@mui/material/CssBaseline'

import theme from '../styles/Theme'


import Protected from '../pages/private/Protected'
import Landing from '../pages/public/Landing'
import Features from '../pages/public/Features'
import Sample from '../pages/public/Sample'
import SampleMain from '../pages/public/sampleSite/Main_s'

// import Home from '../pages/private/Main'
// import Try from '../pages/sandBox/aTry'
// import Notes from '../pages/private/Notes'
// import Spotlights from '../pages/private/spotlightElements/SpotlightsMain'
// 

// import Join from '../pages/public/Join'
// import Notification from '../pages/public/Notification'


// import TwoParty from '../pages/main/twoParty/MainTP'
// import Personal from '../pages/main/personal/MainPE'
// import Work from '../pages/main/work/MainWO'
// import Contract from '../pages/main/contract/MainCO'







class App extends Component {

  constructor(){
    super()

    this.state = {
      currentUser: null
    }
  }

  //---- set Firebase auth0 -------------
  unsubscribeFromAuth = null


  // **** UN-COMMENT to Autorization - change database in firebase.utils

//    componentDidMount(){
//     auth.onAuthStateChanged(user => {
//       this.setState({currentUser: user})
//       if(!user){console.log('[App.js] - not logged in')}

//       if(user){console.log('[App.js]- you are logged in - ', user)}

//     })

//     this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
// createUserProfileDocument(user)


//     })
//   }


  
//   componentWillUnmount(){
//     this.unsubscribeFromAuth()

//   }

 

  render() {

    
    return (
      <CssBaseline>
        <ThemeProvider theme = {theme} >
        <Switch>

            {!this.state.currentUser &&
              <Route path={`${process.env.PUBLIC_URL}/`} exact component={Landing} />
            }

            {this.state.currentUser &&
              //  <Protected currentUser = {this.state.currentUser}

              <Route path={`${process.env.PUBLIC_URL}/`}

                render={(props) => (
                  <Protected {...props} currentUser={this.state.currentUser} />

                )}

              />
              
            }
            <Route path={`${process.env.PUBLIC_URL}/home`} exact component={Landing} />

            <Route path={`${process.env.PUBLIC_URL}/features`} exact component={Features} />

            <Route path={`${process.env.PUBLIC_URL}/features/:id`}  component={Features} />


            <Route path={`${process.env.PUBLIC_URL}/sample`} exact component={Sample} />
 
            <Route path={`${process.env.PUBLIC_URL}/sample/:pageView`}  exact component={SampleMain} />

            <Route path={`${process.env.PUBLIC_URL}/sample/:pageView/:detailId`}  exact component={SampleMain} /> 
   



            {/* <Route path ={`${process.env.PUBLIC_URL}/join`}   exact component = {Join} />   */}

           

            {/* <Route   exact path ={`${process.env.PUBLIC_URL}/main`}   
            render={(props) => (
              <Home {...props} currentUser = {this.state.currentUser}/>
            )}
            />  */}
{/* 
<Route path ={`${process.env.PUBLIC_URL}/main/spotlights`}     exact component = {Spotlights} /> 

<Route path ={`${process.env.PUBLIC_URL}/main/spotlights/:id`}      component = {Spotlights} /> 

            <Route path ={`${process.env.PUBLIC_URL}/main/notes`}      component = {Notes} />  

             


            <Route   path ={`${process.env.PUBLIC_URL}/try`}   component = {Try} /> 
 */}


          </Switch>
           
          {/* <Route   path ='/(.+)' render ={()=>(

              )} 
              />  */}


              
        </ThemeProvider>
      </CssBaseline>
        
    )
  }
}

export default App;