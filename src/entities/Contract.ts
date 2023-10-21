import { Status } from "../enum/Status";

export default interface Contract {
  contractId: string;
  apartmentId: string;
  customerId: string;
  startsAt: Date;
  endsAt: Date;
  status: Status; // the status enumeration (for the property current status)
}
