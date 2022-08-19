import { useEffect, useState } from "react"
import "./style.css"
import TaskRepositoryImpl from "../../../data/repository/task-repository-impl";
import { TaskItem } from "../task-item";

export default function ActiveTasks(){
    const [tasks, setTasks] = useState([]);
   
    useEffect(()=>{
        const repo = new TaskRepositoryImpl();
        repo.getCompletedTasks().then(response=>{
            setTasks(response);
        });

    }, []);

    return <ul>
       {tasks.map((task, index)=>{
        return <TaskItem task={task} index={index}/>
       })}
    </ul>
}