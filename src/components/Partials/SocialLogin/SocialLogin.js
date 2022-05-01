import { faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import auth from '../../../firebase.init';

import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate()

    const handleGoogleSignIn = () =>{
        signInWithGoogle();
    }

    if(user){

        navigate('/')

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
                <FontAwesomeIcon className="btn rounded-full border-[1px] border-primary p-3 cursor-pointer hover:bg-primary hover:text-white duration-300" icon={faGithub} />
            </div>

        </>

    );
};

export default SocialLogin;