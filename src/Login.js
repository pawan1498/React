import firebase from './util/Firebase' 
import React, { useState } from 'react'

export default function Login(){
    const [forminp, setforminp] = useState('');

    const myChangeHandler = (finp) => {
        setforminp(finp.target.value);
    };

    function Submitform(){
        const formref = firebase.database().ref("handimal_db");
        const formvalue = {
            forminp
        };
    
        formref.push(formvalue);
    }
    
    return(
        <>
        <h1>login</h1>
        <h2>enter your credential</h2>
        <input type="text" className="testinput" id="forminp" onChange={myChangeHandler} value={forminp} />
        <button onClick={Submitform}>Submit</button>
        </>
    );
}