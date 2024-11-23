import {
  FooterContainer,
  InfoContainer,
  LeftContainer,
  RightContainer,
  CopyRight,
  LogoWrapper,
  TextWrapper,
  BoldText,
  FooterLink,
  FooterLinkList,
  Separator,
} from "./Footer.style";
import logoIcon from "../../assets/logo/logo.svg";
import githubIcon from "../../assets/icons/github-icon.svg";

function Footer() {
  return (
    <FooterContainer>
      <InfoContainer>
        <LeftContainer>
          <LogoWrapper>
            <img src={logoIcon} alt="DevBadgers Logo" />
            <h4>Starchive</h4>
          </LogoWrapper>
          <TextWrapper>
            <span>Powered by <BoldText>DevBadgers</BoldText></span>
            <span>010 - 2510 - 6762</span>
            <span>devbadgers@gmail.com</span>
          </TextWrapper>
        </LeftContainer>
        <RightContainer>
          <FooterLinkList>
            <FooterLink><a href="#">홈</a></FooterLink>
            <Separator />
            <FooterLink><a href="#">이용약관</a></FooterLink>
            <Separator />
            <FooterLink><a href="#">문의하기</a></FooterLink>
            <Separator />
            <FooterLink><a href="#">로그아웃</a></FooterLink>
          </FooterLinkList>
          <img src={githubIcon} alt="github-icon" />
        </RightContainer>
      </InfoContainer>
      <CopyRight>ⓒ Copyright 2024 - DevBadgers. All rights reserved.</CopyRight>
    </FooterContainer>
  );
}

export default Footer;