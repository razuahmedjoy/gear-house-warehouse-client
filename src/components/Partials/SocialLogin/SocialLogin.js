import { faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import auth from '../../../firebase.init';

import { useSignInWithGoogle,useSignInWithGithub, useAuthState } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import useToken from '../../../hooks/useToken';


const SocialLogin = () => {

    const location = useLocation()
    const from = location?.state?.from?.pathname || '/'
    
    let errorMsg;
    const clearError = () => {
        errorMsg = ''
    }
    
    const [user] = useAuthState(auth)

    const [signInWithGoogle , loading, error] = useSignInWithGoogle(auth);

    const [signInWithGithub, loading2, error2] = useSignInWithGithub(auth);

    const [token] = useToken(user);

    const navigate = useNavigate()

    const handleGoogleSignIn = () =>{
        clearError();
        signInWithGoogle();
    }
    const handleGithubSignIn = () =>{
        clearError();
        signInWithGithub();
    }


    if(token){

        navigate(from, {replace: true});

    }

    if(error || error2){
   
        errorMsg = error?.message || error2?.message;
        
        
    }
   
    
    


    return (
        <>

            <div className="flex justify-center items-center pt-4">
                <div className="border-b-2 border-b-primary h-[2px] w-full"></div>
                <p className="text-center mx-3">Or</p>
                <div className="border-b-2 border-b-primary h-[2px] w-full"></div>
            </div>
            <div className="social-icons flex justify-center gap-2 mt-2">
                <FontAwesomeIcon onClick={handleGoogleSignIn} className="btn rounded-full border-[1px] border-primary p-3 cursor-pointer hover:bg-primary hover:text-white duration-300" icon={faGoogle} />
                <FontAwesomeIcon onClick={handleGithubSignIn} className="btn rounded-full border-[1px] border-primary p-3 cursor-pointer hover:bg-primary hover:text-white duration-300" icon={faGithub} />
            </div>

            {
                errorMsg && <p className="text-red-600 py-2">{errorMsg}</p>
            }

        </>

    );
};

export default SocialLogin;