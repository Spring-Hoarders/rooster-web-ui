import { Status } from "../enum/Status";

export default interface Contract {
  contract_id: string;
  apartment_id: string;
  customer_id: string;
  starts_at: Date;
  ends_at: Date;
  status: Status; // the status enumeration (for the property current status)
}
