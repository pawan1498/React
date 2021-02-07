import React,{useState} from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import 'tachyons'
import './hooks.css'

const App = () => {
    const state = useState();
    //console.log(state); 
    // let count = 1;
    const [count ,setCount] = useState(0);
    const IncNum = () => {
        setCount(count +1);
        // console.log("clicked" + count++);
    }
    return (
        <>
            <div className="div1">
                <h1 className="tc" > {count} </h1>
                <button className=" btn btn-primary" onClick={IncNum}>Click Me</button>
            </div>
        </>
    )
}
export default App;
