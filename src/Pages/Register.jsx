import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Register = () => {
    const { createUser ,setUser} = use(AuthContext);

    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photoUrl.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log({ name, email, password, photo });
        createUser(email, password)
            .then(res => {
                const user = res.user;
                // console.log(user);
                setUser(user)
            })
            .catch((error)=>{
                const errorCode = error.code;
                const errorMgs =error.message;
                alert(errorMgs);
            })
    }
    return (
        <div className="flex justify-center min-h-screen items-center">

            <form onSubmit={handleRegister} className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <h2 className='font-semibold text-2xl text-center'>Register your account</h2>
                <div className="card-body">
                    <fieldset className="fieldset">
                        {/* name */}
                        <label className="label">Name</label>
                        <input type="text"
                            className="input"
                            name='name'
                            placeholder="Name"
                            required />
                        {/* photo url */}
                        <label className="label">Photo Url</label>
                        <input type="text"
                            className="input"
                            placeholder="Photo Url"
                            name='photoUrl' required />
                        {/* email */}
                        <label className="label">Email</label>
                        <input type="email"
                            className="input"
                            placeholder="Email"
                            name='email' required />
                        {/* password */}
                        <label className="label">Password</label>
                        <input type="password"
                            className="input"
                            placeholder="Password"
                            name='password' required />

                        <button type='submit' className="btn btn-neutral mt-4">Register</button>

                        <p className='font-semibold text-center pt-5'>Already Have An Account ?<Link className='text-secondary' to="/auth/login">Login</Link></p>
                    </fieldset>
                </div>
            </form>
        </div>
    );
};

export default Register;