import NavBarProducts from "../../../components/NavBarProducts";
import styles from "../../../styles/product.module.css";
export default function Shirts() {
  return (
    <>
    <div className={styles.container}>
        <main className={styles.main}>
        <NavBarProducts />
        <h1>Calças</h1>
        <ul>
          <li>Calça Adidas : R$ 79,99</li>
        </ul>

          
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
