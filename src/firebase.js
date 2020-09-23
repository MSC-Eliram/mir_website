// import firebase from "firebase/app";
// import "firebase/auth";
// import "firebase/firestore";

// const firebaseConfig = {
//     apiKey: 'AIzaSyC11JbIFO30Ang1mwrRURYREKx0KB3WTxY',
//     authDomain: 'fir-mirlogic-website.firebaseapp.com',
//     databaseURL: 'https://fir-mirlogic-website.firebaseio.com',
//     projectId: 'fir-mirlogic-website',
//     storageBucket: 'fir-mirlogic-website.appspot.com',
//     messagingSenderId: '484972206279',
//     appId: '1:484972206279:web:925d2275361c03e86946e2'
// };

// firebase.initializeApp(firebaseConfig);
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
