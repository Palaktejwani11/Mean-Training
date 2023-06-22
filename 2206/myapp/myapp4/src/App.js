import {useState} from "react";
export default function App() {
const [all, setAll]=useState({});
const [print, setPrint]=useState(false);
function abc(event){ 

  const value=event.target.value;
  const name=event.target.name;
  setAll((values)=>({...values, [name]:value}))
  setPrint(false)
}

function xyz(){
  setPrint(true)
}

return (
  <>
user id <input name="userid" onChange={abc}/> <br/>
Pass <input name="password" onChange={abc}/> <br/>
Name <input name="name" onChange={abc}/> <br/>
Role<input name="role" onChange={abc}/> <br/>

<button onClick={xyz}>Login</button>
<br/>
{ print? JSON.stringify(all):"" }


  </>
 );
}


