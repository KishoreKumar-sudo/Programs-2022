import React from "react";
import Employees from './Employees'
class User extends React.Component{
    uid = 100;
    loc = ['Krishnagiri', 'Chennai']
    details = {
        name: "Kishore Kumar",
        email: "kk10@gmail.com"
    }
    render () {
        return <div className="row">
            <div className="col-md-6 bg-info">
                User Components
            </div>
            <div className="col-md-6 bg-success">
                <Employees prop1={this.uid} prop2={this.loc} prop3={this.details} />
            </div>
        </div>
    }
}
export default User