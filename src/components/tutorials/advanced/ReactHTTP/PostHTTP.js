import React, { Component } from 'react';
import axios from 'axios';

export default class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.result = React.createRef();
        this.url = "https://jsonplaceholder.typicode.com/posts";
    }
    
    changeHandler = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }
    
    handleSubmission = (e) => {
        e.preventDefault();
        axios.post(this.url, this.state)
        .then(res => {
            console.log("POST response:", res);
            this.result.current.innerHTML = "response:" + JSON.stringify(res, null, 2);
        })
        .catch(err => console.error(err));
    }

    render() {
        const { userId, title, body } = this.state;
        return <div>
            <form onSubmit={this.handleSubmission}>
                <div>
                    <input type="text" name="userId" value={userId} onChange={this.changeChandler}/>
                </div>
                <div>
                    <input type="text" name="title" value={title} onChange={this.changeChandler}/>
                </div>
                <div>
                    <textarea name="body" value={body} onChange={this.changeChandler}/>
                </div>
                <button type="submit">Send</button>
            </form>
            <pre ref={this.result}></pre>
        </div>;
    }
}
