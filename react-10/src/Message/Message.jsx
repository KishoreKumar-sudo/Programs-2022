import React, { useState } from "react";
const Message = () => {
// let msg = "Hello,Kishore"
let [counter, setCounter] = useState(1)
let [msg, setMsg] = useState("Hello,Kishore")
// let [contacts, setContacts] = useState([])

let gmHandler = () => {
    setMsg("Gud Mrng")
}
let gnHandler = () => {
    setMsg("Gud Nyt")
}
return <div>
    <h1>Message:{msg}</h1>
    <button onClick={gmHandler}>GM</button>
    <button onClick={gnHandler}>GN</button>
    <hr />
    <h2>Counter:{counter}</h2>
    <button onClick={() => { setCounter(counter - 1)}}>-</button>
    <button onClick={() => { setCounter(counter + 1)}}>+</button>
</div>
}
export default Message