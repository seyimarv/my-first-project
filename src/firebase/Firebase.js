import firebase from 'firebase/app';

import 'firebase/firestore'
import 'firebase/auth'


const config = {
    apiKey: "AIzaSyBdcRh2S-dGwZStUjCrCFqkgxAeyJLSBgI",
    authDomain: "marv-db.firebaseapp.com",
    databaseURL: "https://marv-db.firebaseio.com",
    projectId: "marv-db",
    storageBucket: "marv-db.appspot.com",
    messagingSenderId: "461623570692",
    appId: "1:461623570692:web:43587b379da937fe97a051",
    measurementId: "G-1GVXPRZD89"
  };

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;
    
    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
    	const { displayName, email } = userAuth;
    	const createdAt = new Date();

    	try {
    		await userRef.set({
    			displayName,
    			email,
    			createdAt,
    			...additionalData
    		})

    	} catch(error) {
    		console.log('error creating user')

    	}
    }

    return userRef;

}

export const addCollectionAndDoc = async (collectionKey, objectsToAdd) => {
	const collectionRef = firestore.collection(collectionKey);

	const batch = firestore.batch();
	objectsToAdd.forEach(obj =>{
		const newDocRef = collectionRef.doc();
		batch.set(newDocRef, obj);
	});
	return await batch.commit();
};

export const convertCollectionsSnapshotToMap = collections => {
  const transformedCollection =collections.docs.map(doc => {
  	const {title, items} = doc.data();
  	 return {
  	 	routeName: encodeURI(title.toLowerCase()),
  	 	id: doc.id,
  	 	title,
  	 	items  	
  	 };
  })

   return transformedCollection.reduce((accumulator, collection) => {
   accumulator[collection.title.toLowerCase()] = collection;
   return accumulator;
   }, {});

}
export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore()

  export const googleProvider = new firebase.auth.GoogleAuthProvider();
  googleProvider.setCustomParameters({prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

  export default firebase;




