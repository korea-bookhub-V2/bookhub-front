import { Status } from "@/apis/enums/StatusType";

export interface EmployeeSearchParams {
  name: string;
  branchId: string;
  positionId: string;
  authorityId: string;
  status: Status;
}