export interface Property {
    propId: number;
    photos: string[];
    coverPhoto: string;
    address: {
        street: string;
        city: string;
        state: string;
        zipCode: number
    };
    rent: number;
    bedrooms: number;
    bathrooms: number;
    squareFeet: number;
    leaseLength: string;
    available: boolean;
    catsAllowed: boolean;
    dogsAllowed: boolean;
    smokingAllowed: boolean;
    garageIncluded: boolean;
    utilitiesIncluded: boolean;
    lawnCareIncluded: boolean;
    snowRemovalIncluded: boolean;
    desc: string;
    videoTourLink: string
}