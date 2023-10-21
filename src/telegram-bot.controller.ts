import { Controller, Post, Body } from '@nestjs/common';
import { TelegramBotService } from './telegram-bot.service';

@Controller('telegram-bot')
export class TelegramBotController {
  constructor(private readonly telegramBotService: TelegramBotService) {}

  @Post('sendMessage')
  async sendMessage(
    @Body() body: { chatId: number; message: string },
  ): Promise<void> {
    const { chatId, message } = body;
    await this.telegramBotService.sendMessage(chatId, message);
  }

  @Post('webhook')
  async handleWebhookUpdate(@Body() body: any): Promise<void> {
    await this.telegramBotService.handleWebhookUpdate(body);
  }
}
