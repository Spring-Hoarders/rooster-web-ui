import { useSearchParams } from "react-router-dom";
import { contracts } from "../data/clients";
import { Card, Heading } from "@chakra-ui/react";

const ContractCard = () => {
  const [searchParams] = useSearchParams();
  const { id } = Object.fromEntries(searchParams.entries());

  const contractForClient = contracts.find((x) => x.clientId == id)?.contracts;

  return (
    <>
      {contractForClient ? (
        contractForClient.map(({ id, contractStatus, payments, endDate }) => (
          <Card key={id}>
            <Heading>
              {contractStatus} {endDate.toDateString()}
            </Heading>
            {payments.map(({ id, amount }) => (
              <Card key={id}>
                <Heading>{amount}</Heading>
              </Card>
            ))}
          </Card>
        ))
      ) : (
        <Heading>No Contracts</Heading>
      )}
    </>
  );
};

export default ContractCard;
