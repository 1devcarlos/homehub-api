import type { NewUser, User } from "@/entities/users";

export interface IUserRepository {
  create(data: NewUser): Promise<User>;
  findByEmail(email: string): Promise<User | null>;
}
