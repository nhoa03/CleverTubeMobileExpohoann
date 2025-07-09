export interface IUserInfoResponse {
  data: {
    client: {
      clientPlan: {
        client: {};
        id: number;
        clientId: number;
        planId: number;
        plan: IPlan;
      };
      user: any;
      id: number;
      email: string;
      fullname: string;
      phone: string;
      userId: number;
      avatar?: any;
    };
    admin: {
      user: {};
      id: number;
      email: string;
    };
    userType: {
      key: string;
      description: string;
    };
    level: {
      videos: [{}];
      key: string;
      slug: string;
      description: string;
    };
    avatar: {
      id: number;
      key: string;
      type: string;
      size: number;
      uploaderId: number;
      url: string;
    };
    userDiamond: {
      userId: number;
      totalDiamonds: number;
      stalesAt: string;
    };
    id: number;
    firId: string;
    levelKey: string;
    userTypeKey: string;
  };
}
export interface IPlan {
  id: number;
  type: string;
  desc: string;
  googleBillingProductId: string;
  inAppPurchaseProductId: string;
  name: string;
}
