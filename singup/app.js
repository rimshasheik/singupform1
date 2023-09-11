import { getAuth } from "firebase/auth 1";

import { } from 'firebase/firestore';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPUuTB4Uokad0o6NZRX8UcpBwVwOzaeNs",
  authDomain: "form-87700.firebaseapp.com",
  projectId: "form-87700",
  storageBucket: "form-87700.appspot.com",
  messagingSenderId: "380373565753",
  appId: "1:380373565753:web:604146c0d5454737c3a8e8",
  measurementId: "G-M7W8L0VDZP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });



//Intialize Firebase//
firebaseConfig.initializeApp (firebaseConfig);
//Reference your Database//
var contactformDB ='firebase.data'
Base().ref('contactform');

document.getElementById ("contactform").addEventListener("submit",submitform);

function signupform (e) {
    e.preventdefault();
    var username = getelementval ('username');
    var email = getelementval ('email');
    var password = getelementval ('password');
    savemessages(username,email,password);
    console.log(username,email, password);

}

const savemessages = (usernam,emai,password)=>{
    var newContactForm = newContactFormDB .push();
    newContactForm.set({
        username : 'username',
        email: 'email',
        password: 'password',

    })
};


const getElementVal =  (id) => {
return documentbyid (id).value;
};



















