import { Role } from '@prisma/client';

export class ReturnUserInfoDto {
  id: number;
  email: string;
  name: string;
  surname: string;
  addressId: number;
  role: Role | null;
}
