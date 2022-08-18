import React from "react";  //not a good practice
import User from './User'
function Display() {
    return (
        <div className="container">
            <div className="rows">
                <div className="col">
                    <User />
                </div>
            </div>
        </div>
        
    ) 
}
export default Display