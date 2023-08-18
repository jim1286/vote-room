import { IsString } from "class-validator";

export class CreateUserRequest {
  @IsString()
  userId: string;

  @IsString()
  name: string;

  @IsString()
  password: string;
}
