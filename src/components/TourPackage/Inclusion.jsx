import { useState } from "react";
import styled from "styled-components";

// Main Container for the Inclusion component
const InclusionContainer = styled.div`
  width: 90%;
  margin: 2rem auto;
  margin-bottom: 8rem;
`;

// Heading and Bullet
const Heading = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const BulletCircle = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: black;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  margin-right: 0.8rem;
`;

const Title = styled.h2`
  font-size: 3rem;
  font-weight: bold;
  text-transform: uppercase;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  letter-spacing: 1px;
`;

const HorizontalLine = styled.hr`
  width: 100%;
  border: 1px solid #ddd;
  margin-bottom: 2rem;
`;

// Tabbed Content Layout
const TabbedContentContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

// Left Tab List
const TabList = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
`;

const Tab = styled.div`
  padding: 1.2rem;
  cursor: pointer;
  font-size: 2.5rem;
  text-align: center;
  letter-spacing: 1px;
  border-bottom: 1px solid #666666;
  font-weight: ${(props) => (props.isActive ? "bold" : "normal")};
  color: ${(props) => (props.isActive ? "black" : "#555")};
`;

// Right Tab Content
const TabContent = styled.div`
  flex: 1;
  background: linear-gradient(180deg, #159ed2 0%, #1286ba 66.88%);
  color: white;
  padding: 2rem;
  border-radius: 15px;
  position: relative;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`;

// Bullet List inside Tab Content
const BulletList = styled.ul`
  list-style-type: disc;
  padding-left: 1.5rem;
  font-size: 2rem;
  letter-spacing: 1px;
  line-height: 1.6;
  margin-left: 2.5rem;
`;

const BulletListItem = styled.li`
  margin-bottom: 1rem;
`;

// See More Button
const SeeMoreButton = styled.button`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  background: #333333;
  color: white;
  border: none;
  border-radius: 20px;
  padding: 0.5rem 3rem;
  font-size: 1.5rem;
  letter-spacing: 2px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-right: 1rem;
  margin-bottom: 1rem;
  box-shadow: 0px 4px 4px 0px #ffffff40;

  &:hover {
    background-color: #000;
  }
`;

function Inclusion() {
  // State to track active tab
  const [activeTab, setActiveTab] = useState(0);

  // Sample tab content
  const tabs = [
    {
      title: "Accommodation",
      content: [
        "5 Nights stay in 3-star hotel",
        "Breakfast and dinner included",
        "Complimentary Wi-Fi",
        "Daily housekeeping",
        "Room service available",
      ],
    },
    {
      title: "Meals",
      content: [
        "Daily breakfast buffet",
        "Dinner served every night",
        "Special dietary options available",
        "Local cuisine highlights",
        "Unlimited soft drinks with meals",
      ],
    },
    {
      title: "Transport",
      content: [
        "Private AC bus for all sightseeing",
        "Airport pickup and drop",
        "Guided city tours",
        "Local commute covered",
        "24-hour travel support",
      ],
    },
    {
      title: "Guided Tours",
      content: [
        "Experienced tour guide",
        "Guided tours for all locations",
        "Group photography sessions",
        "Safety ensured",
        "Cultural insights provided",
      ],
    },
    {
      title: "Insurance",
      content: [
        "Travel insurance for all days",
        "Medical assistance included",
        "Trip protection cover",
        "Emergency support",
        "Loss or theft cover",
      ],
    },
  ];

  return (
    <InclusionContainer>
      {/* Heading with Bullet and Line */}
      <Heading>
        <BulletCircle />
        <Title>INCLUSION</Title>
      </Heading>
      <HorizontalLine />

      <TabbedContentContainer>
        {/* Left Tab List */}
        <TabList>
          {tabs.map((tab, index) => (
            <Tab
              key={index}
              isActive={activeTab === index}
              onClick={() => setActiveTab(index)}
            >
              {tab.title}
            </Tab>
          ))}
        </TabList>

        {/* Right Tab Content */}
        <TabContent>
          <BulletList>
            {tabs[activeTab].content.map((item, idx) => (
              <BulletListItem key={idx}>{item}</BulletListItem>
            ))}
          </BulletList>

          <SeeMoreButton>See More</SeeMoreButton>
        </TabContent>
      </TabbedContentContainer>
    </InclusionContainer>
  );
}

export default Inclusion;
