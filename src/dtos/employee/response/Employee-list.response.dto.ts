import { Status } from "@/apis/enums/StatusType";

export interface EmployeeListResponse {
  employeeId: number;
  employeeNumber: number;
  employeeName: string;
  branchName: string;
  positionName: string;
  authorityName: string;
  status: Status;
}