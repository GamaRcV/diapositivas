import Image from "next/future/image"
import Link from "next/link"
import styles from '../styles/header.module.css'
import {useRouter} from 'next/router'

export default function Header() {
  const router =useRouter()
  return (
    <header className={styles.header}>
      <div className={` ${styles.barra}`}>
        
        
        <Link href='/'>
          <a>
            <Image src='/img/logo2.png' width={150} height={50} alt='logo'/>
          </a>
        </Link>

        

        <nav className={styles.navegacion}>
          <Link href='/'>
            <a className={router.pathname=== '/' ? styles.active : ''}>
              Inicio
            </a>
          </Link>

          <Link href='/temario'>
            <a className={router.pathname=== '/temario' ? styles.active : ''}>
              Temario
            </a>
          </Link>

          <Link href='/informacion'>
            <a className={router.pathname=== '/informacion' ? styles.active : ''}>
              informacion
            </a>
          </Link>
          <Link href='/nosotros'>
            <a className={router.pathname=== '/nosotros' ? styles.active : ''}>
              Nosotros
            </a>
          </Link>

          
        </nav>


      </div>
    </header>
  )
}
