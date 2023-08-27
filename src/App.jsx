// import React from "react";
// import Name from './Name'

// //function NewFun(){
    
//     // if(c==='x'){
//     //     return <><Name 
//     //         work="president"
//     //     />
//     //     </>
//     // }
//     // else{
//     //     return <><Name 
//     //     work="pressi"
//     // />
//     // </>
//     // }
// //}
// let c='p'
// function App(){
//    return <>
//     {c==='p'?<Name work="president sail department" />:<Name   work="pressi"/>}
//    </> 

// }

// export default App;

import React from 'react';
import './index.css'
import Name from './Name'
const App=()=>{
    return (
        <>
        <h1 className='Heading'>📺 Welcome to <span>Slot Machine Game</span></h1>
        <div className='container'>
        <div className='innerBox'>
        <Name x='👍' 
           y='👍'  z='👍' 
        />
        <Name
            x='👍' 
           y='👍'  z='🥉'
        />
        <Name
            x='👍' 
           y='👍'  z='🥉'
        />
        <Name
            x='🥉' 
           y='👍'  z='🥉'
        />
        </div>
        </div>
        
        </>
    )
}
export default App;