import React {Fragment} from "react"
import Users from "./Users/User"
import {Link,BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { Fragment } from "react"
const App = () => {
    return <Fragment>
        <Router>
            <nav className="navbar navbar-dark bg-dark">
                <Link to="/about">Router Example</Link>
                <div className="ml-auto">
                    <ul className="navbar-nav">
                        <li className="navbar-list"><Link className="nav-link" to="/users">Users</Link></li>
                        <li className="navbar-list"><Link className="nav-link" to="/services">Services</Link></li>
                        <li className="navbar-list"><Link className="nav-link" to="/home">Home</Link></li>
                            </ul>                    
                </div>
            </nav>
            <Switch>
                <Route path="/about" element= {<About/>} />
                <Route path="/services" element= {<Services/>} />
                <Route path="/home" element= {<Home/>} />
                <Route path="/users" element= {<Users/>} />

            </Switch>
        </Router>
    </Fragment>
}
 
export default App


