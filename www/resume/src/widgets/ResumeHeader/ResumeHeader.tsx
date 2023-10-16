import { LanguageSwitch } from "@widgets";
import styles from "./styles.module.scss";

export const ResumeHeader = () => {
  return (
    <header className={styles.resumeHeader}>
      <div className={styles.author}>
        <h1 className={styles.name}>Данил Кладницкий</h1>
        <h2 className={styles.currentWork}>Frontend Engineer, Saint-Petersburg</h2>
      </div>
      <LanguageSwitch className={styles.langSwitch} />
    </header>
  )
}