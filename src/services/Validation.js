import * as Yup from 'yup';
import { Strings } from '../Config';

export const SignInSchema = Yup.object({
    email: Yup.string().email(Strings.Format)
              .required(Strings.Required),
    password: Yup.string().min(8).max(30)
                 .required(Strings.Required)
});

export const SignUpSchema = Yup.object({
    first_name: Yup.string().min(3).max(30)
                .required(Strings.Required),
    last_name:  Yup.string().min(3).max(30)
                .required(Strings.Required),
    email:      Yup.string().email(Strings.Format)
                .required(Strings.Required),
    password:   Yup.string().min(8).max(30)
                .required(Strings.Required),
    password2:  Yup.string().min(8).max(30)
                .required(Strings.Required),
});