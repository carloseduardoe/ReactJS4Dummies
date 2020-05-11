import React, { Component } from 'react';

function ErrorList({ title, errors }) {
  let component = null;

  if (errors.length) {
    component = (
      <div className="error-block">
        <h2 className="error-block_title">{title}</h2>
        <ul className="error-block_list">
          {errors.map((error, i) => <li key={i}>{error}</li>)}
        </ul>
      </div>
    );
  }

  return component;
}

export default ErrorList;