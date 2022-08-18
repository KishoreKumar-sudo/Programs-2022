import React from 'react'
import Employee from './Employee'
function User() {
    let uid = 101;
    let loc = ['Bangalore', 'New Delhi']
    let details = {
        name: "Kishore Kumar",
        email: "kk10@gmail.com"
    }
    return (
        <div className="row">
            <div className="col-md-6 bg-success">
                User component
                
                   <p> Props - sending data from one component to another comp
                    </p>
                    <h4> variable  as property </h4>
                    <h4> array as property</h4>
                    <h4>  object as propert</h4>
                    <h4>  and method also we can send as property</h4>
                
            </div>
            <div className="col-md-6 bg-info">
                <Employee prop1={uid} prop2={loc} prop3={details} message={"Good Evening"} />
            </div>
        </div>
    )
}

export default User