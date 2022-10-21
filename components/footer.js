import Link from "next/link"
import { useRouter } from "next/router"
import styles from '../styles/footer.module.css'

export default function Footer() {
  const router=useRouter()
  return (
    <footer className={styles.footer}>
      <div className={` ${styles.contenido}`}>
        <nav className={styles.navegacion}>
          <Link href='/'>
            Inicio
          </Link>
          <Link href='/nosotros'>
            Temario
          </Link>
          <Link href='/tienda'>
            Informacion
          </Link>
          <Link href='/blog'>
            Nosotros
          </Link>

        </nav>
        <p className={styles.copyright}>Todos los derechos reservados {new Date().getFullYear()}</p>
      </div>
    </footer>
  )
}
