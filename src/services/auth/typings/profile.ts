export type AccountType = 'SHELTER' | 'PRIVATE' | 'CORPORATE';

export type Profile = {
  accountType: AccountType;
  name: string;
  street: string;
  postCode: string;
  city: string;
  region: string;
  avatar: string;
};
