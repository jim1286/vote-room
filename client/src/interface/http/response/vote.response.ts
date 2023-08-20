import { Vote, Option } from "@/interface";

export interface CreateVoteResponse {
  userId: string;
  title: string;
  description: string;
  isAnonymous: boolean;
}

export interface GetVoteListResponse extends Vote {
  optionList?: Option[];
}
