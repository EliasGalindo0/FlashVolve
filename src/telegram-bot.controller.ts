import { Controller, Post, Body, Param } from '@nestjs/common';
import { TelegramBotService } from './telegram-bot.service';

@Controller('telegram-bot')
export class TelegramBotController {
  constructor(private readonly telegramBotService: TelegramBotService) {}

  @Post('sendMessage/:chatId')
  async sendMessage(
    @Param('chatId') chatId: number,
    @Body() body: { message: string },
  ): Promise<void> {
    const { message } = body;
    await this.telegramBotService.sendMessage(chatId, message);
  }

  @Post('webhook')
  async handleWebhookUpdate(@Body() body: any): Promise<void> {
    await this.telegramBotService.handleWebhookUpdate(body);
  }
}
