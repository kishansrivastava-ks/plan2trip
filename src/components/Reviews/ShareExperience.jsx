import styled from "styled-components";

const ShareExperienceContainer = styled.div`
  width: 90%;
  margin: 5rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 3rem;
  margin-top: 5rem;
  letter-spacing: 2px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`;

const ExperienceBox = styled.div`
  width: 90%;
  display: flex;
  /* gap: 2rem; */
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  /* border: 2px solid red; */
  min-height: 45rem;
  gap: 5px;
  background: transparent;
`;

const LeftColumn = styled.div`
  flex: 3;
  padding: 4rem;
  /* background-color: #f9f9f9; */
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  border: 1px solid lightgray;
`;

const ReviewInput = styled.textarea`
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  /* padding: 1rem; */
  font-size: 2rem;
  border-radius: 10px;
  letter-spacing: 1px;
  line-height: 1.6;
  resize: none;
  color: #000;
  /* background-color: #fff; */
  /* box-shadow: inset 0 2px 5px rgba(0, 0, 0, 0.1); */
  &::placeholder {
    color: #00000080;
    font-style: italic;
  }
  &:focus {
    outline: none;
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
`;

const UserImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 3px solid #fff;
  margin-bottom: 1rem;
`;

const UserName = styled.h3`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  letter-spacing: 2px;
`;

const Button = styled.button`
  width: 80%;
  padding: 1rem;
  font-size: 1.6rem;
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

  &:hover {
    background-color: #f0f0f0;
  }

  &:focus {
    outline: none;
  }
  & > img {
    width: 25px;
    margin: 0 1rem;
  }
  & > p {
    margin-right: auto;
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
            <p> Post Review</p>
          </Button>
        </RightColumn>
      </ExperienceBox>
    </ShareExperienceContainer>
  );
};

export default ShareExperience;
