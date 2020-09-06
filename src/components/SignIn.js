import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import { SignInSchema } from '../services/Validation';
import { ProcessSignIn } from '../services/Auth';

const SignIn = props => {
    const initialValues =  {
        email: '',
        password: ''
    };
    
    const [passwordType, setPasswordType] = useState("password");

    const togglePassword = e => {
        e.preventDefault();
        setPasswordType(
            passwordType === "password" 
            ? "text" 
            : "password"
        );
    };

    const onSubmit = values => {
        console.log("Values", JSON.stringify(values, null, 4));
        // ProcessSignIn(data);
    };

    const cancel = () => {
        props.history.push('/');
    };

    const validationSchema = SignInSchema;

    const {
        handleSubmit, getFieldProps,
        touched, errors
    } = useFormik({
        initialValues,
        onSubmit,
        validationSchema
    });

    return <div className="component_layer" >
        <div className="form_layer">
            <h1 className="form_title">Sign In</h1>
            <form className="form_body" onSubmit={handleSubmit}>

                <label htmlFor="email">e-Mail</label>
                <input id="sign_in_email" className="form_text-input" 
                    type="email" name="email" { ...getFieldProps('email') }/>
                {touched.email && errors.email 
                    ? <div className="form_error-display">{errors.email}</div>
                    : null
                }
                
                <label htmlFor="password">Password</label>
                <input id="sign_in_password" className="form_text-input" 
                    type={passwordType} name="password" { ...getFieldProps('password') }/>
                {touched.password && errors.password 
                    ? <div className="form_error-display">{errors.password}</div>
                    : null
                }

                <button onClick={togglePassword}>See Password</button>

                <div className="form_actions">
                    <button type="submit">Sign In</button>
                    <button onClick={cancel}>cancel</button>
                </div>
                
                <p className="form_tip">Don't have an account?<br/>
                    <Link to="/signup">click here to sign up!</Link>
                </p>
                
            </form>
        </div>
    </div>;
}

export default SignIn;