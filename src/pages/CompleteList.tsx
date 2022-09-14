import { FC, memo } from "react";

import { Header } from "../layout/Header";
import { TodoCard } from "../project/TodoCard";
import { Ttl } from "../components/Ttl";
import { useTaksList } from "../hooks/useTaskList";

export const CompleteList: FC = memo(() => {
  const { taskList } = useTaksList();

  const onClickComplete = (index: number): void => {

  }

  const onClickDelete = () => {

  }
  return (
    <>
      <Header />
      <div className='todo-list'>
        <Ttl>完了済みのタスク</Ttl>
        <div className='todo-list'>
          {taskList.map((item, index) => (
              item.completed &&
              <TodoCard key={item.taskName} taskName={item.taskName} completed={item.completed} index={index} onClickComplete={onClickComplete} onClickDelete={onClickDelete} />
            ))
          }
        </div>
      </div>
    </>
  )
});
