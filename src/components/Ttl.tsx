import { FC, ReactNode } from "react";
import { clsx } from "clsx";

import styles from '../scss/components/ttl.module.scss';

type Props = {
  children: ReactNode;
}

export const Ttl: FC<Props> = (props) => {
  const { children } = props;
  return (
    <h2 className={styles.ttl}><span>{children}</span></h2>
  )
};
