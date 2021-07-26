import react from 'react'
import {NavLink,Link} from 'react-router-dom'
import './Header.css'
import {useContext} from 'react'
import {LatestState} from './App'

const obj={
    height:'10vh',
    color:'white',
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    fontSize:'20px'
    
}

const menus={
    listStyleType:'none',
    display:'flex',
    justifyContent:'space-around',
    alignItems:'center',
    
}



const Header =()=>{
    const login= useContext(LatestState);
    console.log("value of state in Header")
    console.log(login);
    console.log(login.state)
    
   
    
    if(login.state){
        
        return(
            <>
                <div className="bg-primary" style={obj}>
                <div className="col-md-6"> <p>Welcome to Header</p></div>
                <div className="col-md-6" ><ul style={menus}>
        {/* <li>
        <NavLink className="navlink" activeClassName="selected_class" to="/" >Home</NavLink>
        </li> */}
        <li>
        <NavLink className="navlink" activeClassName="selected_class" to="/home" >Home</NavLink>
        </li>
        <li className="mainMenu">
        <NavLink className="navlink mainMenu" activeClassName="selected_class" to="/content" >Content </NavLink>
        <ul className=""> 
            <li><NavLink className="navlink " to="/content/Maharashtra">Maharashtra</NavLink></li>
            <li><NavLink className="navlink " to="/content/UP">Uttar Pradesh</NavLink></li>
            <li><NavLink className="navlink " to="/content/Bihar">Bihar</NavLink></li>
            </ul>
       
        </li>
        <li>
        <NavLink className="navlink" activeClassName="selected_class" to="/about">About</NavLink>
        </li>
        <li>
        <NavLink  className="navlink" activeClassName="selected_class" to="/logout">Logout</NavLink>
        </li>
        

    </ul>
    </div>
    </div> 

            </>
        );

    }
    else{
return(
    <>
    <div className="bg-primary" style={obj}>
    <div className="col-md-6"> <p>Welcome to Header</p></div>
    <div className="col-md-6" ><ul style={menus}>
        <li>
        <NavLink className="navlink" activeClassName="selected_class" to="/home" >Home</NavLink>
        </li>
        <li>
        <NavLink className="navlink" activeClassName="selected_class" to="/about">About</NavLink>
        </li>
        <li>
        <NavLink  className="navlink" activeClassName="selected_class" to="/login">Login</NavLink>
        </li>
        <li>
            <NavLink className="navlink" activeClassName="selected_class" to="/register">Register</NavLink>
        </li>

    </ul>
    </div>
    </div>
    </>
);

}
}

export default Header;