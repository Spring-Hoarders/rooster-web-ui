import { Apartment, ApartmentStatus, Building, Floor } from "../core";

export const buildings: Building[] = [
  { id: "firstBuilding", name: "Section A" },
  { id: "secondBuilding", name: "Section B" },
  { id: "thirdBuilding", name: "Section C" },
];

type FloorEntry = { apartments: Apartment[] } & Floor;
type FloorToBuilding = { buildingId: string; floors: FloorEntry[] };

export const floors: FloorToBuilding[] = buildings.map<FloorToBuilding>(
  ({ id: buildingId, name: buildingName }) => ({
    buildingId,
    floors: [
      {
        id: `${buildingId}F1`,
        buildingId,
        number: 1,
        apartments: [
          {
            name: `${buildingName.charAt(buildingName.length - 1)}101`,
            apartmentTypeId: 1,
            floorId: `${buildingId}F1`,
            status: ApartmentStatus.Free,
          },
          {
            name: `${buildingName.charAt(buildingName.length - 1)}102`,
            apartmentTypeId: 1,
            floorId: `${buildingId}F1`,
            status: ApartmentStatus.Free,
          },
          {
            name: `${buildingName.charAt(buildingName.length - 1)}103`,
            apartmentTypeId: 1,
            floorId: `${buildingId}F1`,
            status: ApartmentStatus.Free,
          },
        ],
      },
      {
        id: `${buildingId}F2`,
        buildingId,
        number: 2,
        apartments: [
          {
            name: `${buildingName.charAt(buildingName.length - 1)}201`,
            apartmentTypeId: 1,
            floorId: `${buildingId}F2`,
            status: ApartmentStatus.Free,
          },
          {
            name: `${buildingName.charAt(buildingName.length - 1)}202`,
            apartmentTypeId: 1,
            floorId: `${buildingId}F2`,
            status: ApartmentStatus.Free,
          },
          {
            name: `${buildingName.charAt(buildingName.length - 1)}203`,
            apartmentTypeId: 1,
            floorId: `${buildingId}F2`,
            status: ApartmentStatus.Free,
          },
        ],
      },
      {
        id: `${buildingId}F3`,
        buildingId,
        number: 3,
        apartments: [
          {
            name: `${buildingName.charAt(buildingName.length - 1)}301`,
            apartmentTypeId: 1,
            floorId: `${buildingId}F3`,
            status: ApartmentStatus.Free,
          },
          {
            name: `${buildingName.charAt(buildingName.length - 1)}302`,
            apartmentTypeId: 1,
            floorId: `${buildingId}F3`,
            status: ApartmentStatus.Free,
          },
          {
            name: `${buildingName.charAt(buildingName.length - 1)}303`,
            apartmentTypeId: 1,
            floorId: `${buildingId}F3`,
            status: ApartmentStatus.Free,
          },
        ],
      },
    ],
  })
);
