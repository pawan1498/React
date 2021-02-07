import React from 'react';
import { Link } from 'react-router-dom'
const Service = () => {
    return (
        <>
            <div>
                
                <h1>hello , i am service page </h1>
                <div class="">
                    <Link to="/service/link1">link 1</Link>
                    <Link to="/service/link2">link 2</Link>
                    <Link to="/service/link3">link 3</Link><br></br>
                </div>
            </div>
        </>
    )
};
export default Service;