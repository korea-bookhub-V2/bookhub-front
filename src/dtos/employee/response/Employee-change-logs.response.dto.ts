import { ChangeType } from "@/apis/enums/ChangeType";

export interface EmployeeChangeLogsResponseDto {
  loginId: number;
  employeeNumber: number;
  employeeName: string;
  changeType: ChangeType;
  prePositionName: string | null;
  preAuthorityName: string | null;
  preBranchName: string | null;
  authorizerNumber: number;
  authorizerName: string;
  updatedAt: string;
}