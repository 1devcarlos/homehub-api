import bcrypt from "bcrypt";

import type { User } from "@/entities/users";
import type { IUserRepository } from "@/types/IUserRepository";
import type { IUserService } from "@/types/IUserService";
import type { RegisterUserDTO } from "@/types/RegisterUserDTO";
import { AppError } from "@/utils/AppError";

export class UserService implements IUserService {
  constructor(private readonly userRepository: IUserRepository) {}

  async register(dto: RegisterUserDTO): Promise<User> {
    const user = await this.userRepository.findByEmail(dto.email);
    if (user) {
      throw new AppError(409, "Email is not available");
    }

    const password = await bcrypt.hash(dto.password, 10);

    return this.userRepository.create({
      firstName: dto.firstName,
      lastName: dto.lastName,
      nickName: dto.nickName,
      email: dto.email,
      password,
    });
  }
}
