import { FC, memo } from "react";
import { Btn } from "../components/Btn";

import styles from '../scss/project/todo-card.module.scss';

export const TodoCard: FC = memo(() => {
  return (
    <div className={styles['todo-card']}>
      <p className={styles['todo-card__ttl']}>タスク名</p>
      {/* <p className={styles['todo-card__date']}>完了日：2022/09/01</p> */}
      <div className={styles['todo-card__btn-wrp']}>
        <Btn className={styles['todo-card__btn-comp']}>完了</Btn>
        <Btn bgColor="#a0a0a0" className={styles['todo-card__btn-delete']}>削除</Btn>
      </div>
    </div>
  )
});
