import { ResponseDto } from "@/dtos";
import { ReceptionListResponseDto } from "@/dtos/reception/response/Reception.response.dto";
import axios, { AxiosError } from "axios";
import { GET_ADMIN_RECEPTION_URL, GET_CONFIRMED_RECEPTION_URL, PUT_RECEPTION_URL } from "./receptionUrl";
import { axiosInstance, bearerAuthorization, responseErrorHandler, responseSuccessHandler } from "../axiosConfig";

export const getAllReceptionApproval = async (
  token: string
): Promise<ResponseDto<ReceptionListResponseDto[]>> => {
  try{
    const response = await axiosInstance.get(GET_CONFIRMED_RECEPTION_URL, bearerAuthorization(token));
    return responseSuccessHandler(response);
  } catch (error) {
    return responseErrorHandler(error as AxiosError<ResponseDto>);
  }
};

export const putReception = async (
  token: string,
  purchaseOrderApprovalId: number
): Promise<ResponseDto<ReceptionListResponseDto[]>> => {
  try {
    const response = await axiosInstance.put(
      PUT_RECEPTION_URL(purchaseOrderApprovalId),
      {},
      bearerAuthorization(token)
    );
    return responseSuccessHandler(response);
  } catch (error) {
    return responseErrorHandler(error as AxiosError<ResponseDto>);
  }
};

export const getAdminReceptionApproval = async (
  token: string,
  branchName?: string,
  bookIsbn?: string
): Promise<ResponseDto<ReceptionListResponseDto[]>> => {
  try {
    let url = GET_ADMIN_RECEPTION_URL;
    const params = new URLSearchParams();

    if (branchName) params.append("branchName", branchName);
    if (bookIsbn) params.append("bookIsbn", bookIsbn);

    if ([...params].length > 0) {
      url += `?${params.toString()}`;
    }

    const response = await axiosInstance.get(url, bearerAuthorization(token));
    return responseSuccessHandler(response);
  } catch (error) {
    return responseErrorHandler(error as AxiosError<ResponseDto>);
  }
};