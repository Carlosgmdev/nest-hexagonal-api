import User from "../domain/user.model";

export abstract class UserRepository {
    constructor() { }
    abstract findByUsername(username: string): User | undefined;
}
