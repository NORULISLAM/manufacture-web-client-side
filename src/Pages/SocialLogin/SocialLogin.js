import React, { useEffect } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import google from '../../tools-img/Colorful-google-logo-design-on-transparent-PNG-1.png'
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import useToken from '../../hooks/useToken';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    // const navigate = useNavigate();
    const navigate2 = useNavigate();
    let errorElement;
    const [token] = useToken(user);
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    useEffect(() => {
        if (token) {
            navigate2(from, { replace: true });
        }
    }, [token, from, navigate2])

    if (loading) {
        return <Loading></Loading>
    }
    if (error) {
        errorElement =
            <div>
                <p className='text-danger'>Error: {error.message}</p>
            </div>

    }



    // if (user) {
    //     navigate('/home');
    // }
    return (
        <div>
            <div className='text-center'>
                <div className="divider text-center w-auto">OR</div>

            </div>
            {errorElement}
            <div className='flex justify-center items-center'>
                <button
                    onClick={() => signInWithGoogle()}
                    className='btn btn-info w-50 d-block mx-auto'>
                    <img style={{ width: '30px' }} src={google} alt="" />
                    <span className='px-2'> Google Sing In</span>
                </button>
            </div>

        </div>
    );
};

export default SocialLogin;