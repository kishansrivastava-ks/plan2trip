import { useState } from "react";
import styled from "styled-components";
import { ChevronDown, ChevronUp } from "lucide-react";

const MOBILE_BREAKPOINT = "768px";

const InclusionContainer = styled.div`
  width: 90%;
  margin: 2rem auto;
  margin-bottom: 8rem;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    width: 95%;
    margin: 1rem auto;
    margin-bottom: 4rem;
  }
`;

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
  text-shadow: 0 2px 2px rgba(0, 0, 0, 0.2);
  color: #000;
  letter-spacing: 1px;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    font-size: 2rem;
  }
`;

const HorizontalLine = styled.hr`
  width: 100%;
  border: 1px solid #ddd;
  margin-bottom: 2rem;
`;

const TabbedContentContainer = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

const TabList = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    width: 100%;
    display: none;
  }
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

const TabContent = styled.div`
  flex: 1;
  background: linear-gradient(180deg, #159ed2 0%, #1286ba 66.88%);
  color: white;
  padding: 2rem;
  border-radius: 15px;
  position: relative;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    display: none;
  }
`;

// New Mobile Accordion Components
const MobileAccordion = styled.div`
  display: none;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  }
`;

const AccordionItem = styled.div`
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const AccordionHeader = styled.div`
  background: ${(props) =>
    props.isActive
      ? "linear-gradient(180deg, #159ed2 0%, #1286ba 66.88%)"
      : "#f5f5f5"};
  color: ${(props) => (props.isActive ? "white" : "black")};
  padding: 1rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  font-size: 1.8rem;
  font-weight: ${(props) => (props.isActive ? "bold" : "normal")};
`;

const AccordionContent = styled.div`
  background: linear-gradient(180deg, #159ed2 0%, #1286ba 66.88%);
  color: white;
  padding: ${(props) => (props.isActive ? "1.5rem" : "0")};
  max-height: ${(props) => (props.isActive ? "300px" : "0")};
  overflow: hidden;
  transition: all 0.3s ease-in-out;
`;

const BulletList = styled.ul`
  list-style-type: disc;
  padding-left: 1.5rem;
  font-size: 2rem;
  letter-spacing: 1px;
  line-height: 1.6;
  margin-left: 2.5rem;
  max-height: 27rem;
  overflow-y: auto;
  scrollbar-width: none;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    font-size: 1.6rem;
    margin-left: 1rem;
    line-height: 1.4;
    max-height: none;
  }
`;

const BulletListItem = styled.li`
  margin-bottom: 1rem;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    margin-bottom: 0.8rem;
  }
`;

function Inclusion() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeAccordion, setActiveAccordion] = useState(0);

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

  const handleAccordionClick = (index) => {
    setActiveAccordion(activeAccordion === index ? -1 : index);
  };

  return (
    <InclusionContainer>
      <Heading>
        <BulletCircle />
        <Title>INCLUSION</Title>
      </Heading>
      <HorizontalLine />

      {/* Desktop Layout */}
      <TabbedContentContainer>
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

        <TabContent>
          <BulletList>
            {tabs[activeTab].content.map((item, idx) => (
              <BulletListItem key={idx}>{item}</BulletListItem>
            ))}
          </BulletList>
        </TabContent>
      </TabbedContentContainer>

      {/* Mobile Accordion Layout */}
      <MobileAccordion>
        {tabs.map((tab, index) => (
          <AccordionItem key={index}>
            <AccordionHeader
              isActive={activeAccordion === index}
              onClick={() => handleAccordionClick(index)}
            >
              {tab.title}
              {activeAccordion === index ? (
                <ChevronUp size={20} />
              ) : (
                <ChevronDown size={20} />
              )}
            </AccordionHeader>
            <AccordionContent isActive={activeAccordion === index}>
              <BulletList>
                {tab.content.map((item, idx) => (
                  <BulletListItem key={idx}>{item}</BulletListItem>
                ))}
              </BulletList>
            </AccordionContent>
          </AccordionItem>
        ))}
      </MobileAccordion>
    </InclusionContainer>
  );
}

export default Inclusion;
