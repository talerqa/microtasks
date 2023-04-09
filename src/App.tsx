import React, {useState} from 'react';
import './App.css';
import {Country} from './Country';

export type BanknotsType = 'Dollars' | 'RUBLS' | 'All'// создадим типы для banknotes -он может быть 'Dollars', 'RUBLS' или 'All'
export type MoneyType = {
    id: number
    banknotes: BanknotsType
    value: number// не ленимся, убираем заглушку, и пишем правильный тип)
    number: string// ложку за Димыча, за...
}

let defaultMoney: Array<MoneyType> = [  // типизируем
    {id: 1, banknotes: 'Dollars', value: 100, number: ' a1234567890'},
    {id: 2, banknotes: 'Dollars', value: 50, number: ' z1234567890'},
    {id: 3, banknotes: 'RUBLS', value: 100, number: ' w1234567890'},
    {id: 4, banknotes: 'Dollars', value: 100, number: ' e1234567890'},
    {id: 5, banknotes: 'Dollars', value: 50, number: ' c1234567890'},
    {id: 6, banknotes: 'RUBLS', value: 100, number: ' r1234567890'},
    {id: 7, banknotes: 'Dollars', value: 50, number: ' x1234567890'},
    {id: 8, banknotes: 'RUBLS', value: 50, number: ' v1234567890'},
]

// типизируем на входе и выходе
export const moneyFilter = (money: Array<MoneyType>, filter: BanknotsType): Array<MoneyType> => {
    if (filter === 'Dollars') return money.filter(f => f.banknotes === 'Dollars');
    if (filter === 'RUBLS') return money.filter(f => f.banknotes === 'RUBLS');
    return money;
    //если пришел filter со значением 'All', то возвращаем все банкноты
    //return money.filter... ну да, придется фильтровать
}

function App() {
    // убираем заглушки в типизации и вставляем в качестве инициализационного значения defaultMoney
    const [money, setMoney] = useState<Array<MoneyType>>(defaultMoney)
    const [filterValue, setFilterValue] = useState<BanknotsType>('All')   // по умолчанию указываем все банкноты

    // а вот сейчас притормаживаем. И вдумчиво: константа filteredMoney получает результат функции moneyFilter
    // в функцию передаем деньги и фильтр, по которому ихбудем выдавать(ретёрнуть)

    const deleteMoney = (id: number): void => {
        setMoney(money.filter(f => f.id !== id))
    }

    const filteredMoney = moneyFilter(money, filterValue)
    return (
      <div className="App">
          <Country
            data={filteredMoney}   //отрисовать будем деньги после фильтрации
            setFilterValue={setFilterValue}  //useState передаем? Так можно
            // было?!
            deleteMoney={deleteMoney}
          />
      </div>
    );
}

// Итого: в этой компоненте у нас мозги. А вот отрисовка где-то глубже. Погружаемся в Country


export default App;
