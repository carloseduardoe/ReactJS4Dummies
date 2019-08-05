import React, { useState, useEffect } from 'react';
import axios from 'axios';
import User from './HTTP/User';
import Post from './HTTP/Post';

const HTTPGet = () => {
    const url = "https://jsonplaceholder.typicode.com",
          [userId, setUserId] = useState(1),
          [user, setUser] = useState(1),
          [postId, setPostId] = useState(1),
          [post, setPost] = useState({}),
          [posts, setPosts] = useState([]);

    const updateId = (e) => {
        const target = e.target;
        let id = parseInt(e.target.value, 10);
        
        if (isNaN(id)) id = 1;

        switch(target.name) {
            case "userId": setUserId(id); break;
            case "postId": setPostId(id); break;
            default: break;
        }
    };

    useEffect(() => {
        axios.get(`${url}/users/${userId}`)
        .then(res => setUser(res.data))
        .catch(e => console.error(e));
    }, [userId]);

    const getPost = () => {
        axios.get(`${url}/posts/${postId}`)
        .then(res => setPost(res.data))
        .catch(e => console.error(e));
    };

    useEffect(() => {
        axios.get(`${url}/posts`)
        .then(res => setPosts(res.data))
        .catch(e => console.error(e));
    }, []);

    return <div>
        <h3>User</h3>
        <input type="text" defaultValue="1" name="userId" onChange={updateId}/>
        {user.id && <User name={user.name} username={user.username} email={user.email}/>}
        
        <hr/>

        <h3>Post</h3>
        <input type="text" defaultValue="1" name="postId" onChange={updateId}/>
        <button onClick={getPost}>Get Item</button>
        {post.id && <Post post={post}/>}
        
        <hr/>

        <h3>All Posts</h3>
        {posts.map((item, index) => 
            <Post key={index} post={item}/>
        )}
    </div>;
}

export default HTTPGet
