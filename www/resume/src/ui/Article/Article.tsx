import React, { ReactNode } from 'react';
import styles from "./styles.module.scss";

type Props = {
    children: ReactNode;
}

export const Article = ({ children }: Props) => {
  return (
      <article className={styles.article}>{children}</article>
  )
}
