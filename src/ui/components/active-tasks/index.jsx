import { useEffect, useState } from "react"
import TaskRepositoryImpl from "../../../data/repository/task-repository-impl";

export default function ActiveTasks(){
    const [tasks, setTasks] = useState([]);
    useEffect(()=>{
        const repo = new TaskRepositoryImpl();
       (async function(){
        const response = await repo.getCompletedTasks();
        console.log(response);
        setTasks(response);

        })()

    }, []);
    // useef
    return <ul>
       {tasks.map(task=>{
        return <li>
            <img alt="" width="80" src={task.icon} />
            {task.name}
        </li>
       })}
    </ul>
}