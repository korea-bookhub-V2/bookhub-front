import { ResponseDto } from "@/dtos";
import { StockUpdateRequestDto } from "@/dtos/stock/Stock.request.dto";
import { StockResponseDto, StockUpdateResponseDto } from "@/dtos/stock/Stock.response.dto";
import { GET_FILTERED_STOCKS_URL, PUT_STOCK_URL } from "./StockUrl";
import { axiosInstance, bearerAuthorization, responseErrorHandler, responseSuccessHandler } from "../axiosConfig";
import { AxiosError, AxiosResponse } from "axios";
import { PageResponseDto } from "@/dtos/PageResponseDto";

export const updateStock = async(
    branchId: number,
    stockId : number,
    dto : StockUpdateRequestDto,
    accessToken : string
) : Promise<ResponseDto<StockUpdateResponseDto>> =>{
    try{
        const response = await axiosInstance.put(
            PUT_STOCK_URL(branchId, stockId),
            dto,
            bearerAuthorization(accessToken)
        );
        return responseSuccessHandler(response);
    }catch(error){
        return responseErrorHandler(error as AxiosError<ResponseDto<StockUpdateResponseDto>>);
    }
}

export const getLocations= async (
    accessToken: string,
    page: number,
    size: number,
    bookTitle?: string,
    isbn? : string,
    branchId? : number //이거 토글로 할건데 어떻게 할지 생각해보기 (branchrepo에서 받아와야하나?)
): Promise<
    ResponseDto<
        PageResponseDto<StockResponseDto>>> => {
    try {
        const response : AxiosResponse<ResponseDto<
        PageResponseDto<StockResponseDto>>> = await axiosInstance.get(GET_FILTERED_STOCKS_URL,{
            params:{page, size, bookTitle, isbn, branchId},
            headers: {Authorization: `Bearer ${accessToken}`},
        });
        return responseSuccessHandler(response);
    } catch (error) {
        return responseErrorHandler(error as AxiosError<ResponseDto<
        PageResponseDto<StockResponseDto>>>);
    }
};
