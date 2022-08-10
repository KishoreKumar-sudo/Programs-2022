import React from "react";
class Message extends React.Component{
    ename = "KishoreKumar"
    esal = 35000
    eimage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSabpgu345MQrscEtUrYCM443JtctdDcDDtlkcB1js&s'
    render(){
        return <div>
            <h2>Employee Name:{this.ename}</h2>
            <h2>Employee Salary:{this.esal}</h2>
            <img src={this.eimage} alt="Kishore" /><nbsp/>
            <button className="btn btn-warning">Test</button>
        </div>
    }
}
export default Message