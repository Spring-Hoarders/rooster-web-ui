import User from "./User";

export default interface UserRole {
  userId: string;
  roleId: string;
  roleDesc: string;
  createdBy: string;
  createdAt: Date;
  lastModifiedBy: String;
  lastModifiedAt: Date;
  userEntity: { user: User };
}
