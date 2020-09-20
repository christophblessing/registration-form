export interface State {
    dateOfMoving: string;
    postCode: number;
    apartmentNumber: number;
    street: string;
    houseNumber: string;
    addOn: string;
    floor: number;
    landlord: string;
    details1: Details;
    details2?: Details;
    details3?: Details;
    details4?: Details;
    previousAccommodation: {
        postCode: number;
        address: string
    }
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
    idCard: string; // TODO: use Card Interface
    passport: string; // TODO: use Card Interface
  }

  interface Card {
    issuingAuthority: string;
    dateOfIssue: string;
    expiryDate: string;
    serialNumber: number;
  }