import React from 'react';

const User=({match})=>{
    return (
        <>
        <h1>user {match.params.name}page</h1>
        <textarea>helooo</textarea>
        </>

    )
}
export default User;