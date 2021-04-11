import * as S from './styles'

const Main = ({
  title = 'React Boilerplate',
  description = 'A simple project starter to work with TypeScript, React, NextJS and Styled-Components'
}) => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.png"
      alt="Imagem de um átomo simbolizando o icone do ReactJS com um texto ao lado escrito React Avançado"
    />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration
      src="/img/hero-illustration.png"
      alt="Imagem ilustrativa do mascote do GitHub vestido de um astronauta "
    />
  </S.Wrapper>
)

export default Main
