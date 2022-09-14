import { FC, memo } from "react";

import { Header } from "../layout/Header";
import { TodoCard } from "../project/TodoCard";
import { Ttl } from "../components/Ttl";
import { useTaksList } from "../hooks/useTaskList";

export const Top: FC = memo(() => {
  const { taskList, setTaskList } = useTaksList();

  const onClickComplete = (index: number) => {
    const upDateTaskList = taskList.map((item, itemIndex) =>
      itemIndex === index ?
      {...item, completed: true} : item
    )
    setTaskList(upDateTaskList);
  }

  const onClickDelete = () => {

  }
  return (
    <>
      <Header isTopPage={true} />
      <Ttl>未完了のタスク</Ttl>
      <div className='todo-list'>
        {taskList.map((item, index) => (
          item.completed ||
          <TodoCard key={item.taskName} taskName={item.taskName} completed={item.completed} index={index} onClickComplete={onClickComplete} onClickDelete={onClickDelete} />
        ))
        }
      </div>
    </>
  )
});
