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
        <Paragraph>Support our efforts in bringing smile to people in our community. You can volunteer to spend time with a resident in a participating nursing home. If you are a school you can exite your students to make seasonal cards which we will collect and hand out to residents in nursing homes. </Paragraph>
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
