import { eq } from "drizzle-orm";

import { db } from "@/config/database";
import { type User, users } from "@/entities/users";
import { DrizzleRepository } from "@/repositories/DrizzleRepository";
import type { IUserRepository } from "@/types/IUserRepository";

export class UserRepository extends DrizzleRepository<typeof users> implements IUserRepository {
  constructor() {
    super(users);
  }

  async findByEmail(email: string): Promise<User | null> {
    const [found] = await db.select().from(users).where(eq(users.email, email));
    return found ?? null;
  }
}
