import { SignUpRequestDto } from "@/dtos/auth/request/Sign-up.request.dot";
import {
  axiosInstance,
  responseErrorHandler,
  responseSuccessHandler,
} from "../axiosConfig";
import { SIGN_UP_URL } from "./authUrl";
import { AxiosError } from "axios";
import { ResponseDto } from "@/dtos";

export const signUpRequest = async (
  dto: SignUpRequestDto
): Promise<ResponseDto<void>> => {
  try {
    const response = await axiosInstance.post(SIGN_UP_URL, dto);
    return responseSuccessHandler(response);
  } catch (error) {
    return responseErrorHandler(error as AxiosError<ResponseDto>);
  }
};
