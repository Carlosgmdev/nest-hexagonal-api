import { Body, Controller, Get, Post, UseGuards } from "@nestjs/common";
import { AuthService } from "../application/auth.service";
import { SignInDto } from "./dtos/sign-in.dto";
import { AuthGuard } from "./auth.guard";

@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService) { }

    @Post('sign-in')
    signIn(@Body() signInDto: SignInDto): any {
        return this.authService.signIn(signInDto);
    }

    @UseGuards(AuthGuard)
    @Get('protected')
    protected(): any {
        return { message: 'This is a protected route' };
    }

}
