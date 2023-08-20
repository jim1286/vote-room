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

export class OptionRequest {
  @IsString()
  userId: string;

  @IsString()
  voteTitle: string;

  @IsString()
  optionTitle: string;
}

export class CreateOptionRequest extends OptionRequest {}

export class UpdateOptionRequest extends OptionRequest {}

export class DeleteOptionRequest extends OptionRequest {}
