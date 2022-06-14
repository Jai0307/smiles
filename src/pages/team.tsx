import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components';
import ImageTextComp from 'components/ImageTextComp/';

const Team: NextPage = () => {
  return (
    <MainContainer>
      <Column>
        <ImageTextComp header='Jai Singh' text='Jai is a rising senior at Plano West Senior High. Jai has a passion for STEM and has competed in math and other stem competitions since his days in elementary school. He has received several awards for his achievements in math competitions. He is also a proficient coder in C++, JAVA and Python. He works as a tutor at Mathnasium, Plano. He has worked on website design and developed a web application for anyone to easily monitor their ailments and triggers.'  image='jai.jpg' width={"300px"} height={"350px"} left={true}/>

        <ImageTextComp header='Jazmine Singh' text='Jazmine Singh is a rising junior at Plano Senior High School. Jazmine started volunteering through the local food bank in Chicago beginning in 2015. She continued with volunteering and fundraising through creating a charity based newsletter for her school which raised over $300 for a local children’s hospital.  She was a captain of Jasper High School debate team and likes to participate in debate competitions for which she has received several awards. She is proficient at the piano and several musical instruments. She is an ardent reader and her current favorite book is "Today Tonight Tomorrow" by Rachel Lynn Solomon.' image='jazmine.jpg' width={"300px"} height={"350px"}  left={true}/>
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
