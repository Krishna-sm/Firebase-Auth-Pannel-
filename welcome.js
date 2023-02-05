import {getAuth,onAuthStateChanged,signOut} from 'firebase/auth';

const auth=getAuth();
onAuthStateChanged(auth, async(user) => {
    if (!user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
    //   const uid = user.uid;
    location.replace("index.html")
      // ...
    } else {
      // User is signed out
      console.log(user.email)
    const data=user.email;
    document.getElementById("emailIO").innerText=data;
      // ...
    }
  });
  document.getElementById("logout").addEventListener('click',()=>{
    signOut(auth);
  })