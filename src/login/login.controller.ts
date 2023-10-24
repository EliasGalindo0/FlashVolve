import {
  Controller,
  Post,
  Body,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { LoginService } from './login.service';
import { CreateLoginDto } from './dto/create-login.dto';
import { JwtService } from '@nestjs/jwt';

@Controller('login')
export class LoginController {
  constructor(
    private readonly loginService: LoginService,
    private jwtService: JwtService,
  ) {}

  @Post()
  async login(@Body() createLoginDto: CreateLoginDto) {
    const user = await this.loginService.validateUser(createLoginDto);

    if (!user) {
      throw new HttpException('Invalid credentials', HttpStatus.UNAUTHORIZED);
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...userWithoutPassword } = user;

    const payload = { sub: user.password };
    const accessToken = this.jwtService.sign(payload);

    if (accessToken) {
      return { ...userWithoutPassword };
    }

    return null;
  }
}
