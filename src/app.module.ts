import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TelegramBotModule } from './telegram-bot.module';
import { APP_FILTER } from '@nestjs/core';
import { ErrorMiddleware } from './middlewares/error.middleware';

@Module({
  imports: [TelegramBotModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_FILTER,
      useClass: ErrorMiddleware,
    },
  ],
})
export class AppModule {}
