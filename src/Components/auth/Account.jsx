import React from 'react'
import Login from './Login'
const Account = ({islogin,setIslogin }) => {
  const handleLogout = (e) => {
    e.preventDefault();
    setIslogin(!islogin)
    localStorage.clear()
    console.log(islogin)
  }
  return (
    <>
      {
        islogin? <button onClick={handleLogout}>Logout</button>:<Login islogin={islogin} setIslogin={setIslogin} /> 
 
      }
    </>
  )
}
export default Account