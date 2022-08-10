import React from 'react'
class Navbar extends React.Component{
    render() {
        return<div>
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <a className="navbar-brand" href='#'>BS Exercise</a>
                <div className='ml-auto'>
                    <ul className='navbar-nav'>
                        <li className='nav-list'><a className='nav-link'>Index</a></li>
                        <li className='nav-list'><a className='nav-link'>Services</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    }
}
export default Navbar