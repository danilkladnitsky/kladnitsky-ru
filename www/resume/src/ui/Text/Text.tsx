import { ReactNode } from "react";
import styles from "./styles.module.scss";

type Props = {
    children: ReactNode;
}

export const Text = ({ children }: Props) => {
  return (
      <p className={styles.text}>{children}</p>
  )
}
