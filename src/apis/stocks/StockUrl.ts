import { ADMIN_URL, COMMON_URL, MANAGER_URL } from "../constants/constants";

const STOCK_MODULE_MANAGER = `${MANAGER_URL}/branch`;
export const PUT_STOCK_URL = (branchId : number, stockId: number) => `${STOCK_MODULE_MANAGER}/branch/${branchId}/stocks/${stockId}`;
const STOCK_MODULE_COMMON = `${COMMON_URL}/stocks`;
export const GET_FILTERED_STOCKS_URL = `${STOCK_MODULE_COMMON}`;

const STOCK_LOG_MODULE_URL = `${ADMIN_URL}/stock-logs`;
export const GET_FILTERED_STOCK_LOGS_URL = `${STOCK_LOG_MODULE_URL}`;
export const GET_STOCK_LOG_URL = (stockLogId : number) => `${STOCK_LOG_MODULE_URL}/${stockLogId}`;
