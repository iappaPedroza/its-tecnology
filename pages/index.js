import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>&copy; ITS Tecnologia Criativa</title>
        <meta name="description" content="Desenvolvimento de web sites e app" />
        <meta
          name="author"
          content="Iaponã Pedroza - CEO &amp; Data Engineer"
        />
        
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <main className={styles.main}>
          <div>
            <span className={styles.logo}>
              <Image
                src="/img/logoits-01.png"
                alt="Its Logo"
                width={380}
                height={180}
              />
            </span>
            <p>Sua chave para excelentes resultados. Sempre!</p>
          </div>
        </main>
      </div>
    </>
  );
}
