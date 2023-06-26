import { useState } from "react";
export default function Add(){
   const [all,setAll]=useState(null);
    function xyz(event){
       const a=event.target.name;
       const b=event.target.value;
       setAll((x)=>({...x,[a]:b}));
    }

    async function abc(){
        var headers={"method":"post","headers":{"Content-Type":"application/json"},"body":JSON.stringify(all)};
        var res=await fetch("http://tsdc:4000/users", headers);
        var data=await res.json();
        alert(JSON.stringify(data));
    }


    return (
        <>
        <table>
            <tr>  <td>id </td> <td><input name="_id" onChange={xyz} /></td></tr>
            <tr>  <td>Password </td> <td><input name="password" onChange={xyz} /></td></tr>
            <tr>  <td>Name </td> <td><input name="name" onChange={xyz} /></td></tr>
            <tr>  <td>Role </td> <td><input name="role" onChange={xyz} /></td></tr>
            <tr>  <td> </td> <td><input type="button" value="Add" onClick={abc} /></td></tr>
            </table>
        
        </>
    );
}