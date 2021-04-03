import * as S from './styles'

const Main = () => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="Imagem de um átomo simbolizando o icone do ReactJS com um texto ao lado escrito React Avançado"
    />
    <S.Title>React Avançado</S.Title>
    <S.Description>
      A simple project starter to work with TypeScript, React, NextJS and
      Styled-Components
    </S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="Imagem ilustrativa do mascote do GitHub vestido de um astronauta "
    />
  </S.Wrapper>
)

export default Main
