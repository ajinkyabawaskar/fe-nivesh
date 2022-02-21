export class NiveshUser {
  id: number;
  providedUserId: number;
  email: string;
  displayName: string;
  createdDate: Date;
  modifiedDate: Date;
  password: string;
  provider: string;
  roles: string[];
}
