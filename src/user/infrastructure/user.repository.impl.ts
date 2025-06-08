import { Injectable } from "@nestjs/common";
import { UserRepository } from "../application/user.repository";
import User from "../domain/user.model";

@Injectable()
export class UserRepositoryImpl extends UserRepository {

  private readonly users: User[] = [
    {
      id: 1,
      username: 'carlos',
      password: '123456'
    },
    {
      id: 1,
      username: 'mazikeen',
      password: '123456'
    }
  ];

  findByUsername(username: string): User | undefined {
    return this.users.find((user: User) => user.username === username);
  }


}
