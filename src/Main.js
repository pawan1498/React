//  main file contain route of pages 
import React from 'react';
import { Route , Switch } from "react-router-dom";
import Login from "./Login";
import Error from "./Error";
import Cart from './Cart';
import Homepage from './Homepage'

const Main=()=>{
    return(
        <>
        <Switch>
            <Route exact path='/' component={Homepage} />
            <Route path='/login' component={Login} />
            <Route path='/cart' component={Cart} />
            <Route component={Error}></Route>
        </Switch>
        </>

    );
}
export default Main;
// yha pages/component ke route provide hote h