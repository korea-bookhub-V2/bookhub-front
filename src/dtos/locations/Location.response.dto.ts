import { DisplayType } from "@/apis/enums/DisplayType";

export interface LocationResponseDto{
    locationId : number;
    bookTitle : string;
    floor: string;
}

export interface LocationDetailResponseDto{
    locationId : number;
    bookTitle : string;
    floor: string;
    hall: string;
    type: DisplayType;
    note?: string |null;
}