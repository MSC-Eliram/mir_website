import firebase from "firebase/app";
import firebase from 'firebase;'
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAk_4jW-QbYSn4YYQ14U0NjTXwq6NQz4Q0",
    authDomain: "mirlogic-login.firebaseapp.com",
    databaseURL: "https://mirlogic-login.firebaseio.com",
    projectId: "mirlogic-login",
    storageBucket: "mirlogic-login.appspot.com",
    messagingSenderId: "29050385339",
    appId: "1:29050385339:web:2e4cad2eecdbc2fb1c4a9e",
    measurementId: "G-T0F0T8S6FB"
  };

const fire =  firebase.initializeApp(firebaseConfig);
export default fire;
// export const auth = firebase.auth();
// export const firestore = firebase.firestore();


// export const generateUserDocument = async (user, additionalData) => {
//     if (!user) return;
//     const userRef = firestore.doc(`users/${user.uid}`);
//     const snapshot = await userRef.get();
//     if (!snapshot.exists) {
//         const { email, displayName, photoURL } = user;
//         try {
//             await userRef.set({
//                 displayName,
//                 email
//             });
//         } catch (error) {
//             console.error("Error creating user document", error);
//         }
//     }
//     return getUserDocument(user.uid);
// };

// const getUserDocument = async id => {
//     if (!uid) return null;
//     try {
//         const userDocument = await firestore.doc(`users/${uid}`).get();
//         return {
//             uid,
//             ...userDocument.data()
//         };
//     } catch (error) {
//         console.error("Error fetching user", error);
//     }
// };
