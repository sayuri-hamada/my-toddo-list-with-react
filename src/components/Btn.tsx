import { FC, ReactNode } from "react";
import { clsx } from "clsx";

import styles from '../scss/components/btn.module.scss';

type Props = {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  bgColor?: string;
}

export const Btn: FC<Props> = (props) => {
  const { children, onClick = undefined, className = undefined , bgColor = undefined} = props;
  return (
    <button style={{backgroundColor: bgColor}} className={clsx(styles.btn, className)} onClick={onClick}>
      {children}
    </button>
  )
};
