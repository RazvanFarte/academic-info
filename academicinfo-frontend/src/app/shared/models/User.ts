import {Role} from './Role';

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  isActive: boolean;
  phoneNumber: string;
  email: string;
  roles: Role[];
  username: string;
  password: string;
}
