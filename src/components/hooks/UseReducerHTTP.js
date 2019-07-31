// import React, { useState, useEffect } from 'react';
import React, { useReducer, useEffect } from 'react';
import axios from 'axios';

const UseReducerHTTP = () => {
    const url = "http://jsonplaceholder.typicode.com/posts/67";
    
    // === === == == = = Using useState and useEffect = = == == === ===
    // 
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);
    // const [post, setPost] = useState({});
    // 
    // useEffect(() => {
    //     axios.get(url)
    //     .then(res => {
    //         setPost(res.data);
    //         setLoading(false);
    //     })
    //     .catch(err => {
    //         setPost({});
    //         setLoading(false);
    //         setError(err);
    //     });
    // }, []);
    // 
    // return <div>
    //     { loading ? 
    //         <pre>Loading... =]</pre> : 
    //         <pre>
    //             { JSON.stringify(error ? error : post, null, 2) }
    //         </pre>
    //     }
    // </div>;
    

    // === === == == = = Using useReducer = = == == === ===
    //  
    const initialState = {
        loading: true,
        error: null,
        post: {}
    };
    
    const reducerFunction = (state, action) => {
        switch(action.type) {
            case 'success':
                return {
                    loading: false,
                    error: null,
                    post: action.data
                };
            case 'error':
                return {
                    loading: false,
                    error: action.data,
                    post: {}
                };
            default: 
                return state;
        }
    };
    
    const [state, dispatch] = useReducer(reducerFunction, initialState);

    useEffect(() => {
        axios.get(url)
        .then(res => {
            dispatch({
                type: 'success',
                data: res.data
            });
        })
        .catch(err => {
            dispatch({
                type: 'error',
                data: err
            });
        });
    }, []);

    return <div>
        { state.loading ? 
            <pre>Loading... =]</pre> : 
            <pre>
                { JSON.stringify(state.error ? state.error : state.post, null, 2) }
            </pre>
        }
    </div>;
}

export default UseReducerHTTP
