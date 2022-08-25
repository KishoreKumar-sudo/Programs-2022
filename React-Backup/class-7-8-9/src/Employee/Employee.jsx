import React from "react";
import employees from './data'
class Employee extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            employees: employees
        }
    }
    render() {
        return <div className="container">
            {/* <pre>{JSON.stringify(this.state.employees)}</pre> */}
            <div className="row">
                <div className="col-md-8">
                    <table className="table table-hover">
                        <thead className="bg-info text-white">
                            <tr>
                                <th>ID</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Gender</th>
                                <th>IPaddressv4</th>
                           </tr>
                           </thead>
                            <tbody>
                                {
                                    this.state.employees.map((emp,index) => {
                                        return <tr key={index}>
                                            <td>{emp.id}</td>
                                            <td>{emp.first_name}</td>
                                            <td>{emp.last_name}</td>
                                            <td>{emp.email}</td>
                                            <td>{emp.gender}</td>
                                            <td>{emp.ip_address}</td>
                                        </tr>
                                    })
                                }
                            </tbody>
                    </table>
                </div>
            </div>
        </div>
        }
}
export default Employee