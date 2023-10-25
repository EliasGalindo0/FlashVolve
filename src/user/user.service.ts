import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async create(body: any): Promise<any> {
    const { email, password } = body;

    const hashedPassword = await bcrypt.hash(password, 10);
    return await this.prisma.user.create({
      data: { email: email, password: hashedPassword },
    });
  }
}
