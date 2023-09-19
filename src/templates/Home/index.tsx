import { NextSeo } from 'next-seo'

import dynamic from 'next/dynamic'

import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline'

import LinkWrapper from '@/components/LinkWrapper'
import { MapProps } from '@/components/Map'

const Map = dynamic(() => import('@/components/Map'), { ssr: false })

export default function HomeTemplate({ places }: MapProps) {
  return (
    <>
      <NextSeo
        title="Minhas Viagens"
        description="Um Projeto com intuito de mostrar lugars que eu quero conhecer."
        canonical="https://minhas-viagens.moreiragustav.com.br"
        openGraph={{
          url: 'https://minhas-viagens.moreiragustav.com.br',
          title: 'Minhas Viagens',
          description:
            'Um Projeto com intuito de mostrar lugares que eu quero conhecer.',
          images: [
            {
              url: 'https://minhas-viagens.moreiragustav.com.br/img/cover.png',
              width: 1280,
              height: 720,
              alt: 'Minhas Viagens'
            }
          ],
          site_name: 'Minhas Viagens'
        }}
      />
      <LinkWrapper href="/about">
        <InfoOutline size={32} aria-label="About" />
      </LinkWrapper>
      <Map places={places} />
    </>
  )
}
