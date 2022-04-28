import stylesFooter from "../styles/stylesFooter.module.css";
import Image from "next/image";
export default function Footer() {
  return (
    <>
      <footer className={stylesFooter.footer} id="rodape">
        <span className={stylesFooter.logoFooter}>Powered by</span>
        <a
          href="https://instagram.com/itstecnologiacriativa"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/img/logoits-00.png"
            alt="Its Logo"
            width={100}
            height={48}
          />
        </a>
      </footer>
    </>
  );
}
