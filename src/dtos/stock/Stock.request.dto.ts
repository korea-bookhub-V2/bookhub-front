import { StockActionType } from "@/apis/enums/StockActionType";

export interface StockUpdateRequestDto{
    type: StockActionType;
    employeeId : number;
    isbn: string;
    branchId: number;
    amount: number;
    description? : string;
}