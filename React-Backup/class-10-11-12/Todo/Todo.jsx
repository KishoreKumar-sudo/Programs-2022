import { React, useState } from "react";
function Todo() {
  const [data, SetData] = useState({
    Name: "",
    Age: "",
    Role: ""
  })
  const [store, SetStore] = useState([])

  const changeHandler = (e) => {
    SetData({ ...data, [e.target.name]: e.target.value })
    console.log(data)
  }

  const submitHandler = (e) => {
    e.preventdefault();
    const newData = {
      Name: data.Name,
      Age: data.Age,
      Role: data.Role
    }

  SetStore([...store, newData])
  console.log(store)

  }

  return (
    <div>
      <h2>Player Stats</h2>
      <div>
        <form onSubmit={submitHandler}>
          <input name="Name" onChange={changeHandler} maxLength="10" placeholder="Enter Name" value={store.Name} />
          <br />
          <input name="Age" onChange={changeHandler} maxLength="02" placeholder="Enter Age" value={store.Age} />
          <br />
          <input name="Role" onChange={changeHandler} maxLength="10" placeholder="Enter Role" value={store.Role} />
          <br />
          <button className="btn btn-success" onClick={submitHandler}>Submit</button>
        </form>
      </div>
      <div>
        <table style={{ width: "100%" }}>
          <thead>
            <th>S.NO</th>
            <th>Name</th>
            <th>Age</th>
            <th>Role</th>
            <th>Edit</th>
            <th>Delete</th>
          </thead>
          <tbody>
            {store.map((emp, id) => {
              return (
                <tr key={id}>
                  <td>{id + 1}</td>
                  <td>{emp.name}</td>
                  <td>{emp.Age}</td>
                  <td>{emp.Role}</td>
                  <td><button>Edit</button><button>Delete</button></td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default Todo