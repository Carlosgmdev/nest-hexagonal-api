import { Inject, Injectable } from "@nestjs/common";
import { UserRepository } from "../application/user.repository";
import User from "../domain/user.model";
import { PG_CONNECTION } from "src/database/database.provider";
import { Pool } from "pg";

@Injectable()
export class UserRepositoryImpl extends UserRepository {

    constructor(@Inject(PG_CONNECTION) private readonly pool: Pool) {
        super();
    }

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
        this.pool.query('SELECT * FROM test.test').then(console.log);
        return this.users.find((user: User) => user.username === username);
    }


}
