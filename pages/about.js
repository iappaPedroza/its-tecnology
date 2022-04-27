import Link from "next/link";
import NavBar from "../components/NavBar";
export default function About() {
  return (
    <>
      <NavBar/>
      <h1>Sobre</h1>
      <p>This is Second Page</p>
      <Link href="/">
        <a>Voltar</a>
      </Link>
    </>
  );
}
