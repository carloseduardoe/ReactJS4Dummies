import React, { Component } from 'react'

export default class RegComp extends Component {
  render() {
    console.log('Regular render');
    return <div>Regular: {this.props.name}</div>;
  }
}