import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

export type TaskItem = {
  taskName: string,
  completed: boolean
}

export type TaskListContextType = {
  taskList: TaskItem[];
  setTaskList: Dispatch<SetStateAction<TaskItem[]>>
}

export const TaskListContext = createContext<TaskListContextType>({} as TaskListContextType);

export const TaskListProvider = (props: { children: ReactNode }) => {
  const { children } = props;
  const [taskList, setTaskList] = useState<TaskItem[]>([]);
  return (
    <TaskListContext.Provider value={{ taskList, setTaskList }}>
      {children}
    </TaskListContext.Provider>
  )
}
