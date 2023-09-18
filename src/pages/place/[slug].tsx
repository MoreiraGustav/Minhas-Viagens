import client from '@/graphql/client'
import {
  GetPlaceBySlugQuery,
  GetPlacesQuery
} from '@/graphql/generated/graphql'
import { GET_PLACES, GET_PLACE_BY_SLUG } from '@/graphql/queries'
import PlacesTemplate, { PlacesTemplateProps } from '@/templates/Places'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'

export default function Place({ place }: PlacesTemplateProps) {
  const router = useRouter()

  if (router.isFallback) return null
  return <PlacesTemplate place={place} />
}

export async function getStaticPaths() {
  const { places }: GetPlacesQuery = await client.request(GET_PLACES, {
    first: 3
  })

  const paths = places.map(({ slug }) => ({
    params: { slug }
  }))

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const { place }: GetPlaceBySlugQuery = await client.request(
      GET_PLACE_BY_SLUG,
      {
        slug: `${params?.slug}`
      }
    )

    if (!place) return { notFound: true }

    return {
      props: {
        place
      }
    }
  } catch (error) {
    console.error('Erro ao buscar páginas:', error)
    return {
      notFound: true
    }
  }
}
