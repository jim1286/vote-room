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

export interface UpdateOptionRequest {
  userId: string;
  voteTitle: string;
  optionTitle: string;
}

export interface CreateOptionRequest {
  voteTitle: string;
  optionTitle: string;
}
