import { useState } from "react"
import Link from "next/link"
import Image from "next/future/image"
import Layout from "../components/layout"
import styles from "../styles/informacion.module.css"



export default function Informacion() {
    const [cambio, setCambio] = useState(true);
    const [cambio2, setCambio2] = useState(true);
    const [cambio3, setCambio3] = useState(true);
    const [cambio4, setCambio4] = useState(true);
    const [cambio5, setCambio5] = useState(true);
    const [cambio6, setCambio6] = useState(true);



    return (
      <Layout
        title={"Información Extra"}
        description={"Informacion extra de quimica"}
      >
        <main >

          <h1 className={styles.avicii}>Información temarios</h1>
          <div >
            <div className={styles.info}>
              <div className={styles.encabezado}>Unidad 1</div>
              <Image title="Pito de perro, velo de novia, Dictyophora indusiata. Hongo afrodisiaco" className={styles.imagen} src="/img/u1.png" width={1920} height={300} alt="Imagen hongos" />
              <p className={styles.titulo}>Los hongos macroscópicos</p>
              <p className={styles.subtitulo}>¿Qué son, cómo viven y cómo se reproducen?</p>
              <p id="container" className={cambio ? styles.modify : ""}>
                Los hongos no son plantas ni animales, son hongos y hasta tienen su propio reino: el reino Fungi; es uno de los grupos de eucariotes (organismos que presentan células con núcleo bien definido y delimitado por una membrana) más diverso de los seres vivos, y ocupan el segundo lugar después de los insectos. Pueden ser unicelulares, como las levaduras, filamentosos, como los mohos, o los que encontramos en el campo; estos dos últimos están conformados por hifas (células filamentosas que en conjunto forman un micelio, siendo éste el verdadero hongo). La pared de las células está conformada principalmente de quitina, lo que los hace más cercanos a los animales; tienen ergosterol, a diferencia de los animales, que presentan colesterol.<br />

                Estos organismos son heterótrofos y se alimentan por absorción; su reproducción es por medio de esporas, las cuales pueden ser asexuales, como los conidios, y sexuales, como las ascosporas y basidiosporas; aunque también se pueden reproducir por medio de otros propágulos, como esclerocios, rizomorfos, etc., que cuando se presentan las condiciones adecuadas empiezan a formar micelio nuevamente.<br /><br />
                La rama de la ciencia encargada del estudio de los hongos es la micología (del griego mýkes = hongo + lógos {">"} logía = tratado). La palabra hongo deriva del latín: fungus, sfungus y del griego: spóngos, sphóngos = esponja, en alusión a la consistencia carnosa-esponjosa de algunos hongos del género Boletus, conocidos comúnmente como pancitas o pambazos. El término setas se usa en general para los esporomas de los macromicetos agaricoides, principalmente de los comestibles, aunque también quedan comprendidas aquí las especies venenosas y psicotrópicas (Ulloa y Hanlin, 2006).<br />
                <div className={styles.flex}>
                  <p >
                    Respecto a la diversidad de macromicetos, se han hecho varias estimaciones a nivel mundial y la variación depende de los parámetros que se han utilizado, ya que hay autores, como Müeller et al. (2007), que mencionan que debe haber entre 53 000 y 110 000 especies, de las cuales se han descrito cerca de 22 000. En México, Guzmán (1998) cree que debe haber más de 200 000 especies, aunque se conocen alrededor de 4 500, e indica que la diversidad es mayor en los bosques tropicales y subtropicales que en los bosques de encinos y coníferas de zonas templadas, y menor en las zonas áridas. Sin embargo, Aguirre- Acosta et al. (2014) mencionan que el conocimiento de la diversidad de los hongos en nuestro país es aún incipiente y las cifras que han mencionado otros autores no reflejan con exactitud el número real de especies que se conocen.
                  </p>
                  <Image title="Hongo de repisa, Phelinus sp. Reserva de la Biósfera Tehuacán-Cuicatlán, Oaxaca." className={styles.chiquita} src="/img/u11.png" width={1920} height={300} alt="Imagen hongos" />
                </div>
              </p>
              <button id="bnt1" className={cambio ? "" : styles.active} onClick={() => cambio ? setCambio(false) : setCambio(true)}>Ver más información</button>
              <button className={cambio ? styles.active : ""} onClick={() => cambio ? setCambio(false) : setCambio(true)}>Ocultar Información</button>
            </div>


            <div className={styles.info}>
              <div className={styles.encabezado}>Unidad 2</div>
              <p className={styles.titulo}>Antimicóticos</p>
              <p className={styles.subtitulo}>¿Qué son los medicamentos antimicóticos y para qué sirven?</p>
              <p className={cambio2 ? styles.modify : ""}>
                <Image title="Imagen Ilustrativa" className={styles.imagen} src="/img/u2.jpg" width={1920} height={300} alt="Imagen antimicoticos" />
                Los medicamentos antimicóticos ayudan a destruir o inhibir el crecimiento de los hongos que producen infecciones, debido a las sustancias que contienen. Sigue leyendo y conoce más acerca de sus usos.<br />
                Los medicamentos antimicóticos sirven para combatir los hongos o las infecciones más comunes causadas por estos, por lo cual representan la mejor solución contra tal tipo de patologías.<br />
                A pesar de que su uso se ha extendido en los últimos años, muchas personas desconocen la importancia de los mismos, así como su composición, cómo se clasifican, por cuánto tiempo se deben utilizar.<br />
                Es importante tener en cuenta que no todos los tipos de hongos son malos para el organismo. De hecho, la actividad de algunos de ellos puede resultarnos beneficiosa. Por eso, entre otras cosas, se debe ser precavido con el uso de los tratamientos antimicóticos, ya que pueden ser agresivos al afectar también a estos microorganismos útiles.
                <span className={styles.subtitulos}>Medicamentos antimicóticos hoy en día</span><br />
                Diversas alternativas han mejorado las fórmulas de estos fármacos y, en la actualidad, muchos de sus efectos secundarios se han reducido. No obstante, su uso debe ser moderado y esporádico, ya que aunque consiguen aliviar los síntomas, resultan contraproducentes si se utilizan en exceso.<br />
                Es cierto que algunos de estos compuestos se encuentran en productos de venta libre. Se pueden adquirir en diferentes fórmulas y presentaciones, en función del tipo de problema a tratar. No obstante, estos medicamentos solo se deben administrar bajo prescripción y supervisión médica.<br />
                <span className={styles.titulo}>¿Cómo funcionan los medicamentos antimicóticos?</span><br />
                Como se mencionó, el principal objetivo de los fármacos antimicóticos es destruir o detener las infecciones que se producen por la proliferación de hongos. Estos medicamentos tienen la función de reparar las áreas atacadas por tales microorganismos.<br />
                Sus componentes apoyan el proceso de regeneración celular del organismo y, de este modo, disminuyen los síntomas vinculados a la infección. En función del fármaco que se requiera, el proceso de acción puede ser distinto:<br />
                ◻   Por ejemplo, el clotrimazol es uno de los antimicóticos más utilizados. Este componente ataca de forma directa el foco de infección. Su uso hace que se formen unos pequeños poros en las células fúngicas.<br /><br />
                ◻   Otro antimicótico destacado es la flucitosina. Este se utiliza para las infecciones más graves y sistémicas. Su objetivo es evitar que las células fúngicas continúen creciendo o multiplicándose.<br /><br />
                <span className={styles.subtitulo}>¿Para qué sirven los fármacos antimicóticos?</span>
                <div className={styles.flex}>
                  <p>La mayoría de los fármacos antimicóticos se aplican de forma tópica para aliviar infecciones de hongos en la piel. Sin embargo, también hay algunas variedades que se usan de forma oral o por vía intravenosa.<br />
                    El objetivo de estos es combatir problemas más graves como pueden ser las infecciones sistémicas. A continuación repasaremos en detalle las principales presentaciones y las enfermedades que se suelen combatir con cada una de ellas.<br />
                    Se utilizan, en su mayoría, para tratar las infecciones micóticas en la piel. Por ejemplo, la tiña de uña, el pie de atleta o el crecimiento de hongos del cuero cabelludo.<br />
                  </p>
                  <Image className={styles.chiquita} src="/img/u22.webp" width={1920} height={300} alt="Imagen antimicoticos" />

                </div>
              </p>
              <button id="btn2" className={cambio2 ? "" : styles.active} onClick={() => cambio2 ? setCambio2(false) : setCambio2(true)}>Ver más información</button>
              <button className={cambio2 ? styles.active : ""} onClick={() => cambio2 ? setCambio2(false) : setCambio2(true)}>Ocultar Información</button>
            </div>



            <div className={styles.info}>
              <div className={styles.encabezado}>Unidad 3</div>
              <p className={styles.titulo}>Micosis superficiales y micosis subcutáneas</p>
              <Image title="Forma Cutáneo fija" className={styles.imagen} src="/img/u3.jpg" width={1920} height={300} alt="Imagen micosis" />
              <p className={cambio3 ? styles.modify : ""}>
                Las micosis son afecciones cutáneas consecuencia de la parasitación por "hongos"; estos son vegetales que no efectúan el fenómeno de la fotosíntesis.<br />
                Forman parte del grupo de las enfermedades más frecuentes que afectan al hombre e incluso se puede afirmar que prácticamente todos los hombres a lo largo de su vida la padecerán alguna vez.<br />
                Existen tres tipos de micosis humanas superficiales, intermedias como las candidiasis y profundas. Las habituales en España son las superficiales y las candidiasis.<br />
                El pronóstico es bueno y curan con tratamiento. Es importante recordar que mientras se sigan manteniendo las circunstancias favorecedoras es probable una nueva infección.<br />
                Además es importante saber que aunque no son enfermedades muy contagiosas se pueden trasmitir por contacto directo con familiares o indirecto con escamas o pelos o a través de peines, cepillos, sombreros o toallas.<br />
                <span className={styles.subtitulo}>¿Cuáles son los síntomas de las micosis?</span><br /><br />
                Los síntomas dependen de la localización, la cual su vez determina la clasificación de estas micosis.<br />
                ◻  Tinea capitis.<br />
                ◻  Tinea barbae.<br />
                ◻  Tinea corporis.<br />
                ◻  Tinea cruris.<br />
                ◻  Tinea pedis.<br />
                ◻  Tinea manum<br />
                ◻  Onicomicosis o tinea ungium<br /><br /><br />
                Los síntomas más habituales son:<br />
                ◻  Placas escamosas en los cabellos.<br />
                ◻  Placas bilaterales de coloración eritemato-marronácea con finas escamas.<br />
                ◻  Descamación en espacios interdigitales.<br />
              </p>
              <button className={cambio3 ? "" : styles.active} onClick={() => cambio3 ? setCambio3(false) : setCambio3(true)}>Ver más información</button>
              <button className={cambio3 ? styles.active : ""} onClick={() => cambio3 ? setCambio3(false) : setCambio3(true)}>Ocultar Información</button>
            </div>

            <div className={styles.info}>
              <div className={styles.encabezado}>Unidad 4</div>
              <p className={styles.titulo}>Micosis sistémicas </p>
              <Image title="Dermosifilio" className={styles.imagen} src="/img/micosis.png" width={1920} height={300} alt="Imagen micosis" />
              <p className={cambio4 ? styles.modify : ""}>
                Las micosis sistémicas son infecciones fúngicas cuya puerta de entrada es un órgano o sitio profundo, como pulmón, tubo digestivo o senos paranasales. Tienen la capacidad de diseminarse en forma hematógena para producir una infección generalizada, frecuentemente con afección cutánea secundaria. Existen 2 variedades de micosis sistémicas: las micosis oportunistas (candidiasis sistémica, aspergilosis y mucormicosis sistémica) y las respiratorias endémicas (histoplasmosis, blastomicosis, coccidioidomicosis, paracoccidioidomicosis y criptococosis); en la práctica, debido a la tendencia de ambos grupos a desarrollarse en pacientes predispuestos, es difícil distinguir entre ambas y tienden a estudiarse en conjunto.<br />
                En esta segunda parte revisamos las micosis profundas más comunes que producen manifestaciones cutáneas dentro del curso de la enfermedad.<br />
                En esta segunda parte revisamos las micosis profundas más comunes que producen manifestaciones cutáneas dentro del curso de la enfermedad.<br />
                <span className={styles.subtitulo}>Mucormicosis</span><br /><br />
                Tiene localización visceral debido a la inmunosupresión del huésped1,2. Causada por zigomicetos mucorales, puede provocar mucormicosis rinocerebral, cutánea, pulmonar y diseminada. La variedad más frecuente es la rinocerebral, que se caracteriza por afección a los senos nasales, úlceras palatinas y extensas lesiones necróticas cerebrales y cutáneas. La mayoría de casos se asocian a diabetes mellitus descompensada y a estados de neutropenia.<br /><br />
                <span className={styles.subtitulo}>Clínica</span><br />
                <div className={styles.flex}>
                  <p>
                    Habitualmente tiene un curso agudo, rápidamente progresivo, con alta letalidad. Las infecciones rinocerebrales son las más frecuentes, seguidas de las pulmonares, intestinales, cutáneas y diseminadas3. Las manifestaciones primarias cutáneas son extremadamente raras y ocurren principalmente en sitios de venopunción, por lo que son más frecuentes en las extremidades. Se manifiestan como pápulas o nódulos que luego se ulceran, con centro necrótico, exudado pútrido o maloliente. Puede comprometer tejidos profundos (muscular-óseo) localmente, siendo altamente destructivas3. Las manifestaciones mucocutáneas secundarias a una mucormicosis rinocerebral son mucho más frecuentes, de forma que el 25% de los pacientes cursan con úlceras palatinas y fístulas palpebrales extremadamente dolorosas.
                  </p>
                  <Image className={styles.chiquita} src="/img/u4.jpeg" width={1920} height={300} alt="Imagen micosis sistemicas" />
                </div>
              </p>
              <button className={cambio4 ? "" : styles.active} onClick={() => cambio4 ? setCambio4(false) : setCambio4(true)}>Ver más información</button>
              <button className={cambio4 ? styles.active : ""} onClick={() => cambio4 ? setCambio4(false) : setCambio4(true)}>Ocultar Información</button>
            </div>



            <div className={styles.info}>
              <div className={styles.encabezado}>Unidad 5</div>
              <p className={styles.titulo}>Micosis oportunistas y pseudomicosis</p>
              <Image title="Pseudomicosis por oportunistas: desconocimiento y retos diagnósticos" className={styles.imagen} src="/img/pseudomicosis.png" width={1920} height={300} alt="Imagen micosis oportunistas y pseudomicosis" />
              <p className={cambio5 ? styles.modify : ""}>
                Las oportunistas son las que aparecen principalmente en huéspedes inmunocomprometidos.
                Pueden desarrollarse infecciones primarias en huéspedes inmunocompetentes.
                <span className={styles.subtitulo}>Micosis oportunistas</span><br />
                Muchos hongos son oportunistas y no producen infecciones salvo que penetren en un individuo inmunodeficiente. Las causas del inmunocompromiso abarcan síndrome de inmunodeficiencia adquirida (sida), uremia, diabetes mellitus, linfoma, leucemia, otros cánceres hematológicos, quemaduras y tratamientos con corticoides, inmunosupresores o antimetabolitos. Los pacientes internados durante numerosos días en una unidad de cuidados intensivos pueden infectarse a través de procedimientos médicos, debido a enfermedades subyacentes y/o desnutrición.<br /><br />
                Las micosis oportunistas sistémicas típicas son las siguientes<br />
                ◻Candidiasis<br />
                ◻Aspergilosis<br />
                ◻Mucormicosis (cigomicosis)<br />
                ◻Fusariosis<br /><br />
                Las micosis sistémicas que afectan a pacientes inmunodeficientes suelen producir manifestaciones agudas como neumonía progresiva, fungemia o signos y síntomas de diseminación extrapulmonar.<br /><br />
                <span className={styles.subtitulo}>Micosis primarias</span><br /><br />
                Las micosis primarias suelen ser el resultado de la inhalación de esporas, que pueden causar una neumonía localizada como manifestación principal de la infección.<br />
                En los pacientes inmunocompetentes, las micosis sistémicas típicas evolucionan crónicamente y las micosis diseminadas con neumonía y septicemia son infrecuentes; en caso de aparecer lesiones pulmonares, suelen avanzar con lentitud. En general, los pacientes tardan varios meses en consultar, lo que retrasa el diagnóstico. En estas micosis crónicas, los síntomas rara vez son intensos, pero los pacientes también pueden presentar fiebre, escalofríos, sudoración nocturna, anorexia, pérdida de peso, malestar general y depresión. Pueden comprometerse varios órganos, lo que provoca diversos síntomas y disfunciones.<br /><br />
                Las micosis primarias pueden presentar una distribución geográfica característica, sobre todo en las micosis endémicas causadas por algunos hongos dimorfos. Por ejemplo:<br /><br />
                Coccidioidomicosis: limitada principalmente al sudoeste de los Estados Unidos, Washington, norte de México y América Central y del Sur
                Histoplasmosis: aparece principalmente en el este y el medio oeste de los Estados Unidos y en partes de SUdamérica, África, Asia y Australia<br/>
                Blastomicosis: limitada a América del Norte y África<br/>
                Paracoccidioidomicosis (en el pasado se denominaba blastomicosis sudamericana): limitada a ese subcontinente.<br/>
                No obstante, los viajeros pueden manifestar la enfermedad en cualquier momento después de regresar de un área endémica.
              </p>
              <button className={cambio5 ? "" : styles.active} onClick={() => cambio5 ? setCambio5(false) : setCambio5(true)}>Ver más información</button>
              <button className={cambio5 ? styles.active : ""} onClick={() => cambio5 ? setCambio5(false) : setCambio5(true)}>Ocultar Información</button>
            </div>



            <div className={styles.info}>
              <div className={styles.encabezado}>Unidad 6</div>
              <p className={styles.titulo}>Otras patologías (micetismo, micotoxicosis)</p>
              <Image title="Amanita muscaria" className={styles.imagen} src="/img/u6.png" width={1920} height={300} alt="Amanita muscaria" />
              <p className={cambio6 ? styles.modify : ""}>
              Las micotoxicosis son las enfermedades causadas por la ingestión de alimentos contaminados con toxinas fúngicas. Dentro de estas, se podrían incluir los micetismos, enfermedades causadas por la ingestión de setas venenosas. Las alergias a los hongos son frecuentes y están relacionadas con la sensibilización a diferentes antígenos fúngicos. Estas alergias pueden manifestarse como cuadros relativamente leves de conjuntivitis y rinitis alérgicas pero también pueden ser causa de crisis pseudoasmáticas graves. Más adelante, dedicaremos una próxima entrada a las micosis que son las enfermedades infecciosas causadas por los hongos, que después de una colonización de las superficies cutáneas y mucosas en ocasiones pueden producir una invasión ulterior de los tejidos superficiales (micosis superficiales) o profundos (micosis profundas).<br/><br/>
              La afición por la micología se podría definir como el interés social cada vez mayor por el conocimiento, búsqueda y captura de especies de hongos de interés gastronómico. El protagonismo de estos hongos en la historia del crimen es llamativo aunque poco abundante. Algunas setas tóxicas del género Amanita, como Amanita phaloides con sus potentes toxinas, denominadas faloidinas, se han empleado para eliminar a líderes. Al emperador romano Claudio le sentó fatal la cena demasiado aderezada de setas venenosas que al parecer le preparó su esposa Agripina (madre de Nerón, por cierto). <br/><br/>
              <div className={styles.flex}>
                <p>Sin embargo, las intoxicaciones causadas por la ingestión de setas, o micetismos, son relativamente frecuentes y cada año fallecen personas que consumen hongos venenosos al confundirlos con otros de valor gastronómico. El consumo de Amanita muscaria puede provocar diferentes grados de toxicidad, desde efectos psicotrópicos cuando se ingiere en pequeñas cantidades hasta la muerte si se consume en grandes cantidades.<br/>
                Claviceps purpurea puede parasitar a las gramíneas, como el centeno y el trigo, y causar el cornezuelo o ergot del centeno. Este hongo produce alcaloides, como la ergotamina, la ergocristina, la ergocriptina y la ergometrina, y el consumo de pan de centeno contaminado por este hongo puede ser causa de ergotismo, debido a las propiedades vasoconstrictoras de la ergotamina, o provocar efectos psicotrópicos parecidos a los de la dietilamida del ácido lisérgico (LSD). El ergotismo, también llamado «fuego de San Antonio», diezmó la población europea durante la Edad Media. Esta enfermedad era considerada un castigo divino y podría ser el origen, como medio de expiación, del peregrinaje por los diferentes Caminos de Santiago.</p>
                <Image title="Amanita phaloides" className={styles.chiquita} src="/img/u62.png" width={1920} height={300} alt="Amanita phaloides" />
              </div>
              <div className={styles.flex}>
                <p>Otras toxinas importantes que se producen en los alimentos contaminados por hongos son las aflatoxinas (Aspergillus flavus), con efectos hepatotóxicos y carcinógenos, y los tricotecenos (Fusarium, Trichoderma, Stachybotrys, etc.), que son inhibidores de la síntesis de proteínas, con efectos citotóxicos y de necrosis.<br/>
                Los tricotecenos fueron la causa de la muerte por aleucia tóxica de millares de personas en áreas de gran producción de cereales de la antigua Unión de Repúblicas Socialistas Soviéticas (URSS) tras el consumo de alimentos contaminados con estos géneros fúngicos. Además, los tricotecenos tienen un alto potencial para ser utilizados como armas biológicas por su fácil producción, porque no necesitan activación metabólica y por su rápida absorción por contacto con la piel, inhalación o ingestión. Hay sospechas fundadas de que la toxina T2, un tricoteceno, se ha utilizado ilegalmente y ha causado miles de muertes en Afganistán, Camboya, Laos y Vietnam.</p>
                <Image title="Cornezuelo del centeno" className={styles.chiquita} src="/img/u63.png" width={1920} height={300} alt="Cornezuelo del centeno" />
              </div>
              </p>
              <button className={cambio6 ? "" : styles.active} onClick={() => cambio6 ? setCambio6(false) : setCambio6(true)}>Ver más información</button>
              <button className={cambio6 ? styles.active : ""} onClick={() => cambio6 ? setCambio6(false) : setCambio6(true)}>Ocultar Información</button>
            </div>
          </div>


        </main>




        <div>
          <Link href={"/temario"}>
            <a className="btnprev">
              <Image src="/img/izquierda.png" width={100} height={50} alt="boton izquierda" />
            </a>
          </Link>
          <Link href={"/nosotros"}>
            <a className="btnnext">
              <Image src="/img/derecha.png" width={100} height={50} alt="boton izquierda" />
            </a>
          </Link>
        </div>

      </Layout>
    )
  
}
