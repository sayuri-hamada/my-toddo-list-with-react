import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

import { Btn } from '../components/Btn';
import { useTaksList } from '../hooks/useTaskList';
import styles from '../scss/layout/header.module.scss';
import fadeTransition from '../scss/transition/fade.module.scss';

type Props = {
  isTopPage?: boolean;
}

export const Header: FC<Props> = (props) => {

  //現在いるページの判定
  const { isTopPage = false } = props;

  //タスク追加モーダル表示非表示管理
  const [showModal, setShowModal] = useState<boolean>(false);
  //モーダル表示
  const openModal = ():void => {
    setShowModal(true)
  }
  //モーダル非表示
  const closeMoldal = ():void => {
    setShowModal(false)
  }

  //タスクリストのStateを取得
  const { taskList, setTaskList } = useTaksList();

  //入力するTODOの値
  const [todoText, setTodoText] = useState('');

   //TODOが入力された時にステートの値を変更
  const onChangeTodoText = (e: any) => setTodoText(e.target.value);

  //追加ボタンを押した時に入力されたTODOの値を未完了のTODOリストに追加
  const onClickAdd = () => {
    //何も入力せずに追加ボタンを押した場合処理を中断
    if (todoText === "") return;

    //分割代入を利用して未完了のTODOリストに入力されたTODOを追加
    const newTodos = [...taskList, {taskName: todoText, completed: false}];
    setTaskList(newTodos);
    //入力ボックスの値を空に
    setTodoText("");
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.header__inner}>
          <h1 className={styles.header__ttl}>TODO LIST</h1>
          <button className={styles['header__add-btn']} onClick={openModal}>＋</button>
          <Btn className={styles['header__comp-btn']}>{isTopPage ? (<Link to='/complete-list'>Complete List</Link>) : (<Link to='/'>TOP</Link>) }</Btn>
        </div>
      </header>

      <CSSTransition classNames={fadeTransition} in={showModal} timeout={700} unmountOnExit>
          <div className={styles['header-modal']}>
            <div className={styles['header-modal__overlay']}></div>
            <div className={styles['header-modal__box']}>
              <button className={styles['header-modal__close']} onClick={closeMoldal}>×</button>
              <div></div>
              <div className={styles['header-modal__form']}>
                <input className={styles['header-modal__input']} type="text" value={todoText} placeholder='タスク名を入力してください' onChange={onChangeTodoText} />
                <Btn className={styles['header-modal__btn']} onClick={onClickAdd}>追加</Btn>
              </div>

            </div>
          </div>
       </CSSTransition>
    </>
  );
}
