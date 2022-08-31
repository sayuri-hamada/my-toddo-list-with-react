import { FC, memo } from "react";
import { Route, Routes } from "react-router-dom";
import { CompleteList } from "../pages/CompleteList";
import { Top } from "../pages/Top";


export const Router: FC = memo(() => {
  return (
    <Routes>
      <Route path="/" element={<Top />} />
      <Route path="/complete-list" element={<CompleteList />} />
    </Routes>
  );
});
