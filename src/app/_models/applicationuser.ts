import { UserRole } from "./user_role";

export class ApplicationUser {
    id: number;
    username: string;
    password: string;
    roles: Array<UserRole>;
}