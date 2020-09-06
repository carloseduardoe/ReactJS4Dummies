import * as Yup from 'yup';
import { Strings } from '../Config';

export const SignInSchema = Yup.object({
    email:      Yup.string()
                .email(Strings.Format)
                .required(Strings.Required),
    password:   Yup.string()
                .min(8, Strings.MinLength)
                .max(30)
                .required(Strings.Required)
});

export const SignUpSchema = Yup.object({
    first_name:     Yup.string()
                    .min(3, Strings.MinLength)
                    .max(30, Strings.MaxLength)
                    .required(Strings.Required),
    last_name:      Yup.string()
                    .min(3, Strings.MinLength)
                    .max(30, Strings.MaxLength)
                    .required(Strings.Required),
    description:    Yup.string()
                    .min(3, Strings.MinLength)
                    .max(30, Strings.MaxLength)
                    .required(Strings.Required),
    phone_numbers:  Yup.array().of(
                        Yup.string(Strings.Format)
                        .min(10, Strings.MinLength)
                        .max(13, Strings.MaxLength)
                    )
                    .min(1, Strings.Required)
                    .max(5),
    email:          Yup.string()
                    .email(Strings.Format)
                    .required(Strings.Required),
    password:       Yup.string()
                    .min(8, Strings.MinLength)
                    .max(30, Strings.MaxLength)
                    .required(Strings.Required),
    password2:      Yup.string()
                    .min(8, Strings.MinLength)
                    .max(30, Strings.MaxLength)
                    .required(Strings.Required),
});