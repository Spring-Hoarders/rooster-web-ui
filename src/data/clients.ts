import { Client, Payment, Contract } from "../core";
import {
  ContractStatus,
  GuaranteeType,
} from "../core/domain/contract/Contract";

export const clients: Client[] = [
  {
    id: "20232210glfstarter0",
    apartmentId: "1",
    firstName: "Free1",
    lastName: "Bird1",
    phoneNumber: "06911111111",
  },
  {
    id: "20232210glfstarter1",
    apartmentId: "2",
    firstName: "Erald",
    lastName: "Caka",
    phoneNumber: "06911111111",
  },
  {
    id: "20232210glfstarter2",
    apartmentId: "3",
    firstName: "Enkel",
    lastName: "Murati",
    phoneNumber: "06911111111",
  },
  {
    id: "20232210glfstarter3",
    apartmentId: "4",
    firstName: "Free4",
    lastName: "Bird4",
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
        id: "1",
        apartmentId: `${clientId}A1^${index}`,
        clientId: `${clientId}C1`,
        contractStatus: ContractStatus.Accepted,
        accomodationDate: new Date("2023-10-22"),
        evictionDate: new Date("2023-10-22"),
        startDate: new Date("2023-10-22"),
        endDate: new Date("2023-10-22"),
        guaranteeType: GuaranteeType.PrivetFunds,
        payments: [
          {
            id: `1${clientId}id${index}`,
            clientId: `${clientId}C1`,
            contractId: `contract1${clientId}`,
            fileUrl: `Image.png`,
            amount: 250.25,
            createdAt: new Date("2023-10-22"),
          },
          {
            id: `2${clientId}id${index}`,
            clientId: `${clientId}C2`,
            contractId: `contract2${clientId}`,
            fileUrl: `Image.png`,
            amount: 250.25,
            createdAt: new Date("2023-10-22"),
          },
          {
            id: `3${clientId}id${index}`,
            clientId: `${clientId}C3`,
            contractId: `contract3${clientId}`,
            fileUrl: `Image.png`,
            amount: 250,
            createdAt: new Date("2023-10-22"),
          },
        ],
      },
      {
        id: "2",
        apartmentId: `${clientId}A12^${index}`,
        clientId: `${clientId}C12`,
        contractStatus: ContractStatus.Accepted,
        accomodationDate: new Date("2023-10-22"),
        evictionDate: new Date("2023-10-22"),
        startDate: new Date("2023-10-22"),
        endDate: new Date("2023-10-22"),
        guaranteeType: GuaranteeType.PrivetFunds,
        payments: [
          {
            id: `21${clientId}id${index}`,
            clientId: `${clientId}C12`,
            contractId: `contract12${clientId}`,
            fileUrl: `Image.png`,
            amount: 250.25,
            createdAt: new Date("2023-10-22"),
          },
          {
            id: `22${clientId}id2${index}`,
            clientId: `${clientId}C22`,
            contractId: `contract22${clientId}`,
            fileUrl: `Image.png`,
            amount: 250.25,
            createdAt: new Date("2023-10-22"),
          },
          {
            id: `223${clientId}id${index}`,
            clientId: `${clientId}C223`,
            contractId: `contract32${clientId}`,
            fileUrl: `Image.png`,
            amount: 250,
            createdAt: new Date("2023-10-22"),
          },
        ],
      },
      {
        id: "3",
        apartmentId: `${clientId}A11^${index}`,
        clientId: `${clientId}C111`,
        contractStatus: ContractStatus.Accepted,
        accomodationDate: new Date("2023-10-22"),
        evictionDate: new Date("2023-10-22"),
        startDate: new Date("2023-10-22"),
        endDate: new Date("2023-10-22"),
        guaranteeType: GuaranteeType.PrivetFunds,
        payments: [
          {
            id: `14${clientId}id${index}`,
            clientId: `${clientId}C41`,
            contractId: `contract41${clientId}`,
            fileUrl: `Image.png`,
            amount: 250.25,
            createdAt: new Date("2023-10-22"),
          },
          {
            id: `42${clientId}id${index}`,
            clientId: `${clientId}C42`,
            contractId: `contract42${clientId}`,
            fileUrl: `Image.png`,
            amount: 250.25,
            createdAt: new Date("2023-10-22"),
          },
          {
            id: `53${clientId}id${index}`,
            clientId: `${clientId}C35`,
            contractId: `contract35${clientId}`,
            fileUrl: `Image.png`,
            amount: 250,
            createdAt: new Date("2023-10-22"),
          },
        ],
      },
    ],
  })
);
