import { Status } from "../enum/Status";

export default interface Apartment {
  apartamentId: string;
  floorId: string;
  status: Status;
}
