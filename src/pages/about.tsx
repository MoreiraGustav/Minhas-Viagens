import client from '@/graphql/client'
import { GET_PAGES } from '@/graphql/queries'
import AboutTemplate from '@/templates/About'

interface Page {
  // Defina a estrutura das páginas de acordo com o que é retornado pela consulta
  // Esta estrutura deve corresponder à estrutura real dos dados retornados pela consulta GET_PAGES
  // Por exemplo, se a resposta contém um campo 'pages' com um array de páginas, você pode defini-lo assim:
  title: string
  // Adicione outras propriedades relevantes aqui
}

export default function AboutPage() {
  return <AboutTemplate />
}

export const getStaticProps = async () => {
  try {
    const { pages }: { pages: Page[] } = await client.request(GET_PAGES)

    console.log(pages)
    return {
      props: {}
    }
  } catch (error) {
    console.error('Erro ao buscar páginas:', error)
  }

  return {
    props: {}
  }
}
//getStaticPaths => serve para gerar as urls em build time  /abouy, /trip/petropolis
//getStaticProps => serve para buscar dados da pagina (props) -build time - estatico
//getServerSideProps  => serve para buscar dados da pagina (props) - runtime - toda requisicao (bundle fica no server)
//getInitialProps => serve para buscar dados da pagina (props) - runtime - toda requisicao (bundle tambem vem para o client)hydrate
