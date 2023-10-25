import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TelegramBotModule } from './telegram-bot.module';
import { APP_FILTER } from '@nestjs/core';
import { ErrorMiddleware } from './middlewares/error.middleware';
import { LoginModule } from './login/login.module';
import { MessageModule } from './message/message.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [TelegramBotModule, LoginModule, MessageModule, UserModule],
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
