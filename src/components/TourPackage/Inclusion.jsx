import { useState } from "react";
import styled from "styled-components";

// Main Container for the Inclusion component
const InclusionContainer = styled.div`
  width: 90%;
  margin: 2rem auto;
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
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.3);
  margin-right: 0.8rem;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  text-transform: uppercase;
`;

const HorizontalLine = styled.hr`
  width: 100%;
  border: 1px solid #ddd;
  margin-bottom: 1rem;
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
  padding: 0.8rem;
  cursor: pointer;
  font-size: 1.1rem;
  border-bottom: 1px solid #ddd;
  font-weight: ${(props) => (props.isActive ? "bold" : "normal")};
  color: ${(props) => (props.isActive ? "black" : "#555")};
`;

// Right Tab Content
const TabContent = styled.div`
  flex: 1;
  background-color: #0066cc;
  color: white;
  padding: 1.5rem;
  border-radius: 8px;
  position: relative;
`;

// Bullet List inside Tab Content
const BulletList = styled.ul`
  list-style-type: disc;
  padding-left: 1.5rem;
  font-size: 1rem;
  line-height: 1.6;
`;

const BulletListItem = styled.li`
  margin-bottom: 0.8rem;
`;

// See More Button
const SeeMoreButton = styled.button`
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  background-color: black;
  color: white;
  border: none;
  border-radius: 20px;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #333;
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

      {/* Tabbed Content Layout */}
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
