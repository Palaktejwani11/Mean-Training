
import Add from "./Add";
import Edit from "./Edit";
import Delete from "./Delete";
import Show from "./Show";
import Search from "./Search";
import { Routes, Route, Link } from 'react-router-dom';

export default function App() {
  return (
    <>

<Link to ="/" > Home</Link>|
<Link to ="/add" > Add</Link>|
<Link to ="/show" > Show</Link>|
<Link to ="/edit" > edit</Link>|
<Link to ="/delete" > delete</Link>|
<Link to ="/search" > search</Link>|

    <Routes>
      <Route path="/add" element=<Add /> />
      <Route path="/show" element=<Show /> />
      <Route path="/edit" element=<Edit /> />
      <Route path="/delete" element=<Delete /> />
      <Route path="/search" element=<Search /> />
    </Routes>
    </>
  )
}


