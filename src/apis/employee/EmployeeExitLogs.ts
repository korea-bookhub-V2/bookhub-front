import { ResponseDto } from "@/dtos";
import {
  axiosInstance,
  bearerAuthorization,
  responseErrorHandler,
  responseSuccessHandler,
} from "../axiosConfig";
import { GET_ALL_EMPLOYEE_EXIT_LOGS_URL } from "./EmployeeLogUrl";
import { AxiosError } from "axios";
import { EmployeeExitLogsSearchParams } from "@/dtos/employee/request/Employee-exit-logs-search-params";
import { EmployeeExitLogsResponseDto } from "@/dtos/employee/response/Employee-exit-logs.response.dto";

export const employeeExitLogsSearchRequest = async (
  params: EmployeeExitLogsSearchParams,
  accessToken: string
): Promise<ResponseDto<EmployeeExitLogsResponseDto[]>> => {
  try {
    const response = await axiosInstance.get(GET_ALL_EMPLOYEE_EXIT_LOGS_URL, {
      params,
      ...bearerAuthorization(accessToken),
    });
    return responseSuccessHandler(response);
  } catch (error) {
    return responseErrorHandler(error as AxiosError<ResponseDto>);
  }
};
