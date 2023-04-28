import React, {useState} from 'react';
import './App.css';
import {v1} from 'uuid';
import {Todolist} from './Todolist';

export type FilterValuesType = 'all' | 'active' | 'completed';

export type TodolistsType = {
    id: string, title: string, filter: FilterValuesType
}

function App() {

    // let [tasks, setTasks] = useState([
    //     {id: v1(), title: "HTML&CSS", isDone: true},
    //     {id: v1(), title: "JS", isDone: true},
    //     {id: v1(), title: "ReactJS", isDone: false},
    //     {id: v1(), title: "Rest API", isDone: false},
    //     {id: v1(), title: "GraphQL", isDone: false},
    // ]);
    //   let [filter, setFilter] = useState<FilterValuesType>("all");

    let todolistID1 = v1();
    let todolistID2 = v1();

    let [todolists, setTodolists] = useState<Array<TodolistsType>>([
        {id: todolistID1, title: 'What to learn', filter: 'completed'},
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

    console.log(tasks[todolists[0].id])

    function removeTask(todoListId: string, id: string) {
        let filteredTasks = {
            ...tasks, [todoListId]: tasks[todoListId].filter(f => f.id != id)
        }
          //.filter(t => t.id != id);
        setTasks(filteredTasks);
    }

    function addTask(title: string) {
        // let task = {id: v1(), title: title, isDone: false};
        // let newTasks = [task, ...tasks];
        // setTasks(newTasks);
    }

    function changeStatus(taskId: string, isDone: boolean) {
        // let task = tasks.find(t => t.id === taskId);
        // if (task) {
        //     task.isDone = isDone;
        // }
        //
        // setTasks([...tasks]);
    }

    function changeFilter(value: FilterValuesType) {
        //setTodolists(tasksForTodolist)
    }

    return (
      <div className="App">
          {todolists.map(el => {

              let tasksForTodolist = tasks[el.id]

              if (el.filter === 'active') {
                  tasksForTodolist = tasks[el.id].filter(f => f.isDone === false);
              }
              if (el.filter === 'completed') {
                  tasksForTodolist = tasks[el.id].filter(f => f.isDone === true);
              }


              return <Todolist title={el.title}
                               tasks={tasksForTodolist}
                               removeTask={removeTask}
                               changeFilter={changeFilter}
                               addTask={addTask}
                               changeTaskStatus={changeStatus}
                               filter={el.filter}
                               todolistsId={el.id}
              />
          })}

      </div>
    );
}

export default App;
