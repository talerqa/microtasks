import React, {useState} from 'react';

export const Money = (props: any) => {

  const [filter, setFilter] = useState('all');

  let currentMoney = props.data;
  if (filter === 'RUBLS') {
    currentMoney = props.data.filter((el: any) => el.banknots === 'RUBLS');

  }

  if (filter === 'Dollars') {
    currentMoney = props.data.filter((el: any) => el.banknots === 'Dollars');

  }

  const onClickHandler = (name: any) => {
    setFilter(name)
  }

  return <div>
    {currentMoney.map((element: any) => {
      return <div>
        <ul>
          <li>
            <span> {element.banknots}</span>
            <span> {element.value}</span>
            <span> {element.number}</span>
          </li>
        </ul>
      </div>
    })
    }
    <button onClick={() => onClickHandler('all')}>all</button>
    <button onClick={() => onClickHandler('RUBLS')}>ruble</button>
    <button onClick={() => onClickHandler('Dollars')}>dollar</button>
  </div>
}


// export const Money = (props: any) => {
//   {
//     props.data.map((element: any) => {
//       return <div>
//         <ul>
//           <li>
//             <span> {element.banknots}</span>
//             <span> {element.value}</span>
//             <span> {element.number}</span>
//           </li>
//         </ul>
//         <button>all</button>
//         <button>ruble</button>
//         <button>dollar</button>
//       </div>
//     })
//   }
// };
