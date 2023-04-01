import React from 'react';
import {NewComponentPropsType} from '../Export';

export const NewComponent = (props: NewComponentPropsType) => {
  return (<div>
    <ul>
      {props.data.map((student, index) => {
        return <div key={student.id}>
          <li>
            <span> {student.name}</span>
            <span>: {student.age}</span>
          </li>
        </div>
      })}
    </ul>
  </div>)
};