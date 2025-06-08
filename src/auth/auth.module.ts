import { Module } from "@nestjs/common";
import { AuthService } from "./application/auth.service";
import { UserModule } from "src/user/user.module";
import { AuthController } from "./infrastructure/auth.controller";
import { JwtModule } from "@nestjs/jwt";

@Module({
    imports: [
        UserModule,
        JwtModule.register({
            global: true,
            secret: 'SECRET',
            signOptions: { expiresIn: '1h' }
        })
    ],
    controllers: [AuthController],
    providers: [AuthService,]
})
export class AuthModule { };
