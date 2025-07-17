export interface IInitialState {
  appVersion: string;
  codePushVersion: string | undefined;
  onBoarding: boolean;
  isRegisterFirstDownload: boolean;
  isLoginAfterLogout: boolean;
  deviceTokens: string[];
}
