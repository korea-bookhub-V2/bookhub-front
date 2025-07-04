export interface SignUpRequestDto {
  loginId: string;
  password: string;
  confirmPassword: string;
  name: string;
  email: string;
  phoneNumber: string;
  birthDate: string;
  branchId: string;
}

export interface CheckLoginIdDuplicateRequestDto {
  loginId: string;
}