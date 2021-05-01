import { ApplicationUser } from "./applicationuser";
import { Role } from "./role";
import { UserRoleKey } from "./user_role_key";

export class UserRole {
    id: UserRoleKey;
    user: ApplicationUser;
    role: Role;
}