import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { clients } from "../data/clients";
import { Card, Heading } from "@chakra-ui/react";

const ClientCard = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { id } = Object.fromEntries(searchParams.entries());

  const apartmentClients = clients.filter((x) => x.apartmentId === id);

  return (
    <>
      {apartmentClients ? (
        apartmentClients.map(({ id, firstName, lastName }) => (
          <Card
            key={id}
            onClick={() =>
              navigate({
                pathname: "/contracts",
                search: createSearchParams({ id }).toString(),
              })
            }
          >
            <Heading>
              {firstName} {lastName}
            </Heading>
          </Card>
        ))
      ) : (
        <Heading>No clients</Heading>
      )}
    </>
  );
};

export default ClientCard;
