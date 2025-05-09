// apartment.model.ts
export interface Apartment {
    no: number;
    building: string;
    level: string;
    beds: number;
    sqm: number;
    price: number;
    view: string;
    location: string;
    availableDate: Date;
    saved: boolean;
  }