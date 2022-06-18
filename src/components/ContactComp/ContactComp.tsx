import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import MessageModal from '../MessageModal';
import InputComp from 'components/Inputcomp';
import TextboxComp from 'components/TextboxComp';
import axios from 'axios';
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

    const body = JSON.stringify({ name: name, email: email, message: message })
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

      axios.post("/api/sendemail", body, config).then((res)=>{
        console.log(`res ${JSON.stringify(res.data)}`);
        openmodal("Message sent", "Your message has been sent.");
        setname('');
        setemail('');
        setmessage('');
      }).catch(error=>{
        console.log(`error ${error}`);
      })
      // sendEmail(process.env.CONTACT_EMAIL, `user message from ${name}, email: ${email}`, message).then(()=>{
      //     openmodal('Message', 'Your message has been sent!')
      // })
  }

  return (
    <>
      <MessageModal header={modalheader} message={modalmessage} state={modalstate} handleClose={()=>{setmodalstate(false)}}/>
      <Column>
        <Header>Contact Us</Header>
        <InputComp placeholder='name' onChange={(e)=>{setname(e.target.value)}} id={`nameid`} value={name}/>
        <InputComp placeholder='email' onChange={(e)=>{setemail(e.target.value)}} id={`emailid`} value={email}/>
        {/* <Textarea placeholder='Enter your message' onChange={(e)=>{setmessage(e.target.value)}}/> */}
        <TextboxComp placeholder='Enter your message' onChange={(e)=>{setmessage(e.target.value)}} id={"tbid"} value={message} cols={25} rows={10}/>
        <Button onClick={send}>Send</Button>
      </Column>
    </>
  )
}


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
  background-color: #9b111e;
  min-width: 75px;
  transition: ease 0.5s;
  color: white;
  &:hover {
    font-weight: 700;
    background-color: #212122;
  }
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
