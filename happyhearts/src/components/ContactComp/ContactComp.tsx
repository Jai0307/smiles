import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import MessageModal from '../MessageModal';
import { validateEmail } from '../../utils/format';

interface Props {

}

const ContactComp: React.FC<Props> = ({}) => {

    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [message, setmessage] = useState('');
    const [modalstate, setmodalstate] = useState(false);
    const [modalheader, setmodalheader] = useState('');
    const [modalmessage, setmodalmessage] = useState('');

  useEffect(() => {

  }, [])

  const openmodal = (header:any, message:any) => {
      setmodalheader(header);
      setmodalmessage(message);
      setmodalstate(true);
  }

  const send = () =>{
      if(name=='')
      {
        openmodal("Error", "Name is required.");
        return;
      }
    if(!validateEmail(email)){
        openmodal("Invalid Email", "Please provide a valid email address");
        return;
    }
    if(message.length<10)
      {
        openmodal("Error", "Message is too short.");
        return;
      }
      // sendEmail(process.env.CONTACT_EMAIL, `user message from ${name}, email: ${email}`, message).then(()=>{
      //     openmodal('Message', 'Your message has been sent!')
      // })
  }

  return (
    <Container>
        <MessageModal header={modalheader} message={modalmessage} state={modalstate} handleClose={()=>{setmodalstate(false)}}/>
    <Row>
      <Column>
      <Header>Contact Us</Header>
      <Input placeholder='name' onChange={(e)=>{setname(e.target.value)}}/>
      <Input placeholder='email' onChange={(e)=>{setemail(e.target.value)}}/>
      <Textarea placeholder='Enter your message' onChange={(e)=>{setmessage(e.target.value)}}/>


        <Button onClick={send}>Send</Button>
      </Column>
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
  color: #ffffff;
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
const Input = styled.input`
  padding: 10px;
  background-color: #eee;
  border: 1px solid black;
  margin: 10px;
  width: 250px;
  border-radius: 3px;
`
const Textarea = styled.textarea`
  padding: 10px;
  background-color: #eee;
  border: 1px solid black;
  margin: 10px;
  width: 250px;
  height: 150px;
  border-radius: 3px;
  max-length: 10;
  font-family: Montserrat, sans-serif;
`

export default ContactComp