import { Module } from "@nestjs/common";
import { UserRepository } from "./application/user.repository";
import { UserRepositoryImpl } from "./infrastructure/user.repository.impl";
import { UserService } from "./application/user.service";

@Module({
    imports: [],
    controllers: [],
    providers: [
        UserService,
        {
            provide: UserRepository,
            useClass: UserRepositoryImpl
        }
    ],
    exports: [UserRepository]
})
export class UserModule { };
