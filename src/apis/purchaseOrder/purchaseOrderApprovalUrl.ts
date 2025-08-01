import { ADMIN_URL } from "../constants/constants";
import { PurchaseOrderStatus } from "../enums/PurchaseOrderStatus";

export const  PURCHASE_APPROVAL_MODULE_URL_ADMIN = `${ADMIN_URL}/purchase-order-approvals`

export const PUT_PURCHASE_ORDER_STATUS_URL = (purchaseOrderId: number) => `${PURCHASE_APPROVAL_MODULE_URL_ADMIN}/approval/${purchaseOrderId}`;

export const GET_ALL_PURCHASE_ORDER_REQUESTED_URL = `${PURCHASE_APPROVAL_MODULE_URL_ADMIN}/requested`;

export const GET_PURCHASE_ORDER_APPROVAL_BY_CRITERIA_URL = (
  employeeName?: string, isApproved?: boolean | null
) => {
  const queryParams = new URLSearchParams();
  
  if (employeeName) queryParams.append("employeeName", employeeName);
  if (isApproved === null) {
    queryParams.append("isApproved", "")
  } else {
    queryParams.append("isApproved", String(isApproved))
  }
  
  return `${PURCHASE_APPROVAL_MODULE_URL_ADMIN}?${queryParams.toString()}`;
};

export const GET_PURCHASE_ORDER_APPROVAL_BY_DATE = (startDate: string, endDate: string) => {
  const queryParams = new URLSearchParams();

  if (startDate) queryParams.append("startDate", startDate);
  if (endDate) queryParams.append("endDate", endDate);

  return `${PURCHASE_APPROVAL_MODULE_URL_ADMIN}/date?${queryParams.toString()}`;
}

