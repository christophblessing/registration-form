export interface State {
  dateOfMoving: string;
  postCode: number;
  apartmentNumber: number;
  street: string;
  houseNumber: number;
  addOn: string;
  floor: number;
  landlord: string;
  familyMembers: Array<Details | null>;
  previousAccommodationPostCode: number;
  previousAccommodationAddress: string;
  signatureDate: string;
  signatureCity: string;
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
