import styled from "styled-components";

const RecommendedPackagesContainer = styled.div`
  width: 80vw;
  margin: 8rem auto;
`;

const HeadingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Heading = styled.h2`
  /* font-size: 2rem; */
  letter-spacing: 2px;
  color: #333;
`;

const DetailsButton = styled.button`
  background-color: #2985e8;
  color: white;
  border: none;
  border-radius: 25px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0d4a90;
  }
`;

const CardsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  overflow-x: auto; /* Allows horizontal scrolling if necessary */
  padding: 1rem;
`;

const Card = styled.div`
  width: 250px;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  margin: 0 10px;
  position: relative;
  transition: transform 0.3s;

  &:hover {
    /* transform: translateY(-5px); */
    transform: scale(1.05) translateY(-5px);
    cursor: pointer;
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;

const DiscountLabel = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: red;
  color: white;
  padding: 5px 10px;
  border-radius: 15px;
  font-weight: bold;
`;

const CardDetails = styled.div`
  padding: 10px;
`;

const PackageName = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
  margin: 0;
`;

const OtherDetails = styled.p`
  margin: 5px 0;
  color: #666;
`;

const PriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;

const OldPrice = styled.span`
  text-decoration: line-through;
  color: #999;
`;

const NewPrice = styled.span`
  color: red;
  font-weight: bold;
`;

const RecommendedPackages = () => {
  const packages = [
    {
      imageUrl: "/place.jpg",
      name: "Beach Getaway",
      days: "5 Days",
      rating: "4.5 (100 Reviews)",
      oldPrice: "$500",
      newPrice: "$375",
    },
    {
      imageUrl: "/place.jpg",
      name: "Mountain Adventure",
      days: "7 Days",
      rating: "4.8 (200 Reviews)",
      oldPrice: "$600",
      newPrice: "$450",
    },
    {
      imageUrl: "/place.jpg",
      name: "City Tour",
      days: "3 Days",
      rating: "4.2 (50 Reviews)",
      oldPrice: "$300",
      newPrice: "$225",
    },
    {
      imageUrl: "/place.jpg",
      name: "Desert Safari",
      days: "4 Days",
      rating: "4.0 (80 Reviews)",
      oldPrice: "$400",
      newPrice: "$300",
    },
    {
      imageUrl: "/place.jpg",
      name: "Cruise Experience",
      days: "10 Days",
      rating: "4.6 (150 Reviews)",
      oldPrice: "$800",
      newPrice: "$600",
    },
  ];

  return (
    <RecommendedPackagesContainer>
      <HeadingContainer>
        <Heading>Recommended Packages</Heading>
        <DetailsButton>See Details</DetailsButton>
      </HeadingContainer>
      <CardsContainer>
        {packages.map((pkg, index) => (
          <Card key={index}>
            <CardImage src={pkg.imageUrl} alt={pkg.name} />
            <DiscountLabel>25% off</DiscountLabel>
            <CardDetails>
              <PackageName>{pkg.name}</PackageName>
              <OtherDetails>
                {pkg.days} | {pkg.rating}
              </OtherDetails>
              <PriceContainer>
                <OldPrice>{pkg.oldPrice}</OldPrice>
                <NewPrice>{pkg.newPrice}</NewPrice>
              </PriceContainer>
            </CardDetails>
          </Card>
        ))}
      </CardsContainer>
    </RecommendedPackagesContainer>
  );
};

export default RecommendedPackages;
