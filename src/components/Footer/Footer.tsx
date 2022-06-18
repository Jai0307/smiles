import React from 'react'
import styled from 'styled-components'

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterLinks>
      <StyledLink href={'/' } rel="noreferrer nofollow">
            Home
        </StyledLink>
        <StyledLink href={'/team' } rel="noreferrer nofollow">
            Team
        </StyledLink>
        
        <StyledLink href={'/contact'} rel="noreferrer nofollow">
          Contact
        </StyledLink>
        {/* <StyledLink href={'/terms-of-service'} rel="noreferrer nofollow">
          Terms
        </StyledLink>
        <StyledLink href={'/privacy-policy'} rel="noreferrer nofollow">
          Privacy
        </StyledLink> */}

      </FooterLinks>
    </FooterContainer>
  )
}

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50px;
  padding: 5px;
  color: #ffffff;
  background-color: #9b111e;
  @media (max-width: 770px) {
    flex-direction: column;
    align-items: center;
    height: auto;
  }
`

const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  color: #ffffff;
  &:hover {
  }
`

const StyledLink = styled.a`
  text-decoration: none;
  color: #ffffff;
  margin: 5px 20px;
  padding: 5px;
  border-radius: 3px;
  transition: ease 0.5s;
  &:hover {
    background-color: #212122;
  }
`

export default Footer
