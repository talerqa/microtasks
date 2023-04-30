import React, {useState} from 'react';
import './App.css';
import {TaskType, Todolist} from './Todolist';
import {v1} from 'uuid';

export type todolistsType = {
    id: string,
    title: string,
    filter: FilterValuesType,
}

export type FilterValuesType = 'all' | 'active' | 'completed';

type tasksType = {
    [key: string]: TaskType[]
}

function App() {

    let todolistID1 = v1();
    let todolistID2 = v1();

    let [todolists, setTodolists] = useState<Array<todolistsType>>([
        {id: todolistID1, title: 'What to learn', filter: 'all'},
        {id: todolistID2, title: 'What to buy', filter: 'all'},
    ])

    let [tasks, setTasks] = useState<tasksType>({
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

    function removeTask(todolistId: string, id: string) {
        setTasks({...tasks, [todolistId]: tasks[todolistId].filter(f => f.id !== id)})
    }

    function addTask(todolistId: string, title: string) {
        let newTask = {id: v1(), title: title, isDone: false};
        setTasks({
            ...tasks,
            [todolistId]: [newTask, ...tasks[todolistId]]
        });
    }

    function changeStatus(todolistId: string, taskId: string, isDone: boolean) {
        setTasks ({
          ...tasks,
        [todolistId]: [...tasks[todolistId].map(m=> m.id ===taskId ? {...m, isDone: isDone} : m)]
        })

    }

    function changeFilter(todolistId: string, value: FilterValuesType) {
        setTodolists(todolists.map(m => m.id === todolistId ? {...m, filter: value} : m))
    }

    return (
      <div className="App">
          {todolists.map(el => {

              let tasksForTodolist = tasks[el.id];
              if (el.filter === 'active') {
                  tasksForTodolist = tasks[el.id].filter(t => !t.isDone);
              } else if (el.filter === 'completed') {
                  tasksForTodolist = tasks[el.id].filter(t => t.isDone);
              }

              return <Todolist
                key={el.id}
                title={el.title}
                tasks={tasksForTodolist}
                removeTask={removeTask}
                changeFilter={changeFilter}
                addTask={addTask}
                changeTaskStatus={changeStatus}
                filter={el.filter}
                todolistId={el.id}
              />
          })}

      </div>
    );
}

export default App;
