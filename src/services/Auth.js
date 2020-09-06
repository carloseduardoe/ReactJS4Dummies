import { Paths } from '../Config';
import Axios from 'axios';
import { CheckSignIn } from "./Validation";
import { useGlobalContext } from "../Context";

export const ProcessSignIn = data => {
    const { updateUser, updateTokens } = useGlobalContext();

    Axios.post(Paths.Auth_login, {
        email: data.email,
        password: data.password
    })
    .then(result => {
        updateUser(result.data);
        updateTokens(result.data);
    })
    .catch(err => {
        if (!err.response) {
            return alert(err.message);
        }

        const response = err.response.data;
        const info = response.errors && response.errors.length
            ? response.errors
            : [response.message];
    });
}