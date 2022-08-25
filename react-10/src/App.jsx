// import React from 'react'
// import Message from './Message/Message'
// import {BrowserRouter , Routes, Route } from 'react-router-dom'
// class App extends React.Component{
//     render(){
//         return (
//             <>
//          <h1>checking</h1>
//             <BrowserRouter>
//                 <Routes>
//                     <Route path="/Message" element={<Message/>} />
//                 </Routes>
//             </BrowserRouter>
           
        
//             </>) }
// }
// export default App

import React from "react";
import {BrowserRouter , Routes, Route } from 'react-router-dom'
import Approutes from "./Approutes/Approutes";
import Message from './Message/Message';


function App (){
    return(
        <Approutes/>
    )

}
export default App
