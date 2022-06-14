import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components';
import ImageTextComp from 'components/ImageTextComp/';
import TopImage from "assets/temp1.jpg";
import CardImage from "assets/temp1.jpg";
import FriendsImage from "assets/temp1.jpg";

const Home: NextPage = () => {
  return (
    <MainContainer>
      {/* <Image src={TopImage} height={"150vh"}/> */}
      <Row>
      <Column>
        <ImageTextComp header='Our Story' text={`Happy Hearts was founded by Jai Singh and Jazmine Singh as a tribute to their uncle who currently lives in long term care facility in Plano. During their visits to see their uncle, they quickly realized very few residents got visits from their family members and many of them had lost connection to the outside world which they greatly desire. They wanted to find a way of give the residents a sense that people care for them. They decided on making and delivering cards to the residents to uplift their spirits. To start off,  they, along with their cousin,  made and delivered over 70 cards to the facility. Soon after that they started contacting elementary schools and day care centers to participate in the Happy Hearts card drive. Since the launch of Happy Hearts over 150 cards have been delivered to the residents of the nursing home in Plano.`} image='temp1.jpg' width='500px' height={"500px"}/>
        
        <ImageTextComp header='Happy Hearts Card Drive' text={`The residents of the nursing home are members of our community. They are somebody’s grandparents, aunts and uncles, and their families cannot always be with them.  Our card drive is an opportunity for children and young adults to show empathy toward some of our most vulnerable members in our society. It can teach kids that even the smallest acts of kindness can have a huge impact on a person's day.  Your act of kindness can uplift them and bring some more joy into their lives. Something as simple as sending them a card lets them know someone out there cares about them. With the help of participating organizations we are delivering cards to residents in nursing homes in Plano. If your organization wishes to participate in Happy Hearts card drive please visit the contact us page.`} image='temp1.jpg' width='500px' height={"500px"} left={true}/>

        <ImageTextComp header='Happy Hearts Friends' text={`In person volunteering is the next step if you are wanting to take your volunteering to the next level. Our volunteers spend one on one time with residents in nursing homes talking to them and giving them a sense of friendship that they might lack. If you are interested in becoming a Happy Hearts friend please contact us!`} image='temp1.jpg'/>


      </Column>
      </Row>
    </MainContainer>
);
};

const MainContainer = styled.div`
  display: flex;
  min-height: 85vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
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
const Header = styled.div`
    font-weight: 700;
    font-size: 40px;
    justify-content: flex-end;
`;
const Paragraph = styled.p`
  font-size: 15px;
  line-height: 2;
  font-weight: 300;
`
const Link = styled.a`
  color: #e1a6a6;
`;

export default Home
