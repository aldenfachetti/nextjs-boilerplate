import styled from 'styled-components'

export const Wrapper = styled.main`
  background-color: #06092b;
  color: #ffffff;
  width: 100%;
  height: 100%;
  padding: 3rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Logo = styled.img`
  position: absolute;
  width: 15rem;
  top: 0;
  margin-top: 9rem;
  margin-bottom: 2rem;
  margin-left: 5rem;

  &:hover {
    transform: scale(2.2);
    transition: transform 0.5s ease-in-out;
  }
`

export const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 2px #000000;
  z-index: 1;

  &:hover {
    color: #ccff33;
  }
`

export const Description = styled.h2`
  font-size: 2rem;
  font-weight: 400;
  text-shadow: 2px 2px 2px #000000;
  z-index: 1;

  &:hover {
    color: #ccff33;
  }
`

export const Illustration = styled.img`
  margin-top: 3rem;
  width: min(50rem, 100%);
  z-index: 1;
`
