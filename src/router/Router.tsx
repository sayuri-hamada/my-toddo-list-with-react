import { FC, memo } from "react";
import { Route, Routes } from "react-router-dom";
import { CompleteList } from "../pages/CompleteList";
import { Top } from "../pages/Top";
import { TaskListProvider } from "../providers/TaskListProviders";


export const Router: FC = memo(() => {
  return (
    <TaskListProvider>
      <Routes>
        <Route path="/" element={<Top />} />
        <Route path="/complete-list" element={<CompleteList />} />
      </Routes>
    </TaskListProvider>
  );
});
