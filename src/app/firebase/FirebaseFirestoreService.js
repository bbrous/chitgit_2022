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

const createNewUserDocument =async (uid) => {

  const userRef = firestore.doc(`users/${uid}`)
  
  try {
    userRef.set({
      entities: [],
      notes: []
    })

   

  } catch(error){
    console.log('[firebase.utils] error in createNewUserDocument: ' , error.message)
  }
}



// ===================== export ======================================

const FirebaseFirestoreService = {
  
  createDocument,
  createNewUserDocument

}

export default FirebaseFirestoreService