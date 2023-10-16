import { ReactNode } from "react"
import styles from "./styles.module.scss";

type Props = {
    children: ReactNode;
}

export const Section = ({ children }: Props) => {
  return (
      <section className={styles.section}>
          {children}
      </section>
  )
}
