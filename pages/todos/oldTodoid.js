import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../../styles/todos.module.css";
export default function Todo() {
  const router = useRouter();

  const todoId = router.query.todoid;

  return (
    <>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1>Tarefa Nº: {todoId}</h1>
          <hr></hr>
          <p>
            <ul>
              <li>
                Comentário: Algum lorem ...
                <Link href={`/todos/${todoId}/comments/1`}>
                  <a>Detalhes</a>
                </Link>
              </li>
              
            </ul>
          </p>
          <Link href="/todos">
            <a>Voltar</a>
          </Link>
        </main>
      </div>
    </>
  );
}
