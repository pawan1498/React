import { Email } from '@material-ui/icons';
import React from 'react'
import {auth , provider} from './Firebase'
var obh = new Date();
export default function Signup() {
    function googlesignup(){
        var s = auth.signInWithPopup(provider).then( function(result){

            var user = result.user;

            // for verification use emailverified
            if(user.delete){
                document.getElementById("msg").innerHTML = "signin success "
            }
        });
    }
    return (
        <div>

            <h1 style={{ textAlign: "center" }}>SIGNUP  <br/> Google sign up </h1>
            {/* <h2>enter your credential</h2> */}
            <p id="msg"></p>
            <button onClick={googlesignup}>google signup</button>
        </div>
    )
}
