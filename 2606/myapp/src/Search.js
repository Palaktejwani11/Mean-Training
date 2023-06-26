import { useState } from "react";
export default function Search(){
   const [all,setAll]=useState(null);
    function xyz(event){
       const a=event.target.name;
       const b=event.target.value;
       setAll((x)=>({...x,[a]:b}));
    }

    async function abc(){
        var headers={"method":"get","headers":{"Content-Type":"application/json"},"body":JSON.stringify(all)};
        var res=await fetch("http://tsdc:4000/users/" +all._id);
        var data=await res.json();
        alert(JSON.stringify(data));
    }


    return (
        <>
        <table>
            <tr>  <td>id </td> <td><input name="_id" onChange={xyz} /></td></tr>
           
            <tr>  <td> </td> <td><input type="button" value="search" onClick={abc} /></td></tr>
            </table>
        
        </>
    );
}