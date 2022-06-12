import React, { FC, useEffect, useState, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styled, { keyframes } from 'styled-components'
import MenuLink from './MenuLink';
import MenuButton from './MenuButton';
// import logo from '../../assets/logo.png'

const Navbar: FC = props => {
  const [user, setUser] = useState(null);

  useEffect(() => {
  }, []);


  return (
    <>
      <StyledNavBar>
        <StyledNavBarInner>
          <Logo>
            <Link href="/">
                <LogoAndImgContainer>
                    {/* <Image src={logo} width="35px" height="35px" /> */}
                    <LogoText>Happy Hearts</LogoText>
                </LogoAndImgContainer>
            </Link>
          </Logo>

          <MenuContainer>
            <MenuLink key={`menuhome`} link={'/'} text={'Home'}></MenuLink>

            <MenuLink
            key={`menuaboutus`}
            link={'/team'}
            text={'Team'}
            ></MenuLink>
              <MenuLink key={`menuvolunteer`} link={'/volunteer'} text={'Volunteer'}></MenuLink>
        </MenuContainer>
          
        </StyledNavBarInner>
      </StyledNavBar>
    </>
  )
}

const MenuContainer = styled.div`
  display: flex;
  justify-content: space-around;
  color: #ffffff;

`

const StyledNavBar = styled.div`
  align-items: center;
  color: #ffffff;
  background-color: #e1a6a6;
`
const StyledNavBarInner = styled.div`
  display: flex;
  padding: 20px;
  align-items: center;
  justify-content: space-between;
  color: #ffffff;
  @media (max-width: 70px) {
    flex-direction: column;
  }
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

const Logo = styled.div`
  display: flex;
  flex: 2;
  align-items: center;
`

const slideIn = keyframes`
  0% {
    transform: translateX(-100%)
  }
  100% {
    transform: translateX(0);
  }
`

const IconDiv = styled.div`
  display: none;
  @media (max-width: 770px) {
    display: block;
  }
`

const LogoAndImgContainer = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    text-decoration: none;
  }
`

const LogoImgContainer = styled.div`

`
export default Navbar
