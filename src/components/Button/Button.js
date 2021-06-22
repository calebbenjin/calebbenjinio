import styled from 'styled-components'

export default function button({title}) {
  return (
    <Button>
      {title}
    </Button>
  )
}



const Button= styled.button`
  font-size: 1.5rem;
  background: ${props => props.theme.colors.primaryColor};
  color: #fff;
  border: transparent;
  padding: 10px 20px;
`;