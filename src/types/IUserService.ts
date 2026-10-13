import type { User } from "@/entities/users";
import type { RegisterUserDTO } from "@/types/RegisterUserDTO";

export interface IUserService {
  register(dto: RegisterUserDTO): Promise<User>;
}
