import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const SignUp = () => {
    const { createUser } = useContext(AuthContext)

    const signUpForm = e => {
        e.preventDefault()

        const from = e.target
        const name = from.name.value
        const email = from.email.value
        const password = from.password.value

        const loginInfo = { name, email, password }
        console.log(loginInfo)

        createUser(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
            })
            .catch(err => console.log(err))


    }
    return (
        <div className="hero bg-base-200 min-h-screen text-center">
            <div className="hero-content flex-col ">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">SignUp now!</h1>

                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={signUpForm} className="card-body">


                        <fieldset className="fieldset">
                            <label className="label">Name</label>
                            <input type="text" name='name' className="input" placeholder="Name" />
                        </fieldset>
                        <fieldset className="fieldset">
                            <label className="label">Email</label>
                            <input type="email" name='email' className="input" placeholder="Email" />
                        </fieldset>


                        <fieldset className="fieldset">
                            <label className="label">Password</label>
                            <input name='password' type="password" className="input" placeholder="Password" />
                        </fieldset>
                        <button className="btn btn-neutral mt-4">Login</button>

                    </form>
                    <div>
                        <p className="">New Here <Link to={"/login"}>Please Login</Link> </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;