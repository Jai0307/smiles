import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styled from 'styled-components';
import ImageTextComp from 'components/ImageTextComp/';

const Team: NextPage = () => {
  return (
    <MainContainer>
      <Column>
        <ImageTextComp header='Jai Singh' text='A rising senior at Plano West Senior High, Jai has a passion for STEM and has competed in math and other stem competitions since his days in elementary school. He has received several awards for his achievements in math competitions. He is also a proficient coder in C, C++, JAVA and Python. Currently he works as a instructor at Mathnasium, Plano. He has designed websites and developed a web application for anyone to easily monitor their ailments and its triggers. In Chicago he volunteered at a local food pantry during his spare time.'  image='jai.jpg' width={"300px"} height={"400px"} left={true}/>

        <ImageTextComp header='Jazmine Singh' text='Jazmine Singh is a rising junior at Plano Senior High School. Jazmine started volunteering through the local food bank in Chicago beginning in 2015. She continued with volunteering and fundraising through creating a charity based newsletter for her school which raised over $300 for a local children’s hospital.  She was a captain of Jasper High School debate team and likes to participate in debate competitions for which she has received several awards. She is proficient at the piano and several musical instruments. She is an ardent reader and her current favorite book is "Today Tonight Tomorrow" by Rachel Lynn Solomon.' image='jazmine.jpg' width={"300px"} height={"350px"}  left={true}/>


        <ImageTextComp header= 'Keera Schrandt' text= 'Keera is a rising junior at Plano West Hish School. Serving her community is one of her passions, as she also serves as Grand Fidelity in another service-based organization, the International Order of Rainbow for Girls. IORG focuses on being of service to the community, such as raising over $80,000 for the Texas Scottish Rite Children\’s Hospital, as well as providing a loving community that teaches girls about the importance of leadership and kindness. In addition, she enjoys reading, theater, and spending time with her pets.' image='keera.jpg' width={"300px"} height={"450px"}  left={true}/>

        <ImageTextComp header= 'Tarun Sankar' text= 'Tarun is a rising senior at Plano West High School, and is highly involved with STEM activities. Tarun shares a love for helping others through volunteer work and projects, mostly revolving around his soft spots for kids and pets. He is an Eagle Scout and is currently employed as an instructor at Mathnasium in Plano, TX. On top of this he is proficient in web-design in HTML, CSS and languages such as Python, PHP, and Java.' image='tarun.jpg' width={"300px"} height={"325px"}  left={true}/>

        <ImageTextComp header= 'Guy Peters' text= 'Guy Peters is a Nigerian American who immigrated to the United States in 2016. He always had potential from the moment he was born, so He and his family moved to the United States to strengthen that potential. He excelled all throughout middle school and high school and is now and upcoming senior at Plano West Senior High School. He has worked at a number of retail jobs as a Sales Advisor and Solutions Associate.' image='guyp.jpeg' width={"300px"} height={"400px"}  left={true}/>

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
