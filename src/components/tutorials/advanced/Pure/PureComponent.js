import React, { PureComponent } from 'react';

/*
 * Pure components implement shouldComponentUpdate with a shallow prop and state comparison.
 * 
 * Shallow comparison
 * 
 *      var a = [1,2,3];
 *      var b = [1,2,3];
 *      var c = a;
 * 
 *      (a === b) // false
 *      (a === c) // true
 * 
 *      primitive types: evaluates the type and value of a variable.
 *      complex types:   checks if the variable references point to the same object.
*/

export default class PureComp extends PureComponent {
  render() {
    console.log('Pure render');
    return <div>Pure: {this.props.name}</div>;
  }
}
