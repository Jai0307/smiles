import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components';
import ImageTextComp from 'components/ImageTextComp/';
import TopImage from "assets/temp1.jpg";

const Home: NextPage = () => {
  return (
    <MainContainer>
      <TopRow style={{backgroundImage: `url(${TopImage})`}}>
        <img src={"/src/assets/temp1.jpg"} />
      </TopRow>
      <Row>
      <Column>
        <ImageTextComp header='Volunteering' text='Through volunteering efforts wegctfcvtfcvft want to bring moments of joy to the most vurnerable in our society....' image='temp1.jpg'/>
      </Column>
      </Row>
    </MainContainer>
);
};

const MainContainer = styled.div`
  display: flex;
  min-height: 85vh;
  flex-direction: column;
`

const Row = styled.div`
  display: flex;
  justify-content: center;
`
const TopRow = styled.div`
  display: flex;
  justify-content: center;
  // height: 10vh;
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

export default Home
