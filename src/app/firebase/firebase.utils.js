import firebase from 'firebase/app'
import 'firebase/firestore'

import 'firebase/auth'
import 'firebase/storage'
import 'firebase/database'
import { CallToActionSharp } from '@material-ui/icons'

// --- For pages / test --------------------------

// const firebaseConfig = {
//   apiKey: "AIzaSyBH1X6bo1eFC4_E1m2DIhmrZ_oTOHMm2AI",
//   authDomain: "fir-sandbox-1bb99.firebaseapp.com",
//   projectId: "fir-sandbox-1bb99",
//   storageBucket: "fir-sandbox-1bb99.appspot.com",
//   messagingSenderId: "94207885117",
//   appId: "1:94207885117:web:1adc9486638f4650f4cf54"


// }



// --- For pages / spotModel --------------------------

const config = {
  apiKey: "AIzaSyCQ84ICyUEpureK94ogtGQqSsk5ff__864",
    authDomain: "chitabit-546f8.firebaseapp.com",
    projectId: "chitabit-546f8",
    storageBucket: "chitabit-546f8.appspot.com",
    messagingSenderId: "138656142287",
    appId: "1:138656142287:web:e6546afbc887aaf98db8ba"


}

// transfer auth object into Firebase

export const createUserProfileDocument = async (userAuth, additionalData) =>{

  // check if auth does Not exist - don't do anything
  if(!userAuth){ return}
  console.log('{firebase.utils] userAuth: ', userAuth)
  // if there is a userAuth object

  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get()

  if(!snapShot.exists) {
    const {displayName, email} = userAuth
    const createdAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })

     

    } catch(error){
      console.log('[firebase.utils] error in createUserProfileDocument: ' , error.message)
    }

    return userRef

  }

  console.log('{firebase.utils] userAuth: ', snapShot)


}


firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()


// ----- Google (specific) sign in methods ----------------------

provider.setCustomParameters({prompt: 'select_account'})
export const signInWithGoogle = ()=> auth.signInWithPopup(provider)

export default firebase
 