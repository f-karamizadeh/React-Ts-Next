import { useState } from 'react';
import { Task } from './types';

type FormProps = {
  addTask: (task: Task) => void;
}


function Form({ addTask }: FormProps) {

  const [text, setText] = useState<string>('');
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(!text.trim()) return;
    console.log(text);

    // Here  add the new task 
    addTask({ id: Date.now().toString(), description: text.trim(), isCompleted: false });
    setText('');
  }
  return (
    <form className='form task-form' onSubmit={handleSubmit}>
      <input type="text" className='form-input' value={text}
       onChange={(e) => setText(e.target.value)} />
      <button type="submit" className='btn'>Add Task</button>
    </form>
  )
}

export default Form