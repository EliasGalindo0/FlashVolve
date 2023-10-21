// telegram-bot.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { Telegraf } from 'telegraf';

@Injectable()
export class TelegramBotService {
  private bot: Telegraf;

  constructor(private readonly prisma: PrismaService) {
    this.bot = new Telegraf(process.env.TELEGRAM_TOKEN);
    this.setupBot();
  }

  private setupBot(): void {
    this.bot.start((ctx) => ctx.reply('Olá, eu sou o seu Bot do Telegram!'));
    this.bot.on('text', (ctx) => this.handleIncomingMessage(ctx));
  }

  private async handleIncomingMessage(ctx: any): Promise<void> {
    const message = ctx.message.text;
    const chatId = ctx.chat.id;

    console.log(ctx.message);

    // Handle incoming message logic here
    console.log(`Mensagem recebida: ${message} de chatID: ${chatId}`);

    // Save the message to the database
    await this.prisma.message.create({
      data: {
        chatId,
        text: message,
      },
    });

    // Reply to the user
    ctx.reply('Recebemos sua mensagem!');
  }

  public async launch(): Promise<void> {
    await this.bot.launch();
    console.log('Telegram bot started');
  }

  public async sendMessage(chatId: number, message: string): Promise<void> {
    await this.bot.telegram.sendMessage(chatId, message);
  }

  public async handleWebhookUpdate(update): Promise<void> {
    await this.bot.handleUpdate(update);
  }
}
