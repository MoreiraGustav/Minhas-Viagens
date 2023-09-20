import client from '@/graphql/client'
import { GetPageBySlugQuery, GetPagesQuery } from '@/graphql/generated/graphql'
import { GET_PAGES, GET_PAGES_BY_SLUG } from '@/graphql/queries'
import PageTemplate, { PageTemplateProps } from '@/templates/Pages'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'

/* interface Page {
  title: string
  //slug: unknown
}

interface PageProps {
  heading: string
  body: {
    html: string
  }
} */

export default function Page({ heading, body }: PageTemplateProps) {
  const router = useRouter()

  if (router.isFallback) return null
  return <PageTemplate heading={heading} body={body} />
}

export async function getStaticPaths() {
  const { pages }: GetPagesQuery = await client.request(GET_PAGES, {
    first: 3
  })

  const paths = pages.map(({ slug }) => ({
    params: { slug }
  }))

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const { page }: GetPageBySlugQuery = await client.request(
      GET_PAGES_BY_SLUG,
      {
        slug: `${params?.slug}`
      }
    )

    if (!page) return { notFound: true }

    return {
      revalidate: 5,
      props: {
        heading: page.heading,
        body: page.body.html
      }
    }
  } catch (error) {
    console.error('Erro ao buscar páginas:', error)
    return {
      notFound: true
    }
  }
}
//getStaticPaths => serve para gerar as urls em build time  /abouy, /trip/petropolis
//getStaticProps => serve para buscar dados da pagina (props) -build time - estatico
//getServerSideProps  => serve para buscar dados da pagina (props) - runtime - toda requisicao (bundle fica no server)
//getInitialProps => serve para buscar dados da pagina (props) - runtime - toda requisicao (bundle tambem vem para o client)hydrate
