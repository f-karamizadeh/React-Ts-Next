import { Task } from "./types";
import List from "./List";
import Form from "./Form";
import {useState, useEffect} from "react";

function Component() {
  const [tasks, setTasks] = useState<Task[]>([]);
  return (
   
      
    <section>
      <Form />
      <List />
    </section>
  );
}
export default Component;
