import React, {useState} from 'react';
import './App.css';
import {v1} from 'uuid';
import {Todolist} from './Todolist';
import {AddItemForm} from './AddItemForm';

export type FilterValuesType = 'all' | 'active' | 'completed';

export type TodolistsType = {
    id: string, title: string, filter: FilterValuesType
}
function App() {

    let todolistID1 = v1();
    let todolistID2 = v1();

    let [todolists, setTodolists] = useState<Array<TodolistsType>>([
        {id: todolistID1, title: 'What to learn', filter: 'all'},
        {id: todolistID2, title: 'What to buy', filter: 'active'},
    ])

    let [tasks, setTasks] = useState({
        [todolistID1]: [
            {id: v1(), title: 'HTML&CSS', isDone: true},
            {id: v1(), title: 'JS', isDone: true},
            {id: v1(), title: 'ReactJS', isDone: false},
            {id: v1(), title: 'Rest API', isDone: false},
            {id: v1(), title: 'GraphQL', isDone: false},
        ],
        [todolistID2]: [
            {id: v1(), title: 'HTML&CSS2', isDone: true},
            {id: v1(), title: 'JS2', isDone: true},
            {id: v1(), title: 'ReactJS2', isDone: false},
            {id: v1(), title: 'Rest API2', isDone: false},
            {id: v1(), title: 'GraphQL2', isDone: false},
        ]
    });

    function removeTask(todoListId: string, id: string) {
        let filteredTasks = {
            ...tasks, [todoListId]: tasks[todoListId].filter(f => f.id != id)
        }
        //.filter(t => t.id != id);
        setTasks(filteredTasks);
    }

    function deleteTask(todoListId: string) {
        setTodolists(todolists.filter( f => f.id !== todoListId))
        delete tasks[todoListId]
        console.log(tasks)
    }


    function addTask(todoListId: string, title: string) {
        let task = {id: v1(), title: title, isDone: false};
        setTasks({...tasks, [todoListId]: [...tasks[todoListId], task]})
    }


    function changeStatus(todoListId: string, taskId: string, isDone: boolean) {
        setTasks({
            ...tasks, [todoListId]: tasks[todoListId].map(m => m.id === taskId
              ? {...m, isDone}
              : m)
        })
    }

    function changeFilter(todoListId: string, value: FilterValuesType) {
        setTodolists([...todolists.map(m => m.id === todoListId ? {...m, filter: value} : m)])
    }

    function addTodoList(title: string) {
        let newtodolist: TodolistsType = {id: v1(), title: title, filter: 'active'}
        setTasks({...tasks, [newtodolist.id]:[] })
        setTodolists([newtodolist, ...todolists])
    }

    return (
      <div className="App">

          <AddItemForm addItem={addTodoList}/>

          {todolists.map(el => {

              let tasksForTodolist = tasks[el.id]

              if (el.filter === 'active') {
                  tasksForTodolist = tasks[el.id].filter(f => !f.isDone);
              }
              if (el.filter === 'completed') {
                  tasksForTodolist = tasks[el.id].filter(f => f.isDone);
              }


              return <Todolist title={el.title}
                               tasks={tasksForTodolist}
                               removeTask={removeTask}
                               changeFilter={changeFilter}
                               addTask={addTask}
                               changeTaskStatus={changeStatus}
                               filter={el.filter}
                               todolistsId={el.id}
                               deleteTask={deleteTask}
              />
          })}

      </div>
    );
}

export default App;
