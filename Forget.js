
import {getAuth,sendPasswordResetEmail} from 'firebase/auth';

const auth=getAuth();

document.getElementById("forgetForm").addEventListener("submit",(e)=>{
    e.preventDefault();
    let email=document.getElementById("email").value;
    sendPasswordResetEmail(auth, email)
      .then(() => {
        // Password reset email sent!
        // console.log(`Email send to ${email}`);
        document.getElementById("ForgetError").innerHTML=`Email send to ${email}`;
        // ..
      })
      .catch((error) => {
        // alert(error.message);
        // document.getElementById("ForgetError").innerHTML=` ${email} does not found`;

        document.getElementById("ForgetError").innerHTML=error.message;
    
        // ..
      });
  })