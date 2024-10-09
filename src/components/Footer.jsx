import styled from "styled-components";
import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaInstagram,
  FaHeart,
} from "react-icons/fa";
import { SiVisa, SiMastercard, SiMixpanel } from "react-icons/si";

const FooterContainer = styled.footer`
  background-color: #052e5a;
  color: #fffeff;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TopLinks = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 5rem;
  /* font-size: 1.1rem; */
  max-width: 60vw;
  /* border-bottom: 1px solid #fff; */
`;

const LinkItem = styled.a`
  color: #fffeff;
  text-decoration: none;
  transition: color 0.3s ease;
  padding: 1rem 2rem;
  border-radius: 2px;

  &:hover {
    color: #fff;
    background-color: #074586;
    transform: scale(1.05);
  }
  transition: all 0.1s ease-in-out;
`;

const FooterMiddle = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  padding: 20px 0;
  border-top: 1px solid #bbb;
  border-bottom: 0.5px solid #bbb;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const CorporateInfo = styled.div`
  flex: 1;
  padding: 10px;
  & > p {
    line-height: 1.7;
    font-size: smaller;
    letter-spacing: 2px;
  }
`;

const Heading = styled.h3`
  /* font-size: 1.2rem; */
  margin-bottom: 10px;
  color: #fffeff;
  font-weight: 500;
  letter-spacing: 4px;
`;

const PaymentIcons = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 10px;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  flex: 1;
  padding: 10px;
  letter-spacing: 2px;

  @media (max-width: 768px) {
    align-items: center;
    margin-top: 20px;
  }
`;

const BottomSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  padding: 20px 0;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 15px;
`;

const RightsText = styled.div`
  /* font-size: 0.9rem; */
  letter-spacing: 2px;
`;

function Footer() {
  return (
    <FooterContainer>
      <TopLinks>
        <LinkItem href="#">About Us</LinkItem>
        <LinkItem href="#">Team</LinkItem>
        <LinkItem href="#">We are hiring!</LinkItem>
        <LinkItem href="#">Testimonial</LinkItem>
        <LinkItem href="#">Blog</LinkItem>
        <LinkItem href="#">Travelogues</LinkItem>
        <LinkItem href="#">Terms and Conditions</LinkItem>
        <LinkItem href="#">Privacy Policy</LinkItem>
        <LinkItem href="#">Travel Agent? Join Us</LinkItem>
        <LinkItem href="#">FAQ</LinkItem>
        <LinkItem href="#">Contact Us</LinkItem>
      </TopLinks>
      <FooterMiddle>
        <CorporateInfo>
          <Heading>Corporate Office:</Heading>
          <p>
            Holiday Triangle Travel Private Limited <br />
            Address: Plot No - 52 , 3rd Floor, <br />
            Batra House, Sector 32, <br />
            Gurugram -122001, Haryana <br />
            Landline: 1800 123 5555
          </p>
          <PaymentIcons>
            <SiVisa size={30} />
            <SiMastercard size={30} />
            <SiMixpanel size={30} />
            {/* <SiPayumoney size={30} /> */}
          </PaymentIcons>
        </CorporateInfo>
        <ContactInfo>
          <p>1800 123 5555</p>
          <p>customercare@traveltriangle.com</p>
        </ContactInfo>
      </FooterMiddle>
      <BottomSection>
        <SocialIcons>
          <FaFacebookF size={20} />
          <FaTwitter size={20} />
          <FaPinterestP size={20} />
          <FaInstagram size={20} />
        </SocialIcons>
        <RightsText>
          Made with <FaHeart color="red" /> in India | All rights reserved ©
          2024
        </RightsText>
      </BottomSection>
    </FooterContainer>
  );
}

export default Footer;
