import { FC } from 'react';
import { Link } from 'react-router-dom';

import { Btn } from '../components/Btn';

import styles from '../scss/layout/header.module.scss';

type Props = {
  isTopPage?: boolean;
}

export const Header: FC<Props> = (props) => {

  const { isTopPage = false } = props;

  return (
    <header className={styles.header}>
      <div className={styles.header__inner}>
        <h1 className={styles.header__ttl}>TODO LIST</h1>
        <button className={styles['header__add-btn']}>＋</button>
        <Btn className={styles['header__comp-btn']}>{isTopPage ? (<Link to='/complete-list'>Complete List</Link>) : (<Link to='/'>Todo List</Link>) }</Btn>
      </div>
    </header>
  );
}
