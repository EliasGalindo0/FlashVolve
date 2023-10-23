import { Injectable } from '@nestjs/common';
import { CreateLoginDto } from './dto/create-login.dto';
import * as bcrypt from 'bcryptjs';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class LoginService {
  constructor(private readonly prismaService: PrismaService) {}

  async validateUser(createLoginDto: CreateLoginDto) {
    const { email, password } = createLoginDto;

    const user = await this.prismaService.user.findUnique({
      where: { email },
    });

    if (!user) {
      return null;
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return null;
    }

    return user;
  }
}
