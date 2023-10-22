import { useSearchParams } from "react-router-dom";
import { floors } from "../data/buildings";
import { Apartment } from "../core";
import { Card, Heading, Select, VStack } from "@chakra-ui/react";

const ApartmentCard = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { buildingId, floorId } = Object.fromEntries(searchParams.entries());

  const buildingFloors = floors.find((x) => x.buildingId === buildingId)
    ?.floors;
  const apartments: Apartment[] | undefined = buildingFloors?.find(
    (x) => x.id === floorId
  )?.apartments;

  return (
    <>
      {buildingFloors && (
        <>
          <Select
            onChange={({ target: { value } }) => {
              searchParams.set("floorId", value);
              setSearchParams(searchParams);
            }}
          >
            {buildingFloors.map(({ id, number }) => (
              <option key={id} value={id}>
                Floor {number}
              </option>
            ))}
          </Select>
          <VStack>
            {apartments &&
              apartments.map(({ name }) => (
                <Card>
                  <Heading>{name}</Heading>
                </Card>
              ))}
          </VStack>
        </>
      )}
    </>
  );
};

export default ApartmentCard;
