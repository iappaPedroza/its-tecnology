import NavBarProducts from "../../components/NavBarProducts";
import styles from "../../styles/products.module.css";
export default function Products() {
  return (
    <>
      <div className={styles.container}>
        <main className={styles.main}>
          <h1>Produtos</h1>
          <p>Catálogo de Produtos</p>

          <NavBarProducts />
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus
            numquam non iusto. Ullam optio qui modi necessitatibus veritatis
            explicabo dolores ratione suscipit voluptatum, accusamus sequi in
            maxime laudantium earum iusto.
          </p>
        </main>
      </div>
    </>
  );
}
