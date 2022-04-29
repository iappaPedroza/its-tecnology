import Link from "next/link";
import styles from "../../styles/todos.module.css";

export async function getStaticProps(context) {
  const { params } = context;
  const data = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${params.todoId}`
  );
  const todo = await data.json();
  return {
    props: { todo },
  };
}

export async function getStaticPaths() {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/`);
  const data = await response.json();

  const paths = data.map((todo) => {
    return {
      params: {
        todoId: `${todo.id}`,
      },
    };
  });

  return { paths, fallback: false };
}

export default function Todo({ todo }) {
  return (
    <>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1>Tarefa Nº: {todo.id}</h1>
          <h3>Texto: {todo.title}</h3>
          <hr></hr>
          <p>
            <ul>
              <li>
                Comentário: Algum lorem ...
                <Link href={`/todos/${todo.id}/comments/1`}>
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
