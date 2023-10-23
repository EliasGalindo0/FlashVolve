import { Module } from '@nestjs/common';
import { TelegramBotController } from './telegram-bot.controller';
import { TelegramBotService } from './telegram-bot.service';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  imports: [],
  controllers: [TelegramBotController],
  providers: [TelegramBotService, PrismaService],
})
export class TelegramBotModule {}
