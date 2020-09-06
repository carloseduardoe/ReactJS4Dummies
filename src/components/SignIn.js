import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { SignInSchema } from '../services/Validation';
import { ProcessSignIn } from '../services/Auth';

const SignIn = props => {
    const [passwordType, setPasswordType] = useState("password");

    const initialValues =  {
        email: '',
        password: ''
    };
    
    const onSubmit = values => {
        console.log("Values", JSON.stringify(values, null, 4));
        // ProcessSignIn(data);
    };

    const cancel = () => {
        props.history.push('/');
    };
    
    const togglePassword = e => {
        e.preventDefault();
        setPasswordType(
            passwordType === "password" ? "text" : "password"
        );
    };

    return <div className="component_layer" >
        <div className="form_layer">
            <h1 className="form_title">Sign In</h1>
            <Formik initialValues={initialValues} validationSchema={SignInSchema} onSubmit={onSubmit}>
                <Form className="form_body">
                    <label htmlFor="email">e-Mail</label>
                    <Field id="sign_in_email" className="form_text-input" type="email" name="email"/>
                    <ErrorMessage name="email"/>
                    
                    <label htmlFor="password">Password</label>
                    <Field id="sign_in_password" className="form_text-input" type={passwordType} name="password"/>
                    <ErrorMessage name="password"/>

                    <div className="form_actions">
                        <button type="submit">Sign In</button>
                        <button onClick={cancel}>cancel</button>
                    </div>
                </Form>
            </Formik>
            <button onClick={togglePassword}>See Password</button>
            <p className="form_tip">Don't have an account?<br/>
                <Link to="/signup">click here to sign up!</Link>
            </p>
        </div>
    </div>;
}

export default SignIn;