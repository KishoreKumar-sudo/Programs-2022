import React from "react";
import Employee from "./Component/employee";
import Navbar from "./Navbar/navbar";
class App extends React.Component{
    render () {
        return <div>
            <Navbar />
            <Employee />
        </div>
    }
}
export default App