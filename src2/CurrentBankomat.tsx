import React from 'react';
import {MoneyType} from './App';
import styled from 'styled-components';

type CurrentBankomatPropsType = {
  money: MoneyType
  deleteMoney: (id: number) => void
}


export const CurrentBankomat = (props: CurrentBankomatPropsType) => {

  const color = 'red'

  return (
    <Banknote>
      <BanknoteName color={props.money.banknotes === 'Dollars' ? 'green' : 'blue'}>
        {props.money.banknotes}
      </BanknoteName>
      <BanknoteValue>
        {props.money.value}
      </BanknoteValue>
      <button onClick={() => {
        props.deleteMoney(props.money.id)
      }}>X
      </button>
    </Banknote>
  )
    ;
};

const Banknote = styled.div`
  margin: 10px;
  width: 200px;
  height: 200px;
  background-color: #61dafb;
`

const BanknoteName = styled.div`
  color: ${props => props.color};
`

const BanknoteValue = styled.div`
  color: yellow;
`