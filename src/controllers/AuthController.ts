import type { Request, Response } from "express";

import type { IAuthController } from "@/types/IAuthController";
import type { IUserService } from "@/types/IUserService";
import { registerUserSchema } from "@/types/RegisterUserDTO";
import { AppResponse } from "@/utils/AppResponse";
import { toPublicUser } from "@/utils/toPublicUser";

export class AuthController implements IAuthController {
  constructor(private readonly userService: IUserService) {}

  async register(req: Request, res: Response): Promise<void> {
    const dto = registerUserSchema.parse(req.body);
    const user = await this.userService.register(dto);

    const response = new AppResponse(201, "User registered", toPublicUser(user));
    response.send(res);
  }
}
