import { ApartmentStatus } from "../enum/ApartmentStatus";

export default interface Apartment {
  apartamentId: string;
  floorId: string;
  status: ApartmentStatus;
  rooms: number;
  type: string;
}
