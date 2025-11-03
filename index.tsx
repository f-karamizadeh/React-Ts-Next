import { Task } from "./types";
import List from "./List";
import Form from "./Form";
import {useState, useEffect} from "react";

function Component() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask=(newTask: Task) : void => {
    setTasks([...tasks, newTask]);

    const toggleTask = ({id}:{id: string}) => {
      setTasks(
        tasks.map((task) => {
        if(task.id === id){
        return {...task, isCompleted: !task.isCompleted} ;
        }
        return task;
      })
      );
  };
  };
  function toggleTask({ id }: { id: string; }): void {
    throw new Error("Function not implemented.");
  }

  return (
    <section>
      <Form addTask={addTask} />
      <List tasks={tasks} toggleTask={toggleTask} />
    </section>
  );
}
export default Component;
