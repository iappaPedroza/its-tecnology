import Link from "next/link";
import styles from "../styles/about.module.css";
export default function About() {
  return (
    <>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1>Sobre</h1>
          <p>This is Second Page</p>
          <Link href="/">
            <a>Voltar</a>
          </Link>
        </main>
      </div>
    </>
  );
}
