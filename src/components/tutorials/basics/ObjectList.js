import React from 'react'
import Person from './Person'

function ObjectList() {
  const people = [
    { id: 1, name: 'Bruce', age: 30, skill: 'React' },
    { id: 2, name: 'Clark', age: 25, skill: 'Angular' },
    { id: 3, name: 'Diana', age: 28, skill: 'Vue' }
  ];
  const list = people.map(
    (person, index) => <Person key={index} person={person} />
  );
  return <div>{list}</div>
}

export default ObjectList
