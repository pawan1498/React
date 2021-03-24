import React, { useState } from 'react';
const Login = () => {

    const [name, setName] = useState('');
    const [FullName, SetFullName] = useState('');
    const inputValue = (event) => {
        // console.log(event.target.value);
        setName(event.target.value);
    }

    const onsubmit = () => {
        SetFullName(name)
    }
    return (
        <>
            <input type="text" placeholder="enter your name" value={name} onChange={inputValue} />
            <button onClick={onsubmit}>clickme</button>
            <h1> hello {FullName}</h1>
            
        </>
    )
};
export default Login;