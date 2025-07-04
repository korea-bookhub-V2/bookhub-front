import {
  CheckLoginIdDuplicateRequestDto,
  SignUpRequestDto,
} from "@/dtos/auth/request/Sign-up.request.dto";
import {
  axiosInstance,
  responseErrorHandler,
  responseSuccessHandler,
} from "../axiosConfig";
import { CHECK_DUPLICATE_LOGIN_ID, SIGN_UP_URL } from "./authUrl";
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

export const checkLoginIdDuplicate = async (
  params: CheckLoginIdDuplicateRequestDto
): Promise<ResponseDto<void>> => {
  try {
    const response = await axiosInstance.get(CHECK_DUPLICATE_LOGIN_ID, {
      params,
    });
    return responseSuccessHandler(response);
  } catch (error) {
    return responseErrorHandler(error as AxiosError<ResponseDto>);
  }
};
