import { useContext } from "react";
import { TaskListContext, TaskListContextType } from "../providers/TaskListProviders";

export const useTaksList = (): TaskListContextType => useContext(TaskListContext)
