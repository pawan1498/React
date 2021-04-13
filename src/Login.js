import firebase from './util/Firebase'
import React, { useState } from 'react'
import { auth, provider } from './util/Firebase'

export default function Login() {
    const [forminp, setforminp] = useState('');

    const myChangeHandler = (finp) => {
        setforminp(finp.target.value);
    };

    function Submitform() {
        const formref = firebase.database().ref("handimal_db");
        const formvalue = {
            forminp
        };

        formref.push(formvalue);
    }

    function googleSignIn() {
        auth.signInWithPopup(provider).then(function (result) {
            console.log(result)
            var user = result.user;

            if(user.emailVerified){
                document.getElementById("msg").innerHTML = "sign in success"
            }
            else{
                document.getElementById("msg").innerHTML = "sign in fail"

            }
        });
    }

    return (
        <>
            <h1>login</h1>
            <h2>enter your credential</h2>
            <input type="text" className="testinput" id="forminp" onChange={myChangeHandler} value={forminp} />
            <button onClick={Submitform}>Submit</button>
            <p id="msg"> please sign in </p>
            <button onClick={googleSignIn} >GOOGLE SIGN IN</button>
        </>
    );
}
