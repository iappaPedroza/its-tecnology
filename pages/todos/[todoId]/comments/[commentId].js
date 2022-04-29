import Link from "next/link";
import styles from "../../../../styles/todos.module.css";
import { useRouter } from "next/router";

export default function Comments() {
  const router = useRouter();

  const todoId = router.query.todoId;

  const commentId = router.query.commentId;

  return (
    <>
      <div className={styles.container}>
        <main className={styles.main}>
          <Link href={`/todos/${todoId}`}>
            <a>Voltar</a>
          </Link>
          <h1>Exibindo o Comentário número: {commentId}</h1>
          <p>Da Tarefa: {todoId}</p>
        </main>
      </div>
    </>
  );
}
