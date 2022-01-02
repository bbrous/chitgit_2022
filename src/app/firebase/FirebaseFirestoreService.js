import firebase from './FirebaseConfig'

const firestore = firebase.firestore()

// --- create a document with Firebase auto ID ------------------------

// ---test

// const createDocument = () => {
//   firestore.collection('users').doc(' OazwrDkOKJWLvoAhXvPfHQo2pZs1').collection('entities').add({
//     a: 'Shelby',
//     b: 'has a birthday today'
//   })
// }

// ---generic 

const createDocument = (uid, appCollection, dataObject) => {
  firestore.collection('users').doc(uid).collection(appCollection).add(dataObject)
}

// --- create a document with Firebase with prefab ID ----------------
// use to create new user when ID comes from the auth_0

// const createNewUserDocument =async (uid) => {

//   const userRef = firestore.doc(`users/${uid}`)
  
//   try {
//     userRef.set({
//       entities: [],
//       notes: []
//     })

   

//   } catch(error){
//     console.log('[firebase.utils] error in createNewUserDocument: ' , error.message)
//   }
// }


// --- create a new User in Firestore with Firebase with prefab ID ----------------

export const createUserProfileDocument = async (userId, userEmail, userFirstName, userLastName) =>{

  // check if auth does Not exist - don't do anything
  if(!userId){ return}
  console.log('{firebase.utils] userAuth: ', userId)
  // if there is a userAuth object

  const userRef = firestore.doc(`users/${userId}`)

console.log('[ firebase ] userRef ', userRef);

  const snapShot = await userRef.get()
  console.log('[ firebase ] snapShot ', snapShot);
  

  if(!snapShot.exists) {
    const email = userEmail
    const firstName = userFirstName
    const lastName = userLastName

    console.log('[ firebase ] userRef ', email);
    const createdAt = new Date()
    const lastVisit = new Date()
    try {
      await userRef.set({
        firstName,
        lastName,
        email,
        createdAt,
        lastVisit
        
      })

    } catch(error){
      console.log('[firebase.utils] error in createUserProfileDocument: ' , error.message)
    }

    return userRef

  }
} // end createUserProfileDocument


// ===================== export ======================================

const FirebaseFirestoreService = {
  
  createDocument,
  // createNewUserDocument,


}

export default FirebaseFirestoreService