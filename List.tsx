import React from 'react'
import { Task } from './types';

type ListProps = {
  tasks: Task[];
  toggleTask: ({id}: {id: string}) => void;
}
export default function List({ tasks, toggleTask }: ListProps) {
  return (
    <ul className='list task-list'>
      {tasks.map((task) => {
       return <li key={task.id} onClick={() => toggleTask({ id: task.id })}>
          {task.description} - {task.isCompleted ? 'Done' : 'Pending'}
          <p className='task-text'></p>
          <input type="checkbox" checked={task.isCompleted}
           onChange={()=> toggleTask({id: task.id})} />
        </li>
      })}
    </ul>
  )
}


