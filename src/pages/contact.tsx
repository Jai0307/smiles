import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components';
import ImageTextComp from 'components/ImageTextComp/';
import ContactComp from 'components/ContactComp';

const Volunteer: NextPage = () => {
  return (
    <MainContainer>
      <Column>
        <Header>Volunteer</Header>
        <Paragraph>Support our efforts in bringing smile to people in our community. If you are a school you can teach your students that even the smallest acts of kindness can have a huge impact on a person's day by participating in our card drive. Their act of kindness can uplift people and bring some more joy into their lives. You can also volunteer to become a Happy Hearts Friend and spend time with a resident in a participating nursing home. </Paragraph>
        <ContactComp />
      </Column>

    </MainContainer>
);
};

const MainContainer = styled.div`
  display: flex;
  min-height: 85vh;
  color: #000000;
  flex-direction: column;
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
const Header = styled.div`
    // padding: 10px;
    font-weight: 700;
    font-size: 40px;
    justify-content: flex-end;
`;

const Paragraph = styled.p`
  font-size: 15px;
  line-height: 2;
  font-weight: 500;
`
export default Volunteer
