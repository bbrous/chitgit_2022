/* pages/private/Home in chitgit_2022

Equivalent to Landing Page...  for authenticated user

contains: 
 - links to load different apps
 - Inspiration page display

Each link goes to pages/private/Main/:{page to load}

*/


import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import { Route, Routes , Navigate, Link } from 'react-router-dom'
import FirebaseAuthService from '../../app/firebase/FirebaseAuthService';
import { selectUid } from '../../app/redux/statusRedux/statusSlice';

import { updateUid } from '../../app/redux/statusRedux/statusSlice';
const Home = () => {

  const dispatch = useDispatch()

  const [user, setUser ] = useState(null)

  let uid = useSelector(selectUid)


  useEffect(() => {

    console.log('[ HOME ] user ', user );
    console.log('[ HOME ] userId ', uid );
    setUser(uid)

  }, [user, uid])


  const  handleLogout =()=>{
    FirebaseAuthService.logoutUser()
    dispatch(updateUid(''))
   
  }
  return (
    <div>
  {!user && <Link to='/login'>login</Link>}
          {user && <Link to='/' onClick={() => handleLogout()}> logout</Link>}
      <div>Home Page</div>
      <div>links to various apps</div>
      <div>Inspiration display</div>
    </div>
  )
}

export default Home
