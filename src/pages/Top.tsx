import { FC, memo } from "react";

import { Header } from "../layout/Header";
import { TodoCard } from "../project/TodoCard";
import { Ttl } from "../components/Ttl";

export const Top: FC = memo(() => {
  return (
    <>
      <Header isTopPage={true} />
      <div className='todo-list'>
        <Ttl>未完了のタスク</Ttl>
        <TodoCard />
      </div>
    </>
  )
});
