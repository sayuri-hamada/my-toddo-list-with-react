import { FC, memo } from "react";

import { Header } from "../layout/Header";
import { TodoCard } from "../project/TodoCard";
import { Ttl } from "../components/Ttl";

export const CompleteList: FC = memo(() => {
  return (
    <>
      <Header />
      <div className='todo-list'>
        <Ttl>完了済みのタスク</Ttl>
        <TodoCard />
      </div>
    </>
  )
});
