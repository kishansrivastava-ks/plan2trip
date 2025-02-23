import styled from "styled-components";

const ShareExperienceContainer = styled.div`
  width: 90%;
  margin: 5rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Title = styled.h1`
  font-size: 2.2rem;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 2rem;
  margin-top: 3rem;
  letter-spacing: 2px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);

  @media (min-width: 768px) {
    font-size: 3rem;
    margin-bottom: 3rem;
    margin-top: 5rem;
  }
`;

const ExperienceBox = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  min-height: auto;
  gap: 5px;
  background: transparent;

  @media (min-width: 768px) {
    flex-direction: row;
    min-height: 45rem;
  }
`;

const LeftColumn = styled.div`
  flex: 3;
  padding: 2rem;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border: 1px solid lightgray;
  min-height: 300px;

  @media (min-width: 768px) {
    padding: 4rem;
    border-top-right-radius: 0;
    border-bottom-left-radius: 15px;
    min-height: auto;
  }
`;

const ReviewInput = styled.textarea`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  font-size: 1.6rem;
  border-radius: 10px;
  letter-spacing: 1px;
  line-height: 1.6;
  resize: none;
  color: #000;

  &::placeholder {
    color: #00000080;
  }
  &:focus {
    outline: none;
  }

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

const RightColumn = styled.div`
  flex: 1;
  background: #333333;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;

  @media (min-width: 768px) {
    border-bottom-left-radius: 0;
    border-top-right-radius: 15px;
  }
`;

const UserImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 3px solid #fff;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    width: 160px;
    height: 160px;
  }
`;

const UserName = styled.h3`
  font-size: 2.2rem;
  margin-bottom: 1.5rem;
  letter-spacing: 3px;

  @media (min-width: 768px) {
    font-size: 3rem;
    margin-bottom: 2rem;
  }
`;

const Button = styled.button`
  width: 90%;
  padding: 1rem;
  font-size: 1.4rem;
  font-weight: bold;
  color: #333333;
  background: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 1rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease;
  transform: translateY(1rem);

  &:last-child {
    margin-bottom: 1rem;
  }

  &:hover {
    background-color: #f0f0f0;
  }

  &:focus {
    outline: none;
  }

  & > img {
    width: 25px;
    margin: 0 0.5rem;

    @media (min-width: 768px) {
      width: 30px;
      margin: 0 1rem;
    }
  }

  & > p {
    margin-right: auto;
    font-weight: 500;
    font-size: 1.6rem;
    letter-spacing: 1px;

    @media (min-width: 768px) {
      font-size: 1.8rem;
    }
  }

  @media (min-width: 768px) {
    font-size: 1.6rem;
    transform: translateY(2rem);
    margin-bottom: 2rem;
  }
`;

const ShareExperience = () => {
  return (
    <ShareExperienceContainer>
      <Title>Share Your Experience</Title>
      <ExperienceBox>
        <LeftColumn>
          <ReviewInput placeholder="Write your experience with Plan2Trip" />
        </LeftColumn>
        <RightColumn>
          <UserImage src="/user.jpg" alt="User" />
          <UserName>John</UserName>
          <Button>
            <img src="/gallery.png" alt="Gallery" />
            <p>Upload Memories</p>
          </Button>
          <Button>
            <img src="/dm.png" alt="DM" />
            <p>Post Review</p>
          </Button>
        </RightColumn>
      </ExperienceBox>
    </ShareExperienceContainer>
  );
};

export default ShareExperience;
