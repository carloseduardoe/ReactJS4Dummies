import React from 'react'

export default function Post({ post }) {
    const { id, title, userId, body } = post;

    return <div>
        <h4>{id}: {title}<br/><small>(user: {userId})</small></h4>
        <p>{body}</p>
    </div>;
}
