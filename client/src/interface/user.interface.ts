import { UploadChangeParam } from "antd/es/upload";

export interface User {
  name: string;
  userId: string;
}

export interface UpdateUserInfo {
  password: string;
  profileImage: UploadChangeParam;
}
