import Link from 'next/link'
export default function NavBarProducts() {
  return (
    <>
      <ul>
        <li>
          <Link href="/products/pants">
            <a>Calças</a>
          </Link>
        </li>
        <li>
          <Link href="/products/shirts">
            <a>Camisas</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Voltar</a>
          </Link>
        </li>
      </ul>
    </>
  );
}
