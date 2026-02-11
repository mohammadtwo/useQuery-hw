export type User = {
  name: string;
  emil: string;
};

export type UserWithId = User & {
  id: string;
};
