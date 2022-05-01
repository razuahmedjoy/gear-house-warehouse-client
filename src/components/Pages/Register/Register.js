import React from 'react';
import { useAuthState, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import LoadingSpinner from '../../Partials/LoadingSpinner/LoadingSpinner';
import SocialLogin from '../../Partials/SocialLogin/SocialLogin';

const Register = () => {

    let errorMsg;

  

    const [user, loading] = useAuthState(auth)
    const navigate = useNavigate();

    const location = useLocation()
    // console.log(location)
    const from = location?.state?.from?.pathname || '/'

    const [
        createUserWithEmailAndPassword,
        user1,
        loading1,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);


    if (user || user1) {
        navigate(from, { replace: true })
    }

    if(loading) {
        return <LoadingSpinner />
    }


    if(error) {
        errorMsg = error?.message;
        
    }

    const handleCreateAccountForm = (e) => {

        errorMsg = ''
        e.preventDefault();
        const email = e.target.email.value;
        const password1 = e.target.password1.value;
        const password2 = e.target.password2.value;
        if(password1 !== password2) {

            errorMsg = "Both Password Should be Same";
            toast.error(errorMsg)
            return;
            
        }
        else{

            createUserWithEmailAndPassword(email, password1)
        }
   


    }

    return (
        <div className="my-5">
            <div className="card max-w-sm mx-auto">
                
                    <div className="block p-6 rounded-lg shadow-lg bg-white">
                        <h2 className="text-3xl text-center mb-5">Register</h2>
                        <form onSubmit={handleCreateAccountForm} autoComplete="off">
                            <div className="form-group mb-6">
                                <label
                                    htmlFor="exampleInputEmail2"
                                    className="form-label inline-block mb-2 text-gray-700"
                                >
                                    Email address
                                </label>
                                <input
                                    type="email"
                                    className="input-custom"
                                    id="exampleInputEmail2"
                                    name="email"
                                    placeholder="Enter email"
                                    required
                                />
                            </div>
                            <div className="form-group mb-6">
                                <label
                                    htmlFor="exampleInputPassword2"
                                    className="form-label inline-block mb-2 text-gray-700"
                                >
                                    Password
                                </label>
                                <input
                                    type="password"
                                    className="input-custom"
                                    name="password1"
                                    placeholder="Password"
                                    required
                                />
                            </div>
                           
                            <div className="form-group mb-6">
                                <label
                                    htmlFor="exampleInputPassword2"
                                    className="form-label inline-block mb-2 text-gray-700"
                                >
                                  Confirm  Password
                                </label>
                                <input
                                    type="password"
                                    className="input-custom"
                                    name="password2"
                                    placeholder="Confirm Password"
                                    required
                                />
                            </div>
                           {errorMsg ? <p className="text-center text-sm text-red-600 mb-2">{errorMsg}</p> : ''}
                           {loading1 ? <LoadingSpinner /> :
                            <button type="submit" className="input-button">
                                Create Account
                            </button>
                            }

                            <div className="social-login">
                                <SocialLogin />
                            </div>

                            <p className="text-gray-800 mt-6 text-center">
                                Already have an account?
                                <Link
                                    to="/login"
                                    className="text-primary pl-2 hover:text-blue-700 focus:text-blue-700 transition duration-200 ease-in-out"
                                >
                                    Login
                                </Link>
                            </p>
                        </form>
                    </div>
               
            </div>
        </div>
    );
};

export default Register;