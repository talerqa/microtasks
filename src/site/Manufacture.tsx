import React from 'react';
import {topCarsType} from '../Export';

export const Manufacture = (props: topCarsType) => {
  return (<div>
    <ul>
      {props.data.map((car, index) => {
        return <div>
          <li>
            <span> {car.manufacturer}</span>
            <span>: {car.model}</span>
          </li>
        </div>
      })}
    </ul>
  </div>)
};

