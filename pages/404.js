import Link from "next/link"
import Layout from "../components/layout"

export default function Pagina404() {
  return (
    <Layout>
        <p className="error">Pagina no encontrada.</p>
        <Link href='/'>
            <a className="error-enlace">Quizas quieras volver al Inicio.</a>
        </Link>
    </Layout>
  )
}
