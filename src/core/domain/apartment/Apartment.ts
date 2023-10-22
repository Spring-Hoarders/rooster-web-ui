type Apartment = {
  id: string;
  floorId: string;
  apartmentTypeId: number;
  name: string;
  status: ApartmentStatus;
};

export const enum ApartmentStatus {
  Free,
  SemiOccupied,
  Occupied,
}

export default Apartment;
