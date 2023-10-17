import { ResumeHeader, Bio, Career } from "@widgets";
import { ThemeProvider } from "@gravity-ui/uikit";

import styles from "./styles.module.scss";

export const App = () => {
  return (
    <ThemeProvider theme="dark">
      <main className={styles.app}>
        <ResumeHeader />
        <Bio />
        <Career />
      </main>
    </ThemeProvider>
  )
}
