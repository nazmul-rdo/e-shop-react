import React, { useRef } from 'react'
import { Link } from 'react-router-dom';
import './login.css'

const Login = ({islogin,setIslogin}) => {

    const usernameRef = useRef();
    const passwordRef = useRef();

    const handlebutton=(e)=>{
        e.preventDefault();
        if(usernameRef.current.value===localStorage.getItem("email")&&passwordRef.current.value===localStorage.getItem("password")){
            setIslogin(!islogin)
        }else{
            alert("password wrong")
        }
       }

    const handleLogin = (event) => {
        event.preventDefault();
        const username = usernameRef.current.value;
        const password = passwordRef.current.value;

        usernameRef.current.value = '';
        passwordRef.current.value = '';
        
        // show alert massage
        let massage = `
            User Name : ${username}  &
            Password : ${password}
        `;
        alert(massage);

    }

    return (
        <div className='main-continer'>
            <form
                onSubmit={(e) => handlebutton(e)}
                className='login-continer'>
                <h3>Wellcome! login here</h3>
                <div>
                    <label htmlFor='username'>Username</label>
                    <input
                        id='username'
                        ref={usernameRef}
                        type="text"
                        placeholder='Enter your user Name'
                    />
                </div>
                <div>
                    <label htmlFor='password'>Password</label>
                    <input
                        id='password'
                        ref={passwordRef}
                        type="password"
                        placeholder='Enter your password'
                    />
                </div>
                <button type="submit">login</button>
                <Link to={"/singup"} >Create a new account</Link>
            </form>
        </div>
    )
}

export default Login