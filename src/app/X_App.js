/* app/App.js in chitgit_2022

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
 
import { useDispatch, useSelector } from 'react-redux'; 
import { Route, Routes , Navigate, Link } from 'react-router-dom'


import FirebaseAuthService from './firebase/FirebaseAuthService.js';
import { selectLoadingStatus, updateUid, selectUid } from './redux/statusRedux/statusSlice.jsx';

import { ThemeProvider } from '@mui/styles';
import CssBaseline from '@mui/material/CssBaseline'

import theme from '../styles/Theme'

import Loading from '../common_components/Loading';
import Landing from '../pages/public/Landing'
import Features from '../pages/public/Features'
import Sample from '../pages/public/Sample'
import SampleMain from '../pages/public/sampleSite/Main_s'

import Home from '../pages/private/Home'
import Main from '../pages/private/Main'
import Join from '../pages/public/Join'
import Login from '../pages/public/Login'



// import Try from '../pages/sandBox/aTry'
// import Notes from '../pages/private/Notes'
// import Spotlights from '../pages/private/spotlightElements/SpotlightsMain'
// 


// import Notification from '../pages/public/Notification'


// import TwoParty from '../pages/main/twoParty/MainTP'
// import Personal from '../pages/main/personal/MainPE'
// import Work from '../pages/main/work/MainWO'
// import Contract from '../pages/main/contract/MainCO'







const App = () => {
  const dispatch = useDispatch()

  const [user, setUser ] = useState(null)

  let loadingStatus = useSelector(selectLoadingStatus)

  FirebaseAuthService.subscribeToAuthChanges(setUser) 

  let [uid, setUid ]= useSelector(selectUid)


  useEffect(() => {
    console.log('[ App ] user ', user);
    if(user){
      dispatch(updateUid(user.uid))
    }
  
      
    },[user, dispatch])

     

 

    // ---return
    return (
      <CssBaseline>
        <ThemeProvider theme = {theme} >

        {loadingStatus && <Loading />}

        <Routes>

{/* ---  logged in ---- */}

        {uid && 
          <>

            <Route path="/" element={<Navigate replace to="/home" />} />
            <Route path='/home' element={<Home />} />
            
            <Route path='/main/:page:id' element={<Main />} />
            <Route path='/main/:page' element={<Main />} />
            <Route path='/main' element={<Main />} />

          </>
        }

{/* --- not logged in ---- */}

            <Route path='/join' element={<Join/>} />
            <Route path='/login' element={<Login/>} />

<Route path='/features' element={<Features />} /> 
            
            <Route path='/sample/:pageView/:detailId' element={<SampleMain />} />
            <Route path='/sample/:pageView' element={<SampleMain />} />
            <Route path='/sample' element={<Sample />} />

            <Route path='/' element={<Landing />} />

            {/* <Route path='/*' element={<NotFound />} /> */}



    


          </Routes>
           


              
        </ThemeProvider>
      </CssBaseline>
        
    )
  }


export default App;