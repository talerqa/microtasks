import React from 'react';
import {City} from './City';
import {BanknotsType, MoneyType} from './App';

type CountryPropsType = {
  data: Array<MoneyType>
  setFilterValue: (filterValue: BanknotsType) => void // давайте подумаем, setFilter -это гоузчик, у которого всегда в руках товар
  deleteMoney: (id: number) => void
}

export const Country = (props: CountryPropsType) => {
  const setAll = () => {
    console.log(props.data)
    return props.setFilterValue('All')// засетаем 'All'
  }

  const setDollars = () => {
    console.log(props.data)
    return props.setFilterValue('Dollars') // засетаем 'Dollars'
  }

  const setRUBLS = () => {
    console.log(props.data)
    return props.setFilterValue('RUBLS') // засетаем 'RUBLS'
  }

  return (
    <div>
      <button onClick={setAll}>All
      </button>
      <button onClick={setDollars}>Dollars
      </button>
      <button onClick={setRUBLS}>RUBLS
      </button>
      <City data={props.data} deleteMoney={props.deleteMoney}/>
    </div>
  );
};

