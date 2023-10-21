import User from "./User";

export default interface Building {
  name: string;
  floorNr: number;
  apartmentNr: number;
  createdBy: string;
  createdAt: Date;
  lastModifedBy: string;
  lastModifiedAt: Date;
  userEntity: { user: User };
}
