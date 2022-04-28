import Link from "next/link";
import styles from "../styles/todos.module.css";

export async function getStaticProps() {
  const data = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todos = await data.json();
  // console.log(todos)
  return {
    props: { todos },
  };
}

export default function Todos({ todos }) {
  return (
    <>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1>Tarefas para fazer: </h1>
          <ul>
            {todos.map((todo) => (
              <li key={todo.id}>
                <Link href="/">
                  <a>{todo.title}</a>
                </Link>
              </li>
            ))}
          </ul>
        </main>
      </div>
    </>
  );
}
