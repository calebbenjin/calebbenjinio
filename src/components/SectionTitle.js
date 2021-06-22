import styled from 'styled-components'

export default function SectionTitle({title, sub}) {
  return (
    <div>
      <SubTitle>{sub}</SubTitle>
      <Title>{title}</Title>
    </div>
  )
}


const SubTitle = styled.h4`
  color: ${props => props.theme.colors.primaryColor};
  letter-spacing: 2px;
  font-size: 1.2rem;
  margin-bottom: 0.6rem;
  font-family: ${props => props.theme.fonts.mainFont}
`;


const Title = styled.h1`
  font-size: 3rem;
  margin: 0;
  color: #fff;
  letter-spacing: 1px;
  margin-bottom: 2rem;
`;
