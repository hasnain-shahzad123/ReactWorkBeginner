// import React from "react";
// function Name(props){
    
//     return <><h1>Name</h1>
//     <p>{props.work}</p>
//     <div><h1>Ohh React is a Library</h1></div>
//     </>
// }
// export default Name;

import React from "react";
const Name=(props)=>{
    // let x=props.x;
    // let y=props.y;
    // let z=props.z;
    let{x,y,z}=props //this is object destructuring 
    console.log(props.x)
        if(x==y && y==z){
            return (
                <>
                <p>This is matcing 
                <br/>
                {props.x} {props.y} {props.z}</p>
                </>
            )
        }
        else{
            return (
                <>
                <p>This is not matching<br/>
                {props.x} {props.y} {props.z}</p>
                </>
            )
        }
}
export default Name;