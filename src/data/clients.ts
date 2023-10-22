import { Client, Payment, Contract } from "../core";
import {
  ContractStatus,
  GuaranteeType,
} from "../core/domain/contract/Contract";

export const clients: Client[] = [
  {
    id: "clientOne",
    apartmentId: "B1F1A1",
    firstName: "Free1",
    lastName: "Bird1",
    phoneNumber: "06911111111",
  },
  {
    id: "clientTwo",
    apartmentId: "B1F1A1",
    firstName: "Erald",
    lastName: "Caka",
    phoneNumber: "06911111111",
  },
  {
    id: "clientThree",
    apartmentId: "B1F1A1",
    firstName: "Enkel",
    lastName: "Murati",
    phoneNumber: "06911111111",
  },
];

type PaymetsToContract = Contract & { payments: Payment[] };
type ClientToContract = { clientId: string; contracts: PaymetsToContract[] };

export const contracts: ClientToContract[] = clients.map<ClientToContract>(
  ({ id: clientId }, index) => ({
    clientId,
    contracts: [
      {
        id: clientId + "C1",
        apartmentId: `B${index + 1}F1A1`,
        clientId,
        contractStatus: ContractStatus.Accepted,
        accomodationDate: new Date("2023-10-22"),
        evictionDate: new Date("2023-10-22"),
        startDate: new Date("2023-10-22"),
        endDate: new Date("2023-10-22"),
        guaranteeType: GuaranteeType.PrivatFunds,
        payments: [
          {
            id: clientId + "C1" + "P1",
            clientId,
            contractId: clientId + "C1",
            fileUrl: `Image.png`,
            amount: 250.25,
            createdAt: new Date("2023-10-22"),
          },
          {
            id: clientId + "C1" + "P2",
            clientId,
            contractId: clientId + "C1",
            fileUrl: `Image.png`,
            amount: 250.25,
            createdAt: new Date("2023-10-22"),
          },
          {
            id: clientId + "C1" + "P3",
            clientId,
            contractId: clientId + "C1",
            fileUrl: `Image.png`,
            amount: 250,
            createdAt: new Date("2023-10-22"),
          },
        ],
      },
      {
        id: clientId + "C2",
        apartmentId: `${clientId}A12^${index}`,
        clientId,
        contractStatus: ContractStatus.Accepted,
        accomodationDate: new Date("2023-10-22"),
        evictionDate: new Date("2023-10-22"),
        startDate: new Date("2023-10-22"),
        endDate: new Date("2023-10-22"),
        guaranteeType: GuaranteeType.PrivatFunds,
        payments: [
          {
            id: clientId + "C2" + "P1",
            clientId,
            contractId: clientId + "C2",
            fileUrl: `Image.png`,
            amount: 250.25,
            createdAt: new Date("2023-10-22"),
          },
          {
            id: clientId + "C2" + "P2",
            clientId,
            contractId: clientId + "C2",
            fileUrl: `Image.png`,
            amount: 250.25,
            createdAt: new Date("2023-10-22"),
          },
          {
            id: clientId + "C2" + "P3",
            clientId,
            contractId: clientId + "C2",
            fileUrl: `Image.png`,
            amount: 250,
            createdAt: new Date("2023-10-22"),
          },
        ],
      },
      {
        id: clientId + "C3",
        apartmentId: `${clientId}A11^${index}`,
        clientId,
        contractStatus: ContractStatus.Accepted,
        accomodationDate: new Date("2023-10-22"),
        evictionDate: new Date("2023-10-22"),
        startDate: new Date("2023-10-22"),
        endDate: new Date("2023-10-22"),
        guaranteeType: GuaranteeType.PrivatFunds,
        payments: [
          {
            id: clientId + "C3" + "P1",
            clientId,
            contractId: clientId + "C3",
            fileUrl: `Image.png`,
            amount: 250.25,
            createdAt: new Date("2023-10-22"),
          },
          {
            id: clientId + "C3" + "P2",
            clientId,
            contractId: clientId + "C3",
            fileUrl: `Image.png`,
            amount: 250.25,
            createdAt: new Date("2023-10-22"),
          },
          {
            id: clientId + "C3" + "P3",
            clientId,
            contractId: clientId + "C3",
            fileUrl: `Image.png`,
            amount: 250,
            createdAt: new Date("2023-10-22"),
          },
        ],
      },
    ],
  })
);
