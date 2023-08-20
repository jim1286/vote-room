import { IsBoolean, IsString } from "class-validator";

export class CreateVoteRequest {
  @IsString()
  userId: string;

  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsBoolean()
  isAnonymous: boolean;
}

export class DeleteVoteRequest {
  @IsString()
  userId: string;

  @IsString()
  voteTitle: string;
}

export class CreateOptionRequest {
  @IsString()
  voteTitle: string;

  @IsString()
  optionTitle: string;
}

export class UpdateOptionRequest {
  @IsString()
  userId: string;

  @IsString()
  voteTitle: string;

  @IsString()
  optionTitle: string;
}
