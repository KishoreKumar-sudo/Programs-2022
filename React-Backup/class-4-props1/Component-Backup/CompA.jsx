import React from 'react'
import CompB from '../Component-Backup/CompB'
class CompA extends React.Component {
    msg = "Good Morning"
    render() {
        return <div>
            <CompB message={this.msg} />
        </div>
    }
}
export default CompA
