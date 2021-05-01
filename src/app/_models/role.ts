import { UserRole } from "./user_role";

export class Role {
    id: number;
    users: Array<UserRole>;
    name:string;

}