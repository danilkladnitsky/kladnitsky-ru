import React, { ReactNode } from 'react';
import styles from "./styles.module.scss";

type Props = {
    children: ReactNode;
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export const Title = ({ children, as: HeaderComponent = 'h1' }: Props) => {
  return (
      <HeaderComponent className={styles.title}>{children}</HeaderComponent>
  )
}
