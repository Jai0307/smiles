import Image from 'next/image';
import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
interface Props {
    header?: string,
    image?: string,
    text?: string,
    width?: string,
    height?:string,
    left?: boolean,
}

const ImageTextComp: React.FC<Props> = ({header, image, text, width, height, left}) => {

  useEffect(() => {

  }, [])
  return (
    <Container>
    <Row>
      {left?
    <Column>
      {image?
        <Image  src={require(`assets/${image}`)} width={width} height={height} /> 
        :<></>
      }
      </Column>
      :<></>
    }
      <Column>
      <Header>{header}</Header>
        <Paragraph>
            {text}
        </Paragraph>
      </Column>
      {!left?
    <Column>
      {image?
        <Image  src={require(`assets/${image}`)} width={width} height={height}/> 
        :<></>
      }
      </Column>
      :<></>
    }
    </Row>
    </Container>
  )
}


const Container = styled.div`
    margin: 50px 0;
    min-height: 250px;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Column = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
  color: #000000;
  @media (max-width: 770px) {
    padding: 20px 50px;
  }
`;

const Header = styled.div`
    padding: 10px;
    font-weight: 700;
    font-size: 40px;
    justify-content: flex-end;
`;

const Paragraph = styled.p`
  font-size: 15px;
  line-height: 2;
  font-weight: 500;
`
const Button = styled.div`
  margin: 5px;
  display: flex;
  justify-content: center;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
  text-transform: uppercase;
  padding: 10px;
  font-weight: 700;
  border-radius: 3px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.25);
  background-color: #4D2FA2;
  min-width: 75px;
  transition: ease 0.5s;
  &:hover {
    font-weight: 700;
    background-color: #212122;
  }
`
const ButtonDiv = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;


export default ImageTextComp
