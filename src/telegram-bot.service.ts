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
    const humorCommands = ['/feliz', '/triste', '/bravo', '/medo'];
    const commandList = humorCommands.join('\n');

    this.bot.start((ctx) =>
      ctx.reply(
        `Olá, eu sou seu Bot Pessoal do Telgram!\nComo você está se sentindo hoje?\nComandos disponíveis:\n${commandList}`,
      ),
    );
    this.bot.on('text', (ctx) => this.handleIncomingMessage(ctx));
  }

  private async handleIncomingMessage(ctx: any): Promise<void> {
    const message = ctx.message.text;
    const chatId = ctx.chat.id;
    const username = ctx.chat.username;

    const humorCommands = ['/feliz', '/triste', '/bravo', '/medo'];
    const commandList = humorCommands.join('\n');

    if (humorCommands.includes(message)) {
      let response = '';

      switch (message) {
        case '/feliz':
          response = 'Que bom! Fico feliz em saber!';
          break;
        case '/triste':
          response = 'Sinto muito em ouvir isso. Espero que melhore em breve.';
          break;
        case '/bravo':
          response = 'Calma, tudo vai se resolver. Respire fundo!';
          break;
        case '/medo':
          response = 'Não se preocupe, estou aqui para te ajudar!';
          break;
      }

      ctx.reply(response);
    } else {
      ctx.reply(
        `Como você está se sentindo hoje?\nComandos disponíveis:\n${commandList}`,
      );
    }

    console.log(ctx.message);

    console.log(
      `Mensagem recebida: ${message} de chatID: ${chatId} user: ${username}`,
    );

    await this.prisma.message.create({
      data: {
        chatId,
        text: message,
        username,
      },
    });
  }

  public async launch(): Promise<void> {
    await this.bot.launch();
    console.log('Telegram bot started');
  }

  public async sendMessage(chatId: number, message: string) {
    const msg = await this.prisma.message.findFirst({
      where: { chatId },
    });

    if (msg) {
      await this.bot.telegram.sendMessage(chatId, message);
    }

    return 'deu ruim';
  }

  public async handleWebhookUpdate(update): Promise<void> {
    await this.bot.handleUpdate(update);
  }
}
