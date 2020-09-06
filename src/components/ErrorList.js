import React from 'react';

function ErrorList({ title, errors }) {
    if (!errors || !errors.length) 
        return null;

    return (
        <div className="error-block">
            <h2 className="error-block_title">{title}</h2>
            <ul className="error-block_list">
                {errors.map((error, i) => <li key={i}>{error}</li>)}
            </ul>
        </div>
    );
}

export default ErrorList;