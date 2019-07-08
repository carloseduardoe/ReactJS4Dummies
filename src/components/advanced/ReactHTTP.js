import React, { Component } from 'react';
import GetHTTP from './ReactHTTP/GetHTTP';
import PostHTTP from './ReactHTTP/PostHTTP';

export default class ReactHTTP extends Component {
    render() {
        return <div>
            <GetHTTP url=""/>
            <PostHTTP url=""/>
        </div>;
    }
}
