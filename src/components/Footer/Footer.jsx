import styled from "styled-components";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import {
  SiVisa,
  SiMastercard,
  SiPaypal,
  SiAmericanexpress,
  SiDiscover,
} from "react-icons/si";

const FooterContainer = styled.footer`
  background-color: black;
  color: white;
  padding: 3rem 1rem;
`;

const FirstRow = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const FooterColumn = styled.div`
  flex: 1;
  margin: 0 1.5rem;

  @media (max-width: 768px) {
    margin: 1rem 0;
    text-align: center;
  }
`;

const FooterHeading = styled.h3`
  margin-bottom: 1rem;
  font-family: var(--brand-font-1);
`;

const FooterLink = styled.a`
  display: block;
  margin-bottom: 0.5rem;
  color: white;
  text-decoration: none;

  &:hover {
    color: var(--color-main);
  }
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 1rem;
  margin-top: 1rem;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid white;
  width: 90%;
  margin: 2rem auto;
`;

const SecondRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const CopyrightText = styled.p`
  margin: 0;
`;

const PaymentIcons = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`;

function Footer() {
  return (
    <FooterContainer>
      {/* First Row */}
      <FirstRow>
        <FooterColumn>
          <FooterHeading>Support</FooterHeading>
          <FooterLink href="#">Help Center</FooterLink>
          <FooterLink href="#">Safety Information</FooterLink>
          <FooterLink href="#">Cancellation Options</FooterLink>
        </FooterColumn>

        <FooterColumn>
          <FooterHeading>Company</FooterHeading>
          <FooterLink href="#">About Us</FooterLink>
          <FooterLink href="#">Privacy Policy</FooterLink>
          <FooterLink href="#">Community Blogs</FooterLink>
          <FooterLink href="#">Terms of Service</FooterLink>
        </FooterColumn>

        <FooterColumn>
          <FooterHeading>Contact</FooterHeading>
          <FooterLink href="#">FAQ</FooterLink>
          <FooterLink href="#">Get in Touch</FooterLink>
          <FooterLink href="#">Partnerships</FooterLink>
        </FooterColumn>

        <FooterColumn>
          <FooterHeading>Social</FooterHeading>
          <SocialIcons>
            <FaFacebookF size={20} />
            <FaTwitter size={20} />
            <FaInstagram size={20} />
            <FaYoutube size={20} />
          </SocialIcons>
        </FooterColumn>
      </FirstRow>

      {/* Divider Line */}
      <Divider />

      {/* Second Row */}
      <SecondRow>
        <CopyrightText>© Copyright ascends 2024</CopyrightText>
        <PaymentIcons>
          <SiVisa size={30} />
          <SiMastercard size={30} />
          <SiPaypal size={30} />
          <SiAmericanexpress size={30} />
          <SiDiscover size={30} />
        </PaymentIcons>
      </SecondRow>
    </FooterContainer>
  );
}

export default Footer;
