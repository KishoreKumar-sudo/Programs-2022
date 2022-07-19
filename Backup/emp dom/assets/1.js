let employees =[ {id:201,name:raja,salary:15000},
    {id:202,name:kishore,salary:15000},
    {id:203,name:sathish,salary:15000}]
    function empdetails(){
        let rows =" "
        for (emp of employees ){
            rows =rows+`<tr>
            <td>${emp.id}</td>
            <td>${emp.name}</td>
            <td>${emp.salary}</td>
            
            </tr>`
        }
        document.getElementById("abc").innerHTML = rows
    }