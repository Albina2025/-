export type UserFormValues = {
  username: string;
  password?: string;

  name: string;
  surname: string;
  patronymic?: string;

  phone?: string;
  email?: string;
  photo?: string;

  dateOfBirth?: string;

  ministryId: number;
  divisionId: number;

  roleIds: number[];
  positionId: number;
};