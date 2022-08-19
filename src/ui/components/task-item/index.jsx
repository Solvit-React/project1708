import './style.css'

export const TaskItem = (props)=>{
    const task = props.task;
    const index = props.index;
 

    return(
        <li key={`task-${index}`} className="container">
            <img alt="" src={task.icon} />
            
            <div className='title_description'>
                <h1>{task.name}</h1>
                <p>{ task.description}</p>
            </div>

            <div>

            </div>

        </li>
    )
}