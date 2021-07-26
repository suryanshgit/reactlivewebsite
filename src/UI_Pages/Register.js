
import {useState } from 'react'



const Register=()=>{
    const obj={
        height:'60vh',
        display:'flex',
        marginLeft:'25%',
        flexDirection:'column',
        width:'50%',
        marginTop:'20vh',
        padding:'20px'
    }

    const [cred,setCred]=useState({
        userName:'',
        password:'',
        hobby:''
    })
    //managing the inputs for input fields
    const handleInput=(e)=>{
           setCred({...cred,[e.target.name]:e.target.value}); 

    }
    //handling the submit button
    const handleSubmit=(e)=>{
        sessionStorage.setItem(cred.userName,cred.password);
    }
    return(
        <>
            <div style={obj}>
                <h5 style={{textAlign:'center'}}>Enter your details</h5>
                <label  className="mt-2" for="username">Username</label>
                <input onChange={handleInput} className="mt-2" name="userName" id="username" type="text" value={cred.userName}/>
                <label className="mt-2" for="password">Password</label>
                <input onChange={handleInput} className="mt-2" id="password" name="password" type="password" value={cred.password}/>
                <label className="mt-2" for="hobby">Hobby</label>
                <input  onChange={handleInput} className="mt-2" id="hobby" name="hobby" type="text" value={cred.hobby}/>
                <button onClick={handleSubmit} type="button" style={{marginTop:'20px'}} className="btn btn-primary">Submit</button>

            </div>
        </>
    );

}

export default Register;
