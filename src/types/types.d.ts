export interface State {
  dateOfMoving: string;
  postCode: number;
  apartmentNumber: number;
  street: string;
  houseNumber: string;
  addOn: string;
  floor: number;
  landlord: string;
  familyMembers: FamilyMembers;
  previousAccommodationPostCode: number;
  previousAccommodationAddress: string;
}

interface FamilyMembers {
  [key: string]: Details;
}

export interface Details {
  surname: string;
  birthName: string;
  firstName: string;
  gender: string;
  dateOfBirth: string;
  placeOfBirth: string;
  maritalRelationship: string;
  religion: string;
  currentNationalities: string;
  idCard: string;
  passport: string;
}

export type detailsKeys =
  | "surname"
  | "birthName"
  | "firstName"
  | "gender"
  | "dateOfBirth"
  | "placeOfBirth"
  | "maritalRelationship"
  | "religion"
  | "currentNationalities"
  | "idCard"
  | "passport";