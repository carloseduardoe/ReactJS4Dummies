import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import { SignUpSchema } from '../services/Validation';
import { ProcessSignUp } from '../services/Auth';

const SignUp = props => {
    const initialValues =  {
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        password2: ''
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
        // ProcessSignUp(data);
    };

    const cancel = () => {
        props.history.push('/');
    };

    const validationSchema = SignUpSchema;

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
            <h1 className="form_title">Sign Up</h1>
            <form className="form_body" onSubmit={handleSubmit}>

                <label htmlFor="first_name">First Name</label>
                <input id="sign_in_first_name" className="form_text-input" 
                    type="first_name" name="first_name" { ...getFieldProps('first_name') }/>
                {touched.first_name && errors.first_name 
                    ? <div className="form_error-display">{errors.first_name}</div>
                    : null
                }

                <label htmlFor="last_name">Last Name</label>
                <input id="sign_in_last_name" className="form_text-input" 
                    type="last_name" name="last_name" { ...getFieldProps('last_name') }/>
                {touched.last_name && errors.last_name 
                    ? <div className="form_error-display">{errors.last_name}</div>
                    : null
                }

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
                
                <label htmlFor="password2">Password Confirmation</label>
                <input id="sign_in_password2" className="form_text-input" 
                    type={passwordType} name="password2" { ...getFieldProps('password2') }/>
                {touched.password2 && errors.password2 
                    ? <div className="form_error-display">{errors.password2}</div>
                    : null
                }

                <button onClick={togglePassword}>Show Passwords</button>

                <div className="form_actions">
                    <button type="submit">Sign Up</button>
                    <button onClick={cancel}>cancel</button>
                </div>
                
                <p className="form_tip">Already have an account?<br/>
                    <Link to="/signin">click here to sign in!</Link>
                </p>
                
            </form>
        </div>
    </div>;
}

export default SignUp;