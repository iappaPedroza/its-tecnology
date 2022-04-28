import Image from "next/image";
import Link from "next/link";
import styles from "../styles/NavBar.module.css";
export default function NavBar() {
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.logo}>
          <Image
            src="/img/logoits-00-white.png"
            alt="Its Logo"
            width={100}
            height={48}
          />
        </div>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>Sobre</a>
            </Link>
          </li>
          <li>
            <Link href="/products">
              <a>Produtos</a>
            </Link>
          </li>
          <li>
            <Link href="/todos">
              <a>Tarefas</a>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
