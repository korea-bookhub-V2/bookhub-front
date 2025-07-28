import { AxiosError } from "axios";
import {
  axiosInstance,
  bearerAuthorization,
  responseErrorHandler,
  responseSuccessHandler,
} from "../axiosConfig";
import { GET_PURCHASE_ORDER_APPROVAL } from "./purchaseOrderApprovalUrl";
import { ResponseDto } from "@/dtos";
import { PurchaseOrderApprovalSearchParams } from "@/dtos/purchaseOrder/PurchaseOrderApprovalSearchParams";
import { PurchaseOrderApprovalResponseDto } from "@/dtos/purchaseOrderApproval/purchaseOrderApproval.response.dto";
import { PageResponseDto } from "@/dtos/PageResponseDto";

export const getAllPurchaseOrderApproval = async (
  params: PurchaseOrderApprovalSearchParams,
  accessToken: string
): Promise<ResponseDto<PageResponseDto<PurchaseOrderApprovalResponseDto>>> => {
  try {
    const response = await axiosInstance.get(GET_PURCHASE_ORDER_APPROVAL, {
      params,
      ...bearerAuthorization(accessToken),
    });
    return responseSuccessHandler(response);
  } catch (error) {
    return responseErrorHandler(error as AxiosError<ResponseDto>);
  }
};
