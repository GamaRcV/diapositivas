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
        
        <Image className={styles.imagen} src='/img/rey.jpg' width={1920} height={300} alt='Imagen QFB' />
        
          <p>
          Un Químico Farmacéutico Biólogo (QFB) aplica los principios químicos y biológicos, en la producción de bienes y prestación de servicios para la preservación y recuperación de la salud.<br />
            El profesional de esta área reúne las características necesarias para su desempeño profesional en las áreas analítica, de diagnóstico clínico, farmacéutica y de investigación, resultado del equilibrio entre las ciencias básicas, biomédicas, farmacéuticas y humanísticas.
            Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.
            ¿Por qué lo usamos?
            Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras, al contrario de usar textos como por ejemplo "Contenido aquí, contenido aquí". Estos textos hacen parecerlo un español que se puede leer. Muchos paquetes de autoedición y editores de páginas web usan el Lorem Ipsum como su texto por defecto, y al hacer una búsqueda de "Lorem Ipsum" va a dar por resultado muchos sitios web que usan este texto si se encuentran en estado de desarrollo. Muchas versiones han evolucionado a través de los años, algunas veces por accidente, otras veces a propósito (por ejemplo insertándole humor y cosas por el estilo).
            ¿De dónde viene?
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
