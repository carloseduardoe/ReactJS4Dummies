import React from 'react'

export default function Post({ name, username, email }) {
    return <div>
        <h4>{name}<br/><small>({username})</small></h4>
        <p>{email}</p>
    </div>;
}
