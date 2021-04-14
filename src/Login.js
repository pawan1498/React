import React, { Component } from 'react';
import firebase from './util/Firebase';
import { auth, provider } from './util/Firebase';

export class Login extends Component {
    handleClick=()=> {
        let recaptcha = new firebase.auth.RecaptchaVerifier('recaptcha', {'size': 'invisible'});
        document.querySelector('label').textContent = "captcha solved";
        let number = '+919821977079';
        firebase.auth().signInWithPhoneNumber(number,recaptcha).then(function(e){
            
            let code = prompt('enter otp', '')

            if(code == null) {
                return;
            }

            e.confirm(code).then(function(result){
                console.log(result.user, 'user');
                document.querySelector('label').textContent = result.user.phoneNumber + "Number Verified";
            }).catch((error)=>{
                console.log(error)
            })

        })
    }


    render(){
        return (
            <>
            <div className="container">
                {/* <p id="msg"> please sign in </p>
                <button className="btn btn-primary" onClick={googleSignIn} >GOOGLE SIGN IN</button> <br/> <br/> OR <br/> */}
                <h3>LOGIN WITH PHONE NUMBER</h3>
                <div id="recaptcha"></div> 
                <label></label>
                <div style={{width:"40%"}}>
                {/* <form onSubmit={this.handleClick} > */}
                    <div className="form-group">
                    <input type="number" className="form-control " />
                    </div>
                    <button className="btn btn-primary" onClick={this.handleClick}>Click here</button>
                {/* </form> */}
                </div>
            </div>
            </>
        );
    }
}

export default Login;

// 
// function googleSignIn() {
//     auth.signInWithPopup(provider).then(function (result) {
//         console.log(result)
//         var user = result.user;

//         if(user.emailVerified){
//             document.getElementById("msg").innerHTML = "sign in success"
//         }
//         else{
//             document.getElementById("msg").innerHTML = "sign in fail"

//         }
//     });
// }


// export default function Login() {

//     const [forminp, setforminp] = useState('');

//     const myChangeHandler = (finp) => {
//         setforminp(finp.target.value);
//     };

//     function Submitform() {
//         const formref = firebase.database().ref("handimal_db");
//         const formvalue = {
//             forminp
//         };

//         formref.push(formvalue);
//     }



//     return (
//         <>
//             <h1>login</h1>
//             <h2>enter your credential</h2>
//             <input type="text" className="testinput" id="forminp" onChange={myChangeHandler} value={forminp} />
//             <button onClick={Submitform}>Submit</button>
            
//             <h4>Phone login</h4>
//             <form onSubmit={onSignInSubmit}>
//                 <input type="number" />
//                  <button type="submit">Submit</button>
//             </form>
//             <p id="usr"> usr </p>
//         </>
//     );
// }