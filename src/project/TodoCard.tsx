import { FC, memo } from "react";
import { Btn } from "../components/Btn";
import { TaskItem } from "../providers/TaskListProviders";

import styles from '../scss/project/todo-card.module.scss';

type Props = TaskItem & {
  index: number;
  onClickComplete: (index: number)=> void;
  onClickDelete: (index: number)=> void;
}

export const TodoCard: FC<Props> = memo((props) => {
  const { taskName, completed, index, onClickComplete ,onClickDelete} = props


  return (
    <div className={styles['todo-card']}>
      <p className={styles['todo-card__ttl']}>{taskName}</p>
      {/* <p className={styles['todo-card__date']}>完了日：2022/09/01</p> */}
      <div className={styles['todo-card__btn-wrp']}>
        <Btn className={styles['todo-card__btn-comp']} onClick={()=> onClickComplete(index)}>完了</Btn>
        <Btn bgColor="#a0a0a0" className={styles['todo-card__btn-delete']} onClick={()=> onClickDelete(index)}>削除</Btn>
      </div>
    </div>
  )
});
