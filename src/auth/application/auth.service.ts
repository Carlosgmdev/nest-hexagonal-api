import { Injectable, NotFoundException, UnauthorizedException } from "@nestjs/common";
import { UserRepository } from "src/user/application/user.repository";
import User from "src/user/domain/user.model";
import { SignInDto } from "../infrastructure/dtos/sign-in.dto";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {

    constructor(
        private readonly userRepository: UserRepository,
        private jwtService: JwtService
    ) { }

    async signIn({ username, password }: SignInDto): Promise<any> {
        const user: User | undefined = this.userRepository.findByUsername(username);
        if (!user) throw new NotFoundException('User not found');
        if (user.password !== password) throw new UnauthorizedException('Wrong password');
        const payload = { sub: user.id, username: user.username };
        const accessToken: string = await this.jwtService.signAsync(payload);
        return { accessToken };
    }

}
