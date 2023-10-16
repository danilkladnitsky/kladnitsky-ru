import { MantineProvider, createTheme } from "@mantine/core";
import { ResumeHeader, Bio, Career } from "@widgets";

import styles from "./styles.module.scss";

const theme = createTheme({
  /** Your theme override here */
});

export const App = () => {
  return (
    <MantineProvider
      theme={theme}
      defaultColorScheme="dark"
    >
      <main className={styles.app}>
        <ResumeHeader />
        <Bio />
        <Career />
      </main>
    </MantineProvider>
  )
}
