export interface User {
  name: string;
  userId: string;
  profileImagePath: string;
}

export interface UpdateUserInfo {
  originUserId: string;
  name: string;
  userId: string;
  password: string;
  image?: any;
}
