import { ResponseDto } from "@/dtos";
import { LocationCreateRequestDto } from "@/dtos/locations/Location.request.dto";
import { LocationResponseDto } from "@/dtos/locations/Location.response.dto";
import { axiosInstance, bearerAuthorization, responseErrorHandler, responseSuccessHandler } from "../axiosConfig";
import { AxiosError } from "axios";
import { POST_LOCATION_URL, PUT_LOCATION_URL } from "./LocationUrl";

export const createLocation = async(
    dto: LocationCreateRequestDto,
    accessToken : string,   
) : Promise<ResponseDto<LocationResponseDto>> => {
    try{
        const response = await axiosInstance.post(
                    POST_LOCATION_URL,
                    dto,
                    bearerAuthorization(accessToken)
                );
                return responseSuccessHandler(response);
    }catch(error){
        return responseErrorHandler(error as AxiosError<ResponseDto<LocationResponseDto>>);
    }
};

export const updateLocation = async(
    locationId: number,
    dto: LocationCreateRequestDto,
    accessToken : string,   
) : Promise<ResponseDto<LocationResponseDto>> => {
    try{
        const response = await axiosInstance.put(
                    PUT_LOCATION_URL(locationId),
                    dto,
                    bearerAuthorization(accessToken)
                );
                return responseSuccessHandler(response);
    }catch(error){
        return responseErrorHandler(error as AxiosError<ResponseDto<LocationResponseDto>>);
    }
};

export const deleteLocation = async(
    locationId: number,
    accessToken : string,   
) : Promise<ResponseDto<null>> => {
    try{
        const response = await axiosInstance.delete(
                    PUT_LOCATION_URL(locationId),
                    bearerAuthorization(accessToken)
                );
                return responseSuccessHandler(response);
    }catch(error){
        return responseErrorHandler(error as AxiosError<ResponseDto<null>>);
    }
};