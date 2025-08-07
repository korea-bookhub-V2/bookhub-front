import { COMMON_URL, MANAGER_URL } from "../constants/constants";

const LOCATION_MODULE_MANAGER = `${MANAGER_URL}/locations`

export const POST_LOCATION_URL = `${LOCATION_MODULE_MANAGER}`;
export const PUT_LOCATION_URL = (locationId : number) => `${LOCATION_MODULE_MANAGER}/${locationId}`;
export const DELETE_LOCATION_URL = (locationId : number) =>`${LOCATION_MODULE_MANAGER}/${locationId}`;

const LOCATION_MODULE_COMMON = `${COMMON_URL}/locations`;
export const GET_FILTERED_LOCATIONS_URL = `${LOCATION_MODULE_COMMON}`
export const GET_LOCATION_URL = (locationId : number) => `${LOCATION_MODULE_COMMON}/${locationId}`;