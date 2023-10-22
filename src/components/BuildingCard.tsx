import { Card, Heading, Icon, VStack } from "@chakra-ui/react";
import { Building } from "../core";
import { createSearchParams, useNavigate } from "react-router-dom";

interface Props {
  building: Building;
}

const BuildingCard = ({ building: { id, name } }: Props) => {
  const navigate = useNavigate();
  return (
    <Card
      onClick={() =>
        navigate({
          pathname: "buildings",
          search: createSearchParams({ id, floorId: id + "F1" }).toString(),
        })
      }
    >
      <VStack>
        <Icon />
        <Heading>{name}</Heading>
      </VStack>
    </Card>
  );
};

export default BuildingCard;
