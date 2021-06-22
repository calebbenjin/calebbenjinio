import styled from 'styled-components'


export const Button = styled.button`
  background: ${props => props.theme.colors.primaryColor};
  width: 40%;
  border: transparent;
  font-weight: 700;
  color: #fff;
  text-transform: uppercase;
  font-family: ${props => props.theme.fonts.mainFont};
  font-size: 1.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background: #F68239;
  }
`