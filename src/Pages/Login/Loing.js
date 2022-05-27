import { sendPasswordResetEmail } from 'firebase/auth';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';

import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useToken from '../../hooks/useToken';



const Loing = () => {

    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,


    ] = useSignInWithEmailAndPassword(auth);

    const [signInWithGoogle] =
        useSignInWithGoogle(auth);
    let errorElement;

    const [token] = useToken(user || user);
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }
    }, [token, from, navigate])

    const handleSubmit = event => {

        setEmail(event.target.email.value);
        setPassword(event.target.password.value);

        event.preventDefault();

        signInWithEmailAndPassword(email, password);
        console.log(email, password)
    }

    const handlePasswordReset = async () => {
        // const email = event.target.email.value;
        if (email) {
            await sendPasswordResetEmail(email)
            toast('sent email')
        }
        else {
            toast('please enter your email')
        }
        // .then(() => {
        //     console.log('email send')
        // })
    }
    if (user) {
        // navigate('/home')
        navigate(from, { replace: true });
    }
    if (loading) {
        return <Loading></Loading>
    }

    const navigateLogOut = event => {


        navigate('/singup');
    }


    return (
        <div className='flex h-screen justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center text-2xl font-bold mb-10">Please Login </h2>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>

                            <Form.Control className="input input-bordered w-full max-w-xs form-control" onBlur={(event) => setEmail(event.target.value)} name='email' type="email" placeholder="Enter email" required />

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>

                            <Form.Control className="input input-bordered w-full max-w-xs form-control" onBlur={(event) => setPassword(event.target.value)} name='password' type="password" placeholder="Password" required />
                        </Form.Group>


                        {/* <Button onClick={() => signInWithGoogle()} variant="primary" type="submit">
                    Google Sing In
                </Button> */}

                        {errorElement}

                        <button className='btn btn-link text-primary pe-auto-decoration-none' variant="link" type="submit" onClick={handlePasswordReset}>
                            Resset password?
                        </button>
                        <br />
                        <Button className='btn w-full max-w-xs text-white' onClick={handlePasswordReset} variant="primary" type="submit">
                            Log In
                        </Button>
                    </Form>
                    <p>Create new account ? <Link to='/singup' className='text-primary pe-auto text-decoration-none' onClick={navigateLogOut}>Please Register</Link></p>
                    <SocialLogin></SocialLogin>
                    <ToastContainer />
                </div>
            </div>
        </div >
    );
};

export default Loing;