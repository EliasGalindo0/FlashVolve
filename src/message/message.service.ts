import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class MessageService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return await this.prisma.message.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
  }
}
