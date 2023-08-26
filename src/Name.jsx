// import React from "react";
// function Name(props){
    
//     return <><h1>Name</h1>
//     <p>{props.work}</p>
//     <div><h1>Ohh React is a Library</h1></div>
//     </>
// }
// export default Name;

import React from "react";
const Name=()=>{
    return(
    <>
    <h1 className='Heading'>📺 Welcome to <span>Slot Machine Game</span></h1>
    <div className='container'>
            <div className='innerBox'>
            <p>
            😄 😄 😄<br />
            This is matching</p>
            <p>
            👍 🥕 🛐<br />
            This is not matching</p>
            <p>
            🙅‍♂️ 🧖‍♂️ 🧖<br />
            This is not matching</p>
            <p>
            😧 😧 😧<br />
            This is matching</p>             
            </div>
        </div>
    </>
    )
}
export default Name;