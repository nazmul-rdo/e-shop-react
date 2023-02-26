import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import './singup.css'

const Singup = () => {
    const name = useRef();
    const email = useRef();
    const phone = useRef();
    const password = useRef();
    const confpassword = useRef()

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password.current.value === confpassword.current.value) {
            localStorage.setItem("name", name.current.value)
            localStorage.setItem("email", email.current.value)
            localStorage.setItem("phone", phone.current.value)
            localStorage.setItem("password", password.current.value)
            alert("account created")
        }
        name.current.value = " "
        email.current.value = " "
        phone.current.value = " "
        password.current.value = ""
        confpassword.current.value = ""

    }

    return (

        <div className="card bg-light">
            <article className="card-body mx-auto">
                <h4 className="card-title mt-3 text-center">Create Account</h4>
                <p className="text-center">Get started with your free account</p>
                <p>
                    <a href="#" className="btn btn-block btn-twitter"> <i className="fab fa-google"></i> Login via Google</a>
                    <a href="" className="btn btn-block btn-facebook"> <i className="fab fa-facebook-f"></i> Login via facebook</a>
                </p>
                <p className="divider-text">
                    <span className="bg-light">OR</span>
                </p>
                <form onSubmit={handleSubmit}>
                    <div className="form-group input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text"> <i className="fa fa-user"></i> </span>
                        </div>
                        <input
                            ref={name}
                            name=""
                            className="form-control"
                            placeholder="Full name"
                            type="text"
                        />
                    </div>
                    <div className="form-group input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text"> <i className="fa fa-envelope"></i> </span>
                        </div>
                        <input
                            ref={email}
                            name="" className="form-control" placeholder="Email address" type="email" />
                    </div>
                    <div className="form-group input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text"> <i className="fa fa-phone"></i> </span>
                        </div>
                        <input
                            ref={phone}
                            name="" className="form-control" placeholder="Phone number" type="number" />
                    </div>

                    <div className="form-group input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
                        </div>
                        <input
                            ref={password}
                            className="form-control" placeholder="Create password" type="password" />
                    </div>
                    <div className="form-group input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
                        </div>
                        <input
                            ref={confpassword}
                            className="form-control" placeholder="Confirm password" type="password" />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary btn-block"> Create Account  </button>
                    </div>
                    <p className="text-center">Have an account? <Link to={'/account'}>Log In</Link> </p>
                </form>
            </article>
        </div>

    )
}

export default Singup