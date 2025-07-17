export interface IUserAccount {
  phone: string;
  email: string;
  fullname: string;
  firIdToken: string;
  isTypeAuthPhone: boolean;
  tokenApp: string;
  phoneNumber: string;
  isLoggedIn: boolean;
}
export interface IFormLoginWithPhoneNumber {
  phoneNumber: string;
}
