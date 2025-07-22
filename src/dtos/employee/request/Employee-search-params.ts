import { Status } from "@/apis/enums/StatusType";

export interface EmployeeSearchParams {
  name: string;
  branchId: number;
  positionId: number;
  authorityId: number;
  status: Status;
}