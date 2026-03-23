import { z } from "zod";
import { requiredString, optionalString, optionalNumber } from "./common.schema";

export const userSchema = z.object({
  username: requiredString,
  password: optionalString,

  name: requiredString,
  surname: requiredString,
  patronymic: optionalString,

  phone: optionalString,
  email: optionalString,

  photo: optionalString,

  dateOfBirth: optionalString,

  ministryId: requiredString,
  divisionId: optionalString,

  roleIds: z.array(z.number()).min(1, "Выберите хотя бы одну роль"),

  positionId: optionalNumber,
});

export type UserFormValues = z.infer<typeof userSchema>;