import User from "./User";

export default interface UserRole {
  user_id: string;
  role_id: string;
  role_desc: string;
  created_by: string;
  created_at: Date;
  last_modified_by: String;
  last_modified_at: Date;
  user_entity: { user: User };
}
