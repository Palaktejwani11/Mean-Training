import { Route,Routes,Link } from 'react-router-dom';
import About from './About';
import Login from './Login'; //not using {} cuz we used export default in login.js
import Register from './Register';
import Contact from './Contact';
import MyClass from './MyClass';
export default function Nav ()
{
    return(
        <>
        <Link to="/" >Home</Link> |
        <Link to="/reg" >Register</Link>|
        <Link to="login/" >Login</Link>|
        <Link to="/contact" >Contact</Link>|
        <Link to="/about" >About</Link>|
        <Link to="/my" >Class Component</Link>|
        <br/>
        <Routes>
        <Route path="/login" element=<Login/> />
        <Route path="/reg" element=<Register/> />
        <Route path="/about" element=<About/> />
        <Route path="/contact" element=<Contact/> />
        <Route path="/my" element=<MyClass/> />
        </Routes>
        </>
    )
}