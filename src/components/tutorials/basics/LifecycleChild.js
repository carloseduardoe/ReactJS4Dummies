import React, { Component } from 'react'

export default class LifecycleChild extends Component {

  constructor(props) {
    super(props)
    this.state = {
      name: 'child'
    }
    console.log('Child constructor');
  }

  static getDerivedStateFromProps(props, state) {
    console.log('Child getDerivedStateFromProps');
    return null;
  }

  componentDidMount() {
    console.log('Child componentDidMount');
  }

  shouldComponentUpdate() {
    console.log('Child shouldComponentUpdate');
		return true;
	}

	getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('Child getSnapshotBeforeUpdate');
    return null;
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		console.log('Child componentDidUpdate');
	}

  render() {
    console.log('Child render');
    return <div>{this.state.name}</div>;
  }
}