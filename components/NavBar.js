import Link from 'next/link'
export default function NavBar() {
  return (
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
    </ul>
  );
}
