import { z } from "zod";

export const registerUserSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  nickName: z.string().optional(),
  email: z.email(),
  password: z.string().min(8),
});

export type RegisterUserDTO = z.infer<typeof registerUserSchema>;
