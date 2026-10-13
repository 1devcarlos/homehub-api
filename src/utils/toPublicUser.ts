import type { User } from "@/entities/users";
import type { PublicUserDTO } from "@/types/PublicUserDTO";

export function toPublicUser(user: User): PublicUserDTO {
  return {
    id: user.id,
    firstName: user.firstName,
    lastName: user.lastName,
    nickName: user.nickName,
    email: user.email,
    houseId: user.houseId,
    familyRole: user.familyRole,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt,
  };
}
