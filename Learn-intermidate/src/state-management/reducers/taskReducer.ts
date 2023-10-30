interface Task {
    id: number;
    title: string;
}

interface AddTask {
    type: 'ADD';
    task: Task
}

interface DeleteTask {
    type: 'DELETE';
    taskID: number;
}

type TaskAction = AddTask | DeleteTask;


const taskReducer = (tasks: Task[], action: TaskAction): Task[] => {
    if (action.type === 'ADD') return [...tasks, action.task];
    if (action.type === 'DELETE') return tasks.filter(task => task.id !== action.taskID);
    return tasks
}

export default taskReducer