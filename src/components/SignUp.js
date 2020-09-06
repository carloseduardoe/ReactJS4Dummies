import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, Field, FieldArray, ErrorMessage } from 'formik';
import { SignUpSchema } from '../services/Validation';
import { ProcessSignUp } from '../services/Auth';

const SignUp = props => {
    const initialValues =  {
        first_name: '',
        last_name: '',
        description: '',
        phone_numbers: [], 
        email: '',
        password: '',
        password2: '',
    };
    
    const [passwordType, setPasswordType] = useState("password");

    const togglePassword = e => {
        e.preventDefault();
        setPasswordType(
            passwordType === "password" ? "text" : "password"
        );
    };

    const onSubmit = values => {
        console.log("Values", JSON.stringify(values, null, 4));
        // ProcessSignUp(data);
    };

    const cancel = () => {
        props.history.push('/');
    };

    return <div className="component_layer" >
        <div className="form_layer">
            <h1 className="form_title">Sign Up</h1>
            <Formik initialValues={initialValues} validationSchema={SignUpSchema} onSubmit={onSubmit}>
                <Form className="form_body">
                    <label htmlFor="first_name">First Name</label>
                    <Field id="sign_up_first_name" className="form_text-input" type="first_name" name="first_name"/>
                    <ErrorMessage component="div" className="form_error-display" name="first_name"/>

                    <label htmlFor="last_name">Last Name</label>
                    <Field id="sign_up_last_name" className="form_text-input" type="last_name" name="last_name"/>
                    <ErrorMessage component="div" className="form_error-display" name="last_name"/>

                    <label htmlFor="description">Description</label>
                    <Field id="sign_up_description" className="form_text-input" as="textarea" 
                        rows="7" name="description"/>
                    <ErrorMessage component="div" className="form_error-display" name="description"/>

                    <label htmlFor="phone_numbers">Phone Numbers</label>
                    <FieldArray id="sign_up_phone_numbers" name="phone_numbers">
                        {props => {
                            const { push, remove, form } = props;
                            const { phone_numbers } = form.values;
                            return <div className="form_input-array">
                                {phone_numbers.map((item, i) => 
                                    <div key={i} className="form_input-array-item">
                                        <Field id={`sign_up_phone_numbers_${i}`} className="form_text-input" 
                                               name={`phone_numbers[${i}]`} />

                                        <button onClick={e => {
                                            e.preventDefault();
                                            remove(i);
                                        }}>x</button>

                                        <ErrorMessage component="div" className="form_array-error-display" 
                                                      name={`phone_numbers[${i}]`}/>
                                    </div>
                                )}
                                
                                <button onClick={e => {
                                    e.preventDefault();
                                    push('');
                                }}>+</button>
                            </div>
                        }}
                    </FieldArray>
                    

                    <label htmlFor="email">e-Mail</label>
                    <Field id="sign_up_email" className="form_text-input" type="email" name="email"/>
                    <ErrorMessage component="div" className="form_error-display" name="email"/>

                    <label htmlFor="password">Password</label>
                    <Field id="sign_up_password" className="form_text-input" type={passwordType} name="password"/>
                    <ErrorMessage component="div" className="form_error-display" name="password"/>

                    <label htmlFor="password2">Password Confirmation</label>
                    <Field id="sign_up_password2" className="form_text-input" type={passwordType} name="password2"/>
                    <ErrorMessage component="div" className="form_error-display" name="password2"/>

                    <button onClick={togglePassword}>Show Passwords</button>

                    <div className="form_actions">
                        <button type="submit">Sign Up</button>
                        <button onClick={cancel}>cancel</button>
                    </div>
                    
                    <p className="form_tip">Already have an account?<br/>
                        <Link to="/signin">click here to sign in!</Link>
                    </p>
                </Form>
            </Formik>
        </div>
    </div>;
}

export default SignUp;