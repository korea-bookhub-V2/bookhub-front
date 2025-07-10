// & 2. purchase_orders

import { ADMIN_URL, MANAGER_URL } from "../constants/constants";
import { PurchaseOrderStatus } from "../enums/PurchaseOrderStatus";

// 베이스 URL
const PURCHASE_ORDER_MODULE_URL_MANAGER = `${MANAGER_URL}/purchase-orders`;
const PURCHASE_ORDER_MODULE_URL_ADMIN = `${ADMIN_URL}/purchase-orders`;

// 발주 요청서 작성
export const POST_PURCHASE_ORDER_URL = `${PURCHASE_ORDER_MODULE_URL_MANAGER}`;

// 발주 요청서 단건 조회
export const GET_PURCHASE_ORDER_URL = (purchaseOrderId: number) => `${PURCHASE_ORDER_MODULE_URL_MANAGER}/${purchaseOrderId}`;

// 발주 요청서 수정
export const PUT_PURCHASE_ORDER_URL = (purchaseOrderId: number) => `${PURCHASE_ORDER_MODULE_URL_MANAGER}/${purchaseOrderId}`;

// 발주 요청서 삭제
export const DELETE_PURCHASE_ORDER_URL = (purchaseOrderId: number) => `${PURCHASE_ORDER_MODULE_URL_MANAGER}/${purchaseOrderId}`;

// 발주 요청서 조건으로 조회 (발주 담당자, 책 제목, 승인 여부)
export const GET_PURCHASE_ORDER_BY_CRITERIA = (
  employeeName: string,
  bookIsbn: string,
  purchaseOrderStatus: PurchaseOrderStatus | null
) => {
  const queryParams = new URLSearchParams();
  
  if (employeeName) queryParams.append("employeeName", employeeName);
  if (bookIsbn) queryParams.append("bookIsbn", bookIsbn);
  if (purchaseOrderStatus) queryParams.append("purchaseOrderStatus", purchaseOrderStatus);

  console.log(queryParams.toString());
  
  return `${PURCHASE_ORDER_MODULE_URL_MANAGER}?${queryParams.toString()}`;
};