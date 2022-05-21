import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components';
import ImageTextComp from 'components/ImageTextComp/';

const Team: NextPage = () => {
  return (
    <MainContainer>
      <Column>
        <ImageTextComp header='Jai Singh' text='Jai is a senior at Plano West Senior High'/>
        <ImageTextComp header='Jazmine Singh' text='Jazmine is a junior at Plano Senior High'/>
      </Column>
    </MainContainer>
);
};

const MainContainer = styled.div`
display: flex;
min-height: 85vh;
color: #000000;
@media (max-width: 770px) {
flex-direction: column;
}
`

const Row = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
`

const Column = styled.div`
padding: 50px;
display: flex;
flex-direction: column;
flex: 1;
color: #000000;
@media (max-width: 770px) {
padding: 20px 50px;
}
`
const Header = styled.h3`
color: #000000;
`;

export default Team
