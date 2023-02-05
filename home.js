
import {getAuth,onAuthStateChanged,signInWithEmailAndPassword,createUserWithEmailAndPassword,sendPasswordResetEmail} from 'firebase/auth';

const auth=getAuth();
onAuthStateChanged(auth, async(user,err) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
    //   const uid = user.uid;
    location.replace("welcome.html")
      // ...
    } else {
      // User is signed out
      document.getElementById("error").innerHTML="plese login";
      // ...
    }
  });

// async function loginForm(){
//     let email=document.getElementById("email").value;
//     let password=document.getElementById("password").value;
//     await signInWithEmailAndPassword(auth,email,password,()=>{
//         const user = userCredential.user;
//       })
//  }



  document.getElementById("loginForm").addEventListener('submit',(e)=>{
    // alert("hello")
    let email=document.getElementById("email").value;
let password=document.getElementById("password").value;
signInWithEmailAndPassword(auth,email,password)
.then(()=>{
    document.getElementById("error").innerHTML="login success";
})
.catch((err)=>{
    // console.log(err)
    document.getElementById("error").innerHTML=err.message;
})
    e.preventDefault();
          })



          document.getElementById("signup").addEventListener("click",(e)=>{
            e.preventDefault();
            let email=document.getElementById("email").value;
            let password=document.getElementById("password").value;
            createUserWithEmailAndPassword(auth,email,password).then(()=>{
                document.getElementById("error").innerHTML="login success";
            }).catch((e)=>{
    document.getElementById("error").innerHTML=e.message;

            })
          })


          // ForgetErrorerror