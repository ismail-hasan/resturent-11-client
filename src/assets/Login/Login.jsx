import React from 'react';
import { useLocation } from 'react-router-dom';

const Login = () => {

    const loginForm = e => {
        e.preventDefault()

        const from = e.target
        const email = from.email.value
        const password = from.password.value

        const loginInfo = { email, password }
        console.log(loginInfo)
    }

    return (
        <div className="hero bg-base-200 min-h-screen text-center">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>

                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={loginForm} className="card-body">


                        <fieldset className="fieldset">
                            <label className="label">Email</label>
                            <input type="email" name='email' className="input" placeholder="Email" />
                        </fieldset>


                        <fieldset className="fieldset">
                            <label className="label">Password</label>
                            <input name='password' type="password" className="input" placeholder="Password" />
                        </fieldset>

                        <div>
                            <a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4">Login</button>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;