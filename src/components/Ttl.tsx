import { FC, ReactNode } from "react";
import { clsx } from "clsx";

import styles from '../scss/components/ttl.module.scss';

type Props = {
  children: ReactNode;
  className?: string
}

export const Ttl: FC<Props> = (props) => {
  const { children, className } = props;
  return (
    <h2 className={clsx(styles.ttl, className)}><span>{children}</span></h2>
  )
};
