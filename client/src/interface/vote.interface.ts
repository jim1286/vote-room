export interface Vote {
  title: string;
  profileImagePath: string;
  description: string;
  userId: string;
  totalNumber: number;
  isAnonymous: boolean;
  optionList?: Option[];
}

export interface Option {
  title: string;
  number: number;
  userList: OptionUser[];
}

export interface OptionUser {
  userId: string;
  profileImagePath: string;
}
