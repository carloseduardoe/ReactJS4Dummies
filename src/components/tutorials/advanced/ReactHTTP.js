import React, { Component } from 'react';
import GetHTTP from './ReactHTTP/GetHTTP';
import PostHTTP from './ReactHTTP/PostHTTP';

export default class ReactHTTP extends Component {
    render() {
        return <div>
            <h4>GET HTTP</h4>
            <GetHTTP url=""/>
            <h4>Post HTTP</h4>
            <PostHTTP url=""/>
        </div>;
    }
}
