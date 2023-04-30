import styled from 'styled-components'

export const BoardMain = styled.main`
  width: 100vw;
  height: 100vh;
  background-color: #1D1D1D;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`
export const Header = styled.h1`
  position: fixed;
  top: 0;
  font-family: PressStart2P, cursive;
  color: white;
`
export const Ul = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: min(80%, 400px);
  display: grid;
  grid-template-columns: repeat(4, minmax(70px, 1fr));
  justify-items: center;
`
export const Section = styled.section`
  display: flex;
  gap: 20px;
  font-family: PressStart2P, cursive;
  font-size: 12px;
  color: white;
`