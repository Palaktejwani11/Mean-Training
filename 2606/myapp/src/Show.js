import { useState } from "react";
export default  function Show()
{
    const [table,setTable]=useState(null)
async function xyz(){
    var res=await fetch ("http://tsdc:4000/users/");
    var data=await res.json();
    setTable(data.map((user)=>{ return(<tr><td>{user._id}</td>
    <td>{user.password}</td>
    <td>{user.name}</td>
    <td>{user.role}</td></tr>)}))
}

    return (
        <>
        <button onClick={xyz}> show</button>
        <br/>
        <table border="1">
            {table}
        </table>
        </>
    )
}