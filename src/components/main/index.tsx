import * as S from './styles'

const Main = () => (
  <S.Wrapper>
    <S.logo
      src="/img/logo.svg"
      alt="imagem de um atomo e react avançado escrito ao lado"
    ></S.logo>
    <S.tittle>React Avançado</S.tittle>
    <S.description>
      TypeScript, ReactJS, NextJS e Styled Components
    </S.description>
    <S.illustration
      src="/img/hero-illustration.svg"
      alt="um desenvolvedor de frente para uma tela com codigos"
    ></S.illustration>
  </S.Wrapper>
)

export default Main
