import React, { useContext, useState, useEffect, createContext } from 'react';
import { useHistory } from 'react-router';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, sendPasswordResetEmail, setPersistence, browserSessionPersistence } from 'firebase/auth';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'firebase/auth';
import 'firebase/storage';
import 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCX5zMUtAN_nQo688yO5s_vA3ZRBCaZVe4",
  authDomain: "manning-signs.firebaseapp.com",
  projectId: "manning-signs",
  storageBucket: "manning-signs.appspot.com",
  messagingSenderId: "555081678963",
  appId: "1:555081678963:web:48399777d528b2aa0f2a06",
  measurementId: "G-8RBLTCVBC8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const AuthContext = createContext();
const auth = getAuth();

export function useAuth() {
    return useContext(AuthContext)
};


export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);
    const history = useHistory();
    

    function signup(email, password) {
        return createUserWithEmailAndPassword(email, password);
    };

    function login(email, password) {     
        setPersistence(auth, browserSessionPersistence)
            .then(() => {
                // Existing and future Auth states are now persisted in the current
                // session only. Closing the window would clear any existing state even
                // if a user forgets to sign out.
                // ...
                // New sign-in will be persisted with session persistence.
                return signInWithEmailAndPassword(auth, email, password);
            })
            .catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    return signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
            // signed in
            const user = userCredential.user;
            return user;
        }).catch((error) => {
            console.log(error.message)
        });
    };

    function logout() {
        history.push('/login');
        return signOut(auth);
    };

    function resetPassword(email) {
        return sendPasswordResetEmail(auth, email);
    };

    function updateEmail(email) {
        return currentUser.updateEmail(email);
    };

    function updatePassword(password) {
        return currentUser.updatePassword(password)
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
        });

        return unsubscribe;
    }, [])

    const value = {
        currentUser,
        login,
        signup,
        logout,
        resetPassword,
        updateEmail,
        updatePassword,
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
};

