import type { User } from "@/entities/users";

export type PublicUserDTO = Omit<User, "password">;
