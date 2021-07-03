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
  font-size: 1.5rem;
  margin-bottom: 0.6rem;
  font-family: ${props => props.theme.fonts.mainFont};
  text-transform: uppercase;
`;


const Title = styled.h1`
  font-size: 2.5rem;
  margin: 0;
  color: #fff;
  letter-spacing: 1.5px;
  line-height: 1.3;
  margin-bottom: 3rem;
  font-family: ${props => props.theme.fonts.heading}
`;
