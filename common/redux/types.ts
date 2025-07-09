export interface IInitialState {
  confirmLogoutVisible: boolean;
  isOpenDataForm: boolean;
  accessToken: string;
  listGiftData: GIFT[];
}

export interface GIFT {
  id: string;
  name: string;
  price: number;
}
