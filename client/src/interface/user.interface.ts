import { UploadChangeParam } from 'antd/es/upload';

export interface User {
  name: string;
  userId: string;
  password: string;
  profileImagePath: string;
  createdAt: Date;
  isDeleted: boolean;
}

export interface UpdateUserInfo {
  password: string;
  profileImage: UploadChangeParam;
}
