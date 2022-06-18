import React, { FC, useEffect, useState, useCallback } from 'react'
import styled, { keyframes } from 'styled-components'
import Link from 'next/link';
import MenuLink from './MenuLink';
import { AiOutlineMenu } from 'react-icons/ai'
import Image from 'next/image';
import logo from 'assets/HH.png'

const Navbar: FC = props => {
  const [user, setUser] = useState<any>(null);
  const [hidemenu, sethidemenu] = useState(true);


  const hidemobilemenu = () => {
    if(!hidemenu){
      sethidemenu(true)
    }
  }

  return (
    <>
      <StyledNavBar onClick={hidemobilemenu}>
        <StyledNavBarInner>
          <Logo>
            <Link href="/">
              <LogoAndImgContainer>
              <ImgDiv>
                <Image src={logo} width="75px" height="75px" />
                </ImgDiv>
                <LogoText>Happy Hearts</LogoText>
            </LogoAndImgContainer>
          </Link>
          </Logo>
          {!hidemenu?
          <StyledBackdrop>
            <MobileMenuContainer>
              <ImgDiv>
                <Image src={logo} width={50} height={50} />
              </ImgDiv>
              <MenuLink key={`menuhome`} link={'/'} text={'Home'}></MenuLink>
              <MenuLink key={`menuteam`} link={'/team'} text={'Team'}></MenuLink>
              <MenuLink key={`menucontact`} link={'/contact'} text={'Contact Us'}></MenuLink>
            </MobileMenuContainer>
          </StyledBackdrop>
            :<></>
          }
            <MenuContainer>
              <MenuLink key={`mmenuhome`} link={'/'} text={'Home'}></MenuLink>
              <MenuLink key={`mmenuteam`} link={'/team'} text={'Team'}></MenuLink>
              <MenuLink key={`mmenucontact`} link={'/contact'} text={'Contact'}></MenuLink>
            </MenuContainer>

            <MenuIcon onClick={()=>sethidemenu(!hidemenu)}>
              <AiOutlineMenu size={"35px"} color={"white"}/>
            </MenuIcon>
            
            
          
        </StyledNavBarInner>
      </StyledNavBar>
    </>
  )
}

const slideIn = keyframes`
  0% {
    transform: translateX(-100%)
  }
  100% {
    transform: translateX(0);
  }
`

const MenuIcon = styled.div`
  display: none;
  @media (max-width: 770px) {
      display: flex;
  }
`;

const MenuContainer = styled.div`
  display: flex;
  justify-content: space-around;
  color: #000000;
  @media (max-width: 770px) {
    display: none;
  }
`

const MobileMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-text: center;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  background-color: #9b111e;
  color: #FFFFFF;
  width: 50%;
  padding: 25px;
  transition: ease 0.5s;
  animation: ${slideIn} 0.3s forwards ease-out;
  `;

const StyledNavBar = styled.div`
  align-items: center;
  color: #000000;
  background-color: #9b111e;
`
const StyledNavBarInner = styled.div`
  display: flex;
  padding: 20px;
  align-items: center;
  justify-content: space-between;
  color: #000000;
`
const StyledBackdrop = styled.div`
  background-color: #000000;
  opacity: 1;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;
`;

const Logo = styled.div`
  display: flex;
  flex: 2;
  align-items: center;
  justify-content: flex-start;
`
const LogoText = styled.div`
  color: #000000;
  font-size: 45px;
  font-weight: 700;
  padding-left: 10px;
  color: #ffffff;
  @media (max-width: 860px) {
    padding-left: 5px;
  }
`
const LogoAndImgContainer = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    text-decoration: none;
  }
`
const ImgDiv =  styled.div`
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.25);
  border-radius: 40px;
`;

export default Navbar

