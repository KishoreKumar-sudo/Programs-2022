import React from "react";
class Coding extends React.Component{
    render(){
        return <div className="container">
            <div className="rows">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                            <h2>Player Details</h2>
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Name" />
                                </div>
                                <div className="form-group">
                                    <input type="number" className="form-control" placeholder="Age" />
                                </div><div className="form-group">
                                    <input type="text" className="form-control" placeholder="Role" />
                                </div>
                                <input type="button" className="btn btn-success" value="Submit" />
                            </form>
                        </div>
                    </div>
                    <table className="table table-hover">
                        <thead className="bg-info text-dark">
                            <tr>
                                <th>SNO</th>
                                <th>Name</th>
                                <th>Role</th>
                                <th>Age</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                        </tbody>
                    </table>
                    <input type="button" className="btn btn-primary" value="Batsman" />
                    <input type="button" className="btn btn-secondary" value="Bowler" />
                    <input type="button" className="btn btn-warning" value="AllRounder" />
                    <input type="button" className="btn btn-info" value="All" />
                </div>
            </div>
        </div>
    }
}
export default Coding