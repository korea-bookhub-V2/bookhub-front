import { DisplayType } from "@/apis/enums/DisplayType";

export interface LocationResponseDto{
    locationId : number;
    branchName: string;
    bookTitle : string;
    floor: string;
    hall: string;
    section:string;
    type: DisplayType;
    note: string;
}