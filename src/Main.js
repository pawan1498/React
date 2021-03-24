//  main file contain route of pages 

import React from 'react';
import { Route , Switch } from "react-router-dom";
import About from './About'
import Contact from './Contact'
import Error from "./Error";
import Home from "./Home";
import Service from "./Service"
import Login from "./Login";
import Service_link1 from "./Service_link1"
import User from './User'

const Main=()=>{
    return(
        <>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            <Route exact path='/service' component={Service} />
            <Route path='/login' component={Login} />
            <Route path='/service/link1' component={Service_link1} />
            <Route path='/user/' component={User} />

            <Route component={Error}></Route>
        </Switch>
        </>

    );
}
export default Main;
// yha pages/component ke route provide hote h