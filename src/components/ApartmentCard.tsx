import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { floors } from "../data/buildings";
import { Apartment } from "../core";
import { Card, Heading, Select, VStack } from "@chakra-ui/react";

const ApartmentCard = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const { id, floorId } = Object.fromEntries(searchParams.entries());

  const buildingFloors = floors.find((x) => x.buildingId === id)?.floors;
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
              apartments.map(({ id, name }) => (
                <Card
                  key={name}
                  onClick={() =>
                    navigate({
                      pathname: "apartments",
                      search: createSearchParams({ id }).toString(),
                    })
                  }
                >
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
