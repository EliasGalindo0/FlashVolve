import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TelegramBotService } from './telegram-bot.service';
import { TelegramBotModule } from './telegram-bot.module';
import * as cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cors()); // Adicione esta linha
  await app.listen(3000);

  const telegramBot = app.select(TelegramBotModule).get(TelegramBotService);
  telegramBot.launch();
}
bootstrap();
