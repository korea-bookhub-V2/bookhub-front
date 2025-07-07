import { ADMIN_URL } from "../constants/constants";

const BRANCH_MODULE_URL = `${ADMIN_URL}/branches`;
export const POST_BRANCH_URL = `${BRANCH_MODULE_URL}`;
export const PUT_BRANCH_URL = (branchId: number) =>
  `${BRANCH_MODULE_URL}/${branchId}`;
export const GET_ALL_BRANCH_URL = `${BRANCH_MODULE_URL}`;
export const GET_BRANCH_DETAIL_URL = (branchId: number) =>
  `${BRANCH_MODULE_URL}/${branchId}`;
