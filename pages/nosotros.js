import Image from 'next/future/image'
import Link from 'next/link'
import Layout from '../components/layout'
import styles from '../styles/nosotros.module.css'

export default function Nosotros() {
  return (
    <Layout
      title={'Nuestro Equipo'}
      description={' Acerca de Nuestro equipo e integrantes'}
    >
      <main >
        <h1 className={styles.avicii}>Nuestro Equipo</h1>
        
        <div className={styles.info}>
          <p>
          
          <div className={styles.flex}>
          <Image className={styles.imagen} src='/img/equipo.png' width={1920} height={300} alt='Imagen Equipo' title='Nuestro Equipo' />
          <div>
          <h3>Integrantes</h3>
            <li>
              Reyna Judith López García
            </li>
            <li>
              Alma Rosa Alquisira Herrera
            </li>
            <li>
              Dulce Saray Alvarez Sánchez
            </li>
            <li>
              Ximena Ferrer Sánchez
            </li>
            <li>
              Obed Olan Domínguez
            </li>
          </div>
          
          </div>
          
          </p>
          <p>
          Si quieres ser realmente grande, tienes que esforzarte tan duro en ser un gran miembro del equipo, como lo haces en ser un gran jugador. Esto es tan cierto para un atleta como para cualquier profesión. Cuando nos esforzamos por ser un gran miembro del equipo, hacemos mejores a los que nos rodean (nuestro equipo).<br/>
          Tres cosas sobre las que tienes control absoluto para ser un gran compañero de equipo son: tu actitud, tu esfuerzo y tus acciones. Sin importar lo que esté sucediendo a tu alrededor o lo que consideres que no es justo, todos los días puedes enfocarte en ser positivo, en trabajar duro y hacer sentir mejor a los que te rodean. Si haces esto, grandes cosas pueden suceder.
          </p>
        </div>
        

      </main>
      <div>
        <Link href={'/informacion'}>
          <a className='btnprev'>
            <Image src='/img/izquierda.png' width={100} height={50} alt='boton izquierda' />
          </a>
        </Link>
        <Link href={'/'}>
          <a className='btnnext'>
            <Image src='/img/derecha.png' width={100} height={50} alt='boton izquierda' />
          </a>
        </Link>
      </div>
    </Layout>
  )
}
