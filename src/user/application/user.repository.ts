import User from "../domain/user.model";

export abstract class UserRepository {
  abstract findByUsername(username: string): User | undefined;
}
