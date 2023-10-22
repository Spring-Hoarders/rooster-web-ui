import { HStack } from "@chakra-ui/react";
import BuildingCard from "../components/BuildingCard";
import { buildings } from "../data/buildings";

const HomePage = () => {
  return (
    <HStack>
      {buildings.map((x) => (
        <BuildingCard key={x.id} building={x} />
      ))}
    </HStack>
  );
};
export default HomePage;
