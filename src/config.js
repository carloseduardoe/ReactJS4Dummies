export const ApiUrl = 'http://localhost:5000/api';

export const Paths = {
    api: ApiUrl,
    Auth_login:   `${ApiUrl}/login`,
    Auth_token:   `${ApiUrl}/token`,
    Auth_logout:  `${ApiUrl}/logout`,
    Users_browse: `${ApiUrl}/users`,
    Users_read:   `${ApiUrl}/users/{id}`,
    Users_edit:   `${ApiUrl}/users/{id}`,
    Users_add:    `${ApiUrl}/users`,
    Users_delete: `${ApiUrl}/users/{id}`
};

export const Strings = {
    Required: "Required\n",
    MinLength: "Minimum length is not met\n",
    MaxLength: "Maximum length reached\n",
    Format: "Incorrect format\n"
};