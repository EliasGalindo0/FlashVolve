import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TelegramBotService } from './telegram-bot.service';
import { TelegramBotModule } from './telegram-bot.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);

  const telegramBot = app.select(TelegramBotModule).get(TelegramBotService);
  telegramBot.launch();
}
bootstrap();
