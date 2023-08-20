export interface CreateVoteRequest {
  userId: string;
  title: string;
  description: string;
  isAnonymous: boolean;
}

export interface DeleteVoteRequest {
  userId: string;
  voteTitle: string;
}

export interface OptionRequest {
  userId: string;
  voteTitle: string;
  optionTitle: string;
}

export interface UpdateOptionRequest extends OptionRequest {}

export interface CreateOptionRequest extends OptionRequest {}

export interface DeleteOptionRequest extends OptionRequest {}
