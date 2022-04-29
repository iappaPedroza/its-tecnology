import Link from "next/link";
import styles from "../styles/404.module.css";
export default function NotFound() {
  return (
    <>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1>404</h1>
          <p>Página não encontrada!</p>
          <Link href="/">
            <a>Voltar</a>
          </Link>
        </main>
      </div>
    </>
  );
}
