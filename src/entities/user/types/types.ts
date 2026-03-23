export type UserRole = {
  id: number;
  titleKg: string;
  titleRu: string;
};

export type UserMinistry = {
  id: number;
  titleKg: string;
  titleRu: string;
};

export type UserDivision = {
  id: number;
  titleKg: string;
  titleRu: string;
};

export type UserPosition = {
  id: number;
  titleKg: string;
  titleRu: string;
};

export type UserItem = {
  id: number;
  initials: string;
  fullName: string;
  username: string;

  name: string;
  surname: string;
  patronymic?: string;

  phone?: string;
  email?: string;
  photo?: string;

  dateOfBirth?: string;

  ministry?: UserMinistry;
  division?: UserDivision;
  roles: UserRole[];

  position?: UserPosition;

  enabled: boolean;
};