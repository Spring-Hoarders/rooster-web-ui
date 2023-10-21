import { ContractStatus } from "../enum/ContractStatus";

export default interface Contract {
  contractId: string;
  apartmentId: string;
  customerId: string;
  startsAt: Date;
  endsAt: Date;
  status: ContractStatus; // the status enumeration (for the property current status)
}
