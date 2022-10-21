import Image from 'next/future/image'
import Link from 'next/link'
import Layout from '../components/layout'
import styles from '../styles/index.module.css'

export default function Home() {
  return (

    <Layout
      title={'Inicio'}
      description={'Sitio web para presentacion de Diapositivas'}
    >
      <main >
        <h1 className={styles.avicii}>Químico Farmacéutico Biólogo</h1>
        <div className={styles.info}>
          <Image src='/img/micro.jpg' width={1920} height={300} alt='Imagen QFB'/>
          <p>La detección de enfermedades a tiempo es una de las premisas para tener un tratamiento óptimo en la atención de los pacientes.<br/><br/>
          La carrera de Químico Farmacéutico Biólogo (QFB) precisamente se encarga de desarrollar análisis químicos, biológicos y microbiológicos para el diagnóstico de enfermedades y control de sustancias activas. Además de que son capaces de producir medicamentos estables, seguros y eficaces a través de la investigación e innovación. Es por ello por lo que esta carrera tiene un gran potencial de desarrollo.<br/><br/>
          Un Químico Farmacéutico Biólogo (QFB) aplica los principios químicos y biológicos, en la producción de bienes y prestación de servicios para la preservación y recuperación de la salud.<br/>
          El profesional de esta área reúne las características necesarias para su desempeño profesional en las áreas analítica, de diagnóstico clínico, farmacéutica y de investigación, resultado del equilibrio entre las ciencias básicas, biomédicas, farmacéuticas y humanísticas.
          </p>
          
        </div>
      </main>
      <div>
            <Link href={'/nosotros'}>
                <a className='btnprev'>
                    <Image src='/img/izquierda.png' width={100} height={50} alt='boton izquierda' />
                </a>
            </Link>
            <Link href={'/temario'}>
                <a className='btnnext'>
                    <Image src='/img/derecha.png' width={100} height={50} alt='boton izquierda' />
                </a>
            </Link>
        </div>
    </Layout>
  )
}
