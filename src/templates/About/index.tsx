import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'

import LinkWrapper from '@/components/LinkWrapper'

import * as S from './style'

const AboutTemplate = () => (
  <S.Content>
    <LinkWrapper href="/">
      <CloseOutline size={32} />
    </LinkWrapper>

    <S.Heading>Minhas Viagens</S.Heading>

    <S.Body>
      {' '}
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
        laborum consequatur eum. Ab accusantium atque debitis reprehenderit
        fugit? Aliquid rerum impedit eligendi facere tempore sequi doloribus
        voluptas aut quo at?{' '}
      </p>
    </S.Body>
  </S.Content>
)

export default AboutTemplate
