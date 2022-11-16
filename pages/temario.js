import Link from 'next/link'
import Image from 'next/future/image'
import Layout from '../components/layout'
import styles from '../styles/temario.module.css'

export default function Temario() {
  return (
    <Layout
      title={'Temario'}
      description={'Contenido de todas las diapositivas de los equipos'}
    >
      <main  className={styles.conten}>
        <h1 className='heading'>Temario</h1>
        <div className={styles.grid}>
          <div className={styles.equipo}>
            <h2>Introducción</h2>
            <Link href='/informacion'>
              <a title='Hongos macroscopicos y microscópicos'>
                <Image src='/img/hongos.jpg' width={335.61} height={188.7} alt='Hongos macroscopicos y microscópicos ' />
              </a>
            </Link>
          </div>

          <div className={styles.equipo}>
            <h2>Antimicoticos</h2>
            
            <Link href="https://onedrive.live.com/embed?cid=14BF5B6A7B6AEDEF&amp;resid=14BF5B6A7B6AEDEF%21129&amp;authkey=AJkUhco8GP_qCd4&amp;em=2&amp;wdAr=1.7777777777777777" width="476px" height="288px">
              <a title='Antimicóticos'>
                <Image src='/img/antimicoticos.jpg' width={335.61} height={188.77} alt='Antimicoticos' />
                
              </a>
            </Link>
          </div>

          <div className={styles.equipo}>
            <div>
            <h2>Micosis superficiales...</h2>
            <Link href="https://onedrive.live.com/embed?cid=14BF5B6A7B6AEDEF&amp;resid=14BF5B6A7B6AEDEF%21131&amp;authkey=AP3GTUvZiP7o-FU&amp;em=2&amp;wdAr=1.7777777777777777" width="476px" height="288px">
              <a title='Micosis superficiales y subcutáneas'>
                <Image src='/img/micosissuperficiales.png' width={335.61} height={188.7} alt='Micosis superficiales y subcutaneas'/>
              </a>
            </Link>
            </div>
          </div>

          <div className={styles.equipo}>
            <h2>Micosis Sistémicas</h2>
            <Link href="https://onedrive.live.com/embed?cid=14BF5B6A7B6AEDEF&amp;resid=14BF5B6A7B6AEDEF%21124&amp;authkey=ABh0wU2WHk3X8dU&amp;em=2&amp;wdAr=1.33203125" width="476px" height="288px">
              <a title='Micosis Sistematica'>
                <Image src='/img/micosis.png' width={335.61} height={188.7} alt='Micosis Sistematica' />
              </a>
            </Link>
          </div>

          <div className={styles.equipo}>
            <h2>Micosis oportunistas...</h2>
            <Link href="https://onedrive.live.com/embed?cid=14BF5B6A7B6AEDEF&amp;resid=14BF5B6A7B6AEDEF%21133&amp;authkey=AJA5C85qhtKxXbo&amp;em=2&amp;wdAr=1.7777777777777777" width="476px" height="288px">
              <a title='Micosis oportunistas y pseudomicosis'>
                <Image src='/img/pseudomicosis.png' width={335.61} height={188.7} alt='Micosis oportunistas y pseudomicosis' />
              </a>
            </Link>
          </div>

          <div className={styles.equipo}>
            <h2>Otras patologías</h2>
            <Link href="https://onedrive.live.com/embed?cid=14BF5B6A7B6AEDEF&amp;resid=14BF5B6A7B6AEDEF%21135&amp;authkey=ADEVT2OqPJFBGHE&amp;em=2&amp;wdAr=1.7777777777777777" width="476px" height="288px">
              <a title='Otras patologías( nicetismo, micotoxicosis)'>
                <Image src='/img/micetismo.webp' width={335.61} height={188.7} alt='Otras patologías( nicetismo, micotoxicosis)' />
              </a>
            </Link>
          </div>
        </div>
        <div>
            <Link href={'/'}>
                <a className='btnprev'>
                    <Image src='/img/izquierda.png' width={100} height={50} alt='boton izquierda' />
                </a>
            </Link>
            <Link href={'/informacion'}>
                <a className='btnnext'>
                    <Image src='/img/derecha.png' width={100} height={50} alt='boton izquierda' />
                </a>
            </Link>
        </div>
      </main>
    </Layout>
  )
}
