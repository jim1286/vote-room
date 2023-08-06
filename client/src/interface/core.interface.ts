export interface CreateRoomInfo {
  title: string;
  description: string;
  deleteAt: Date;
  anonymous: boolean;
}

export interface AddVoteOption {
  option: string;
}
